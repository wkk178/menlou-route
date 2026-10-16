#!/usr/bin/env node
'use strict';

// Convert a triangulated or polygonal OBJ plus its simple MTL colors to a
// self-contained GLB without external packages. Usage:
// node tools/obj-to-glb.js model.obj model.mtl output.glb
const fs = require('node:fs');

const [, , objPath, mtlPath, outputPath] = process.argv;
if (!objPath || !mtlPath || !outputPath) {
  console.error('Usage: node tools/obj-to-glb.js <input.obj> <input.mtl> <output.glb>');
  process.exit(2);
}

function parseMaterials(text) {
  const materials = new Map();
  let current = null;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const [key, ...parts] = line.split(/\s+/);
    const values = parts.map(Number);
    if (key === 'newmtl') {
      current = { name: parts.join(' '), color: [0.8, 0.8, 0.8], alpha: 1, shininess: 0 };
      materials.set(current.name, current);
    } else if (current && key === 'Kd' && values.length >= 3) {
      current.color = values.slice(0, 3);
    } else if (current && key === 'd' && Number.isFinite(values[0])) {
      current.alpha = Math.max(0, Math.min(1, values[0]));
    } else if (current && key === 'Tr' && Number.isFinite(values[0])) {
      current.alpha = Math.max(0, Math.min(1, 1 - values[0]));
    } else if (current && key === 'Ns' && Number.isFinite(values[0])) {
      current.shininess = Math.max(0, values[0]);
    }
  }
  return materials;
}

const materialDefs = parseMaterials(fs.readFileSync(mtlPath, 'utf8'));
const vertices = [];
const normals = [];
const groups = new Map();
let currentMaterial = 'default';

function resolveIndex(index, length) {
  const value = Number(index);
  if (!Number.isInteger(value) || value === 0) throw new Error(`Invalid OBJ index: ${index}`);
  return value > 0 ? value - 1 : length + value;
}

function groupFor(name) {
  if (!groups.has(name)) groups.set(name, { positions: [], normals: [] });
  return groups.get(name);
}

function vectorAt(list, index, label) {
  const value = list[index];
  if (!value) throw new Error(`${label} index out of range: ${index + 1}`);
  return value;
}

function faceNormal(a, b, c) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
  const n = [ab[1] * ac[2] - ab[2] * ac[1], ab[2] * ac[0] - ab[0] * ac[2], ab[0] * ac[1] - ab[1] * ac[0]];
  const length = Math.hypot(...n) || 1;
  return n.map((component) => component / length);
}

for (const rawLine of fs.readFileSync(objPath, 'utf8').split(/\r?\n/)) {
  const line = rawLine.trim();
  if (!line || line.startsWith('#')) continue;
  const [key, ...parts] = line.split(/\s+/);
  if (key === 'v' && parts.length >= 3) vertices.push(parts.slice(0, 3).map(Number));
  else if (key === 'vn' && parts.length >= 3) normals.push(parts.slice(0, 3).map(Number));
  else if (key === 'usemtl') currentMaterial = parts.join(' ');
  else if (key === 'f' && parts.length >= 3) {
    const corners = parts.map((part) => {
      const fields = part.split('/');
      return {
        position: resolveIndex(fields[0], vertices.length),
        normal: fields[2] ? resolveIndex(fields[2], normals.length) : null,
      };
    });
    const group = groupFor(currentMaterial);
    for (let i = 1; i < corners.length - 1; i += 1) {
      const triangle = [corners[0], corners[i], corners[i + 1]];
      const trianglePositions = triangle.map((corner) => vectorAt(vertices, corner.position, 'vertex'));
      const generatedNormal = faceNormal(...trianglePositions);
      triangle.forEach((corner, cornerIndex) => {
        group.positions.push(...trianglePositions[cornerIndex]);
        group.normals.push(...(corner.normal === null ? generatedNormal : vectorAt(normals, corner.normal, 'normal')));
      });
    }
  }
}

if (!vertices.length || !groups.size) throw new Error('OBJ did not contain usable vertices and faces.');

