from flask import Flask, request, jsonify
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)

# ================= 数据源：坐标已同步为真实 GPS 校准值 =================
# 基准点：
# 隆长寺 (3号): 39.927887, 116.372587 (东端起点)
# 程砚秋故居 (39号): 39.927811, 116.367759 (西端核心点)
# 其他节点按胡同走向线性分布校准

NODES = [
    {
        "id": "N1",
        "name": "隆长寺山门 (3号)",
        "theme": "读门",
        "type": "文化",
        "stay": 15,
        "lat": 39.927887,
        "lng": 116.372587,
        "interfere": 0.2,
        "tags": ["architecture", "history"],
        "desc": "明代圣祚隆长寺旧址，存有乾隆诗碑，山门形制完整"
    },
    {
        "id": "N2",
        "name": "广亮大门展 (27号)",
        "theme": "读门",
        "type": "文化",
        "stay": 10,
        "lat": 39.927845,
        "lng": 116.370850,
        "interfere": 0.25,
        "tags": ["architecture"],
        "desc": "高级官宦宅门，门簪四枚雕牡丹，寓意富贵"
    },
    {
        "id": "N3",
        "name": "程砚秋故居 (39号)",
        "theme": "推门",
        "type": "文化",
        "stay": 20,
        "lat": 39.927811,
        "lng": 116.367759,
        "interfere": 0.3,
        "tags": ["history", "photo"],
        "desc": "京剧大师程砚秋先生居住21年，院内石榴树为先生手植"
    },
    {
        "id": "N4",
        "name": "开放院落A (45号)",
        "theme": "推门",
        "type": "文化",
        "stay": 15,
        "lat": 39.927795,
        "lng": 116.369200,
        "interfere": 0.4,
        "tags": ["history"],
        "desc": "居民口述历史，砖雕墀头保存完好"
    },
    {
        "id": "N5",
        "name": "拾光茶铺",
        "theme": "创门",
        "type": "商业",
        "stay": 30,
        "lat": 39.927780,
        "lng": 116.368500,
        "interfere": 0.1,
        "tags": ["food", "shopping"],
        "desc": "一院一茗特调茶，可翻阅《门楼里·故事集》"
    },
    {
        "id": "N6",
        "name": "京剧体验馆",
        "theme": "创门",
        "type": "商业",
        "stay": 40,
        "lat": 39.927830,
        "lng": 116.371200,
        "interfere": 0.15,
        "tags": ["handcraft", "photo"],
        "desc": "御霜雅集主题，戏服旅拍、京剧茶点体验"
    },
    {
        "id": "N7",
        "name": "手作工坊",
        "theme": "创门",
        "type": "商业",
        "stay": 35,
        "lat": 39.927770,
        "lng": 116.367900,
        "interfere": 0.1,
        "tags": ["handcraft"],
        "desc": "砖雕拓印、拼豆制作、脸谱绘制等DIY体验"
    },
    {
        "id": "N8",
        "name": "故事书店",
        "theme": "创门",
        "type": "商业",
        "stay": 25,
        "lat": 39.927760,
        "lng": 116.367400,
        "interfere": 0.05,
        "tags": ["shopping", "history"],
        "desc": "门楼主题文创、故事集、主理人展示墙"
    },
    {
        "id": "N9",
        "name": "胡同夜市",
        "theme": "创门",
        "type": "商业",
        "stay": 30,
        "lat": 39.927750,
        "lng": 116.367000,
        "interfere": 0.35,
        "tags": ["food", "photo"],
        "desc": "胡同小吃、手作摊位、露天电影"
    }
]


def calc_distance(lat1, lng1, lat2, lng2):
    """计算两点间实际步行距离（米）"""
    R = 6371000
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lng2 - lng1)
    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2) ** 2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


@app.route('/')
def index():
    return jsonify({
        "message": "🚪 门楼层记·故事里 - 后端服务运行中",
        "endpoints": {"GET /api/nodes": "获取所有节点", "POST /api/generate-route": "生成推荐路线"}
    })


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

    # 1. 节点筛选与动态评分
    candidates = []
    for node in NODES:
        if avoid_resident and node['interfere'] > 0.3:
            continue

        score = 0
        # 主题匹配（权重最高）
        if theme == 'read' and node['theme'] == '读门':
            score += 40
        elif theme == 'push' and node['theme'] == '推门':
            score += 40
        elif theme == 'create' and node['theme'] == '创门':
            score += 40
        elif theme == 'mixed':
            score += 15

        # 标签匹配
        score += len([t for t in tags if t in node['tags']]) * 12

        # 画像微调
        if profile == 'family' and node['type'] == '商业': score += 10
        if profile == 'romantic' and 'photo' in node['tags']: score += 10
        if profile == 'independent' and node['theme'] == '读门': score += 8

        candidates.append({**node, 'score': score})

    # 按评分降序，取前6个候选
    candidates.sort(key=lambda x: x['score'], reverse=True)
    selected = candidates[:6]

    # 2. 贪心路径规划（按实际坐标距离排序，确保路线连贯）
    if not selected:
        return jsonify({"status": "error", "message": "无符合条件节点"}), 400

    route = []
    # 优先从N1（隆长寺山门）开始，若不在候选集则选评分最高者
    start_node = next((n for n in selected if n['id'] == 'N1'), selected[0])
    route.append(start_node)
    visited = {start_node['id']}

    remaining = [n for n in selected if n['id'] != start_node['id']]
    total_time = start_node['stay']
    total_dist = 0

    while remaining and total_time < duration:
        last = route[-1]
        # 找距离最近且时间允许的下一个点
        best = None
        min_dist = float('inf')

        for node in remaining:
            dist = calc_distance(last['lat'], last['lng'], node['lat'], node['lng'])
            walk_min = int(dist / 80)  # 按步行80米/分钟估算
            if total_time + walk_min + node['stay'] <= duration:
                if dist < min_dist:
                    min_dist = dist
                    best = node

        if not best: break
        route.append(best)
        visited.add(best['id'])
        remaining.remove(best)
        total_time += int(min_dist / 80) + best['stay']
        total_dist += min_dist / 1000  # 转为公里

    # 3. 计算三维评分
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
    print("访问地址：http://127.0.0.1:5000")
    app.run(debug=True, port=5000)
