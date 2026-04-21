from flask import Flask, request, jsonify
from flask_cors import CORS
import math, json, os
from datetime import datetime
from collections import Counter

app = Flask(__name__)
CORS(app)

DATA_FILE = 'user_data.json'
CONFIG_FILE = 'config.json'

# --- 节点数据：已根据平面图和号牌分布精准修正坐标 ---
NODES = [
    {"id": "B1", "name": "无问西东精酿", "door": "北155号", "theme": "创门", "type": "商业", "stay": 30,
     "lat": 39.92765, "lng": 116.37295, "interfere": 0.1, "tags": ["food", "photo"],
     "desc": "西四北大街北155号，门楼文化消费转译首站。"},
    {"id": "N1", "name": "隆长寺旧址", "door": "1号", "theme": "读门", "type": "文化", "stay": 15, "lat": 39.92803,
     "lng": 116.37250, "interfere": 0.2, "tags": ["architecture", "history"],
     "desc": "明代圣祚隆长寺旧址（随墙门），存乾隆诗碑。"},
    {"id": "N2", "name": "11号广亮大门", "door": "11号", "theme": "读门", "type": "文化", "stay": 10, "lat": 39.92806,
     "lng": 116.37126, "interfere": 0.25, "tags": ["architecture"], "desc": "马福祥故居，旧时高级官宦宅门代表。"},
    {"id": "N3", "name": "13号金柱大门", "door": "13号", "theme": "读门", "type": "文化", "stay": 10, "lat": 39.92807,
     "lng": 116.37102, "interfere": 0.25, "tags": ["architecture"], "desc": "金柱大门，规制严谨，砖雕精美。"},
    {"id": "N11", "name": "京剧体验馆", "door": "17号", "theme": "创门", "type": "商业", "stay": 40, "lat": 39.92808,
     "lng": 116.37052, "interfere": 0.15, "tags": ["handcraft", "photo"], "desc": "御霜雅集，西洋门形制，京剧文化活化。"},
    {"id": "N12", "name": "拾光茶铺", "door": "21号", "theme": "创门", "type": "商业", "stay": 30, "lat": 39.92809,
     "lng": 116.37003, "interfere": 0.1, "tags": ["food", "shopping"], "desc": "一院一茗特调茶（蛮子门）。"},
    {"id": "N8", "name": "程砚秋故居", "door": "39号", "theme": "推门", "type": "文化", "stay": 20, "lat": 39.92815,
     "lng": 116.36780, "interfere": 0.3, "tags": ["history", "photo"], "desc": "京剧大师居住21年（如意门）。"},
    {"id": "L5", "name": "傅增湘故居", "door": "五条13号", "theme": "推门", "type": "文化", "stay": 15, "lat": 39.92950,
     "lng": 116.37050, "interfere": 0.3, "tags": ["sound", "history"], "desc": "声音采集点：收录胡同深处的鸽哨声。"},
    {"id": "N13", "name": "故事书店", "door": "43号", "theme": "创门", "type": "商业", "stay": 25, "lat": 39.92816,
     "lng": 116.36731, "interfere": 0.05, "tags": ["shopping", "history"], "desc": "门楼主题文创与口述史展览。"},
    {"id": "N10", "name": "45号居民院落", "door": "45号", "theme": "推门", "type": "文化", "stay": 15, "lat": 39.92817,
     "lng": 116.36706, "interfere": 0.4, "tags": ["history"], "desc": "随墙门，感受胡同原真生活。"},
    {"id": "N9", "name": "44号金柱大门", "door": "44号", "theme": "读门", "type": "文化", "stay": 10, "lat": 39.92827,
     "lng": 116.36706, "interfere": 0.25, "tags": ["architecture"], "desc": "北侧双号院落代表。"},
    {"id": "N14", "name": "胡同夜市", "door": "50号", "theme": "创门", "type": "商业", "stay": 30, "lat": 39.92829,
     "lng": 116.36632, "interfere": 0.35, "tags": ["food", "photo"], "desc": "烟火经济体验区（如意门）。"}
]


def load_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"theme_weights": {"读门": 40, "推门": 40, "创门": 40, "mixed": 15},
            "tag_weights": {"architecture": 12, "history": 12, "photo": 12, "sound": 15, "handcraft": 12},
            "profile_weights": {"family": 10, "romantic": 10, "independent": 8, "social": 5},
            "last_updated": datetime.now().isoformat()}


def save_config(config):
    config["last_updated"] = datetime.now().isoformat()
    with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)


def load_user_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []


def save_user_data(record):
    data = load_user_data()
    data.append(record)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def update_weights_from_data():
    user_data = load_user_data()
    if len(user_data) < 5: return False
    config = load_config()
    theme_counter = Counter()
    for record in user_data[-50:]:
        req = record.get('request', {})
        theme_counter[req.get('theme', 'mixed')] += 1
    for theme in config["theme_weights"]:
        count = theme_counter.get(theme, 0)
        config["theme_weights"][theme] = max(10, min(60, config["theme_weights"][theme] + (5 if count > 10 else -2)))
    save_config(config)
    return True


def calc_distance(lat1, lng1, lat2, lng2):
    R = 6371000
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lng2 - lng1)
    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2) ** 2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


@app.route('/')
def index():
    return jsonify({"message": "🚪 门楼层记·故事里 - 后端服务已启动"})


@app.route('/api/nodes', methods=['GET'])
def get_nodes():
    return jsonify(NODES)


@app.route('/api/generate-route', methods=['POST'])
def generate_route():
    data = request.get_json()
    theme = data.get('theme', 'mixed')
    duration = int(data.get('duration', 90))
    avoid_resident = data.get('avoidResident', False)

    config = load_config()
    candidates = []
    for node in NODES:
        if avoid_resident and node['interfere'] > 0.35: continue
        score = config["theme_weights"].get(node['theme'], 15)
        for tag in data.get('tags', []):
            if tag in node['tags']: score += config["tag_weights"].get(tag, 5)
        candidates.append({**node, 'score': score})

    candidates.sort(key=lambda x: x['score'], reverse=True)
    selected = candidates[:6]

    # 构建路径
    route = []
    start_node = next((n for n in selected if n['id'] == 'B1'), selected[0])
    route.append(start_node)
    remaining = [n for n in selected if n['id'] != start_node['id']]
    total_time, total_dist = start_node['stay'], 0

    while remaining and total_time < duration:
        last = route[-1]
        best, min_dist = None, float('inf')
        for node in remaining:
            dist = calc_distance(last['lat'], last['lng'], node['lat'], node['lng'])
            if total_time + int(dist / 80) + node['stay'] <= duration and dist < min_dist:
                min_dist, best = dist, node
        if not best: break
        route.append(best)
        remaining.remove(best)
        total_time += int(min_dist / 80) + best['stay']
        total_dist += min_dist / 1000

    result = {
        "status": "success", "route": route, "totalTime": total_time, "distance": round(total_dist, 2),
        "scores": {"culture": 85, "business": 15, "resident": 90}
    }
    save_user_data({"timestamp": datetime.now().isoformat(), "request": data, "response": result})
    if len(load_user_data()) % 10 == 0: update_weights_from_data()
    return jsonify(result)


@app.route('/api/data-insights', methods=['GET'])
def data_insights():
    user_data = load_user_data()
    config = load_config()
    return jsonify({
        "total_records": len(user_data),
        "current_weights": config,
        "recent_requests": user_data[-5:]
    })


if __name__ == '__main__':
    print("🚀 门楼层记后端服务启动中...")
    print("📊 数据洞察接口: http://127.0.0.1:5000/api/data-insights")
    app.run(debug=True, port=5000)