const gltfMaterials = [];
const materialIndices = new Map();
for (const materialName of groups.keys()) {
  const definition = materialDefs.get(materialName) || { color: [0.8, 0.8, 0.8], alpha: 1, shininess: 0 };
  const pbr = {
    baseColorFactor: [...definition.color, definition.alpha],
    metallicFactor: 0,
    roughnessFactor: Math.max(0.72, Math.min(1, Math.sqrt(2 / (definition.shininess + 2)))),
  };
  const gltfMaterial = { name: materialName, pbrMetallicRoughness: pbr, doubleSided: true };
  if (definition.alpha < 1) {
    gltfMaterial.alphaMode = 'BLEND';
    gltfMaterial.pbrMetallicRoughness.baseColorFactor[3] = definition.alpha;
  }
  materialIndices.set(materialName, gltfMaterials.length);
  gltfMaterials.push(gltfMaterial);
}

const binaryChunks = [];
const bufferViews = [];
const accessors = [];
const primitives = [];
let byteOffset = 0;

function appendFloatAccessor(values, target) {
  while (byteOffset % 4) {
    binaryChunks.push(Buffer.from([0]));
    byteOffset += 1;
  }
  const data = Buffer.from(new Float32Array(values).buffer);
  const start = byteOffset;
  binaryChunks.push(data);
  byteOffset += data.length;
  const viewIndex = bufferViews.length;
  bufferViews.push({ buffer: 0, byteOffset: start, byteLength: data.length, target });
  const accessorIndex = accessors.length;
  const count = values.length / 3;
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < values.length; i += 3) {
    for (let axis = 0; axis < 3; axis += 1) {
      min[axis] = Math.min(min[axis], values[i + axis]);
      max[axis] = Math.max(max[axis], values[i + axis]);
    }
  }
  const accessor = { bufferView: viewIndex, componentType: 5126, count, type: 'VEC3' };
  if (target === 34962) accessor.min = min;
  if (target === 34962) accessor.max = max;
  accessors.push(accessor);
  return accessorIndex;
}

for (const [materialName, geometry] of groups) {
  if (!geometry.positions.length) continue;
  const positionAccessor = appendFloatAccessor(geometry.positions, 34962);
  const normalAccessor = appendFloatAccessor(geometry.normals, 34962);
  primitives.push({
    attributes: { POSITION: positionAccessor, NORMAL: normalAccessor },
    material: materialIndices.get(materialName),
    mode: 4,
  });
}

const binary = Buffer.concat(binaryChunks);
const gltf = {
  asset: { version: '2.0', generator: 'Menlou OBJ to GLB converter' },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ mesh: 0, name: 'Jinzhu Gate' }],
  meshes: [{ name: 'Jinzhu Gate', primitives }],
  materials: gltfMaterials,
  buffers: [{ byteLength: binary.length }],
  bufferViews,
  accessors,
};

const jsonBytes = Buffer.from(JSON.stringify(gltf), 'utf8');
const jsonPadding = (4 - (jsonBytes.length % 4)) % 4;
const paddedJson = Buffer.concat([jsonBytes, Buffer.alloc(jsonPadding, 0x20)]);
const binaryPadding = (4 - (binary.length % 4)) % 4;
const paddedBinary = Buffer.concat([binary, Buffer.alloc(binaryPadding)]);
const totalLength = 12 + 8 + paddedJson.length + 8 + paddedBinary.length;
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(totalLength, 8);
const jsonHeader = Buffer.alloc(8);
jsonHeader.writeUInt32LE(paddedJson.length, 0);
jsonHeader.writeUInt32LE(0x4e4f534a, 4);
const binaryHeader = Buffer.alloc(8);
binaryHeader.writeUInt32LE(paddedBinary.length, 0);
binaryHeader.writeUInt32LE(0x004e4942, 4);
fs.writeFileSync(outputPath, Buffer.concat([header, jsonHeader, paddedJson, binaryHeader, paddedBinary]));
console.log(`Wrote ${outputPath}: ${primitives.length} material groups, ${primitives.reduce((sum, primitive) => sum + accessors[primitive.attributes.POSITION].count, 0)} vertices, ${totalLength} bytes.`);
