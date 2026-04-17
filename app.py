from flask import Flask, request, jsonify
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)


# ================= 节点数据源（坐标已与map.html完全同步） =================
# 基于GPS锚点线性插值计算：
# 东端：隆长寺 (3号) 39.927887, 116.372587
# 西端：西口 (56号) 39.927784, 116.367239

def calc_coord(door):
    east_lat, east_lng, east_door = 39.927887, 116.372587, 3
    west_lat, west_lng, west_door = 39.927784, 116.367239, 56
    ratio = (door - east_door) / (west_door - east_door)
    lat = east_lat + (west_lat - east_lat) * ratio
    lng = east_lng + (west_lng - east_lng) * ratio
    return lat, lng


NODES = [
    {"id": "N1", "name": "隆长寺山门", "door": "3号", "theme": "读门", "type": "文化", "stay": 15,
     "lat": calc_coord(3)[0], "lng": calc_coord(3)[1], "interfere": 0.2, "tags": ["architecture", "history"],
     "desc": "明代圣祚隆长寺旧址"},
    {"id": "N2", "name": "广亮大门展", "door": "11号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(11)[0], "lng": calc_coord(11)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "广亮大门，门簪四枚"},
    {"id": "N3", "name": "金柱大门", "door": "13号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(13)[0], "lng": calc_coord(13)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "金柱大门，等级次高"},
    {"id": "N4", "name": "广亮大门", "door": "15号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(15)[0], "lng": calc_coord(15)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "广亮大门，高级官宦宅门"},
    {"id": "N5", "name": "广亮大门", "door": "27号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(27)[0], "lng": calc_coord(27)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "广亮大门，重要门楼"},
    {"id": "N6", "name": "程砚秋故居", "door": "39号", "theme": "推门", "type": "文化", "stay": 20,
     "lat": calc_coord(39)[0], "lng": calc_coord(39)[1], "interfere": 0.3, "tags": ["history", "photo"],
     "desc": "程砚秋居住21年"},
    {"id": "N7", "name": "广亮大门", "door": "33号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(33)[0], "lng": calc_coord(33)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "广亮大门，保存完好"},
    {"id": "N8", "name": "金柱大门", "door": "35号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(35)[0], "lng": calc_coord(35)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "金柱大门，砖雕精美"},
    {"id": "N9", "name": "金柱大门", "door": "44号", "theme": "读门", "type": "文化", "stay": 10,
     "lat": calc_coord(44)[0], "lng": calc_coord(44)[1], "interfere": 0.25, "tags": ["architecture"],
     "desc": "金柱大门，形制完整"},
    {"id": "N10", "name": "拾光茶铺", "door": "21号", "theme": "创门", "type": "商业", "stay": 30,
     "lat": calc_coord(21)[0], "lng": calc_coord(21)[1], "interfere": 0.1, "tags": ["food", "shopping"],
     "desc": "一院一茗特调茶"},
    {"id": "N11", "name": "京剧体验馆", "door": "17号", "theme": "创门", "type": "商业", "stay": 40,
     "lat": calc_coord(17)[0], "lng": calc_coord(17)[1], "interfere": 0.15, "tags": ["handcraft", "photo"],
     "desc": "御霜雅集主题"},
    {"id": "N12", "name": "手作工坊", "door": "45号", "theme": "创门", "type": "商业", "stay": 35,
     "lat": calc_coord(45)[0], "lng": calc_coord(45)[1], "interfere": 0.1, "tags": ["handcraft"],
     "desc": "砖雕拓印体验"},
    {"id": "N13", "name": "故事书店", "door": "43号", "theme": "创门", "type": "商业", "stay": 25,
     "lat": calc_coord(43)[0], "lng": calc_coord(43)[1], "interfere": 0.05, "tags": ["shopping", "history"],
     "desc": "门楼主题文创"},
    {"id": "N14", "name": "胡同夜市", "door": "50号", "theme": "创门", "type": "商业", "stay": 30,
     "lat": calc_coord(50)[0], "lng": calc_coord(50)[1], "interfere": 0.35, "tags": ["food", "photo"],
     "desc": "胡同小吃摊位"}
]


def calc_distance(lat1, lng1, lat2, lng2):
    R = 6371000
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lng2 - lng1)
    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2) ** 2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


@app.route('/')
def index():
    return jsonify({"message": "🚪 门楼层记·故事里 - 后端服务运行中"})


@app.route('/api/nodes', methods=['GET'])
def get_nodes():
    return jsonify(NODES)


@app.route('/api/generate-route', methods=['POST'])
def generate_route():
    data = request.get_json()
    theme = data.get('theme', 'mixed')
    duration = int(data.get('duration', 90))
    profile = data.get('profile', 'independent')
    tags = data.get('tags', [])
    avoid_resident = data.get('avoidResident', False)

    candidates = []
    for node in NODES:
        if avoid_resident and node['interfere'] > 0.3: continue
        score = 0
        if theme == 'read' and node['theme'] == '读门':
            score += 40
        elif theme == 'push' and node['theme'] == '推门':
            score += 40
        elif theme == 'create' and node['theme'] == '创门':
            score += 40
        elif theme == 'mixed':
            score += 15
        score += len([t for t in tags if t in node['tags']]) * 12
        if profile == 'family' and node['type'] == '商业': score += 10
        if profile == 'romantic' and 'photo' in node['tags']: score += 10
        candidates.append({**node, 'score': score})

    candidates.sort(key=lambda x: x['score'], reverse=True)
    selected = candidates[:6]

    if not selected:
        return jsonify({"status": "error", "message": "无符合条件节点"}), 400

    route = []
    start_node = next((n for n in selected if n['id'] == 'N1'), selected[0])
    route.append(start_node)
    visited = {start_node['id']}
    remaining = [n for n in selected if n['id'] != start_node['id']]
    total_time = start_node['stay']
    total_dist = 0

    while remaining and total_time < duration:
        last = route[-1]
        best, min_dist = None, float('inf')
        for node in remaining:
            dist = calc_distance(last['lat'], last['lng'], node['lat'], node['lng'])
            walk_min = int(dist / 80)
            if total_time + walk_min + node['stay'] <= duration and dist < min_dist:
                min_dist, best = dist, node
        if not best: break
        route.append(best)
        visited.add(best['id'])
        remaining.remove(best)
        total_time += int(min_dist / 80) + best['stay']
        total_dist += min_dist / 1000

    culture_cnt = sum(1 for n in route if n['type'] == '文化')
    business_cnt = sum(1 for n in route if n['type'] == '商业')
    avg_interfere = sum(n['interfere'] for n in route) / len(route)

    result = {
        "status": "success",
        "route": route,
        "totalTime": total_time,
        "distance": round(total_dist, 2),
        "scores": {
            "culture": round((culture_cnt / len(route)) * 100),
            "business": round((business_cnt / len(route)) * 100),
            "resident": round((1 - avg_interfere) * 100)
        }
    }
    return jsonify(result)


if __name__ == '__main__':
    print("🚀 门楼层记后端服务启动中...")
    app.run(debug=True, port=5000)
