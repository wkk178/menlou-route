from flask import Flask, request, jsonify
from flask_cors import CORS
import math, json, os
from datetime import datetime
from collections import Counter

app = Flask(__name__)
CORS(app)

DATA_FILE = 'user_data.json'
CONFIG_FILE = 'config.json'

# 加载/保存配置
def load_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"theme_weights": {"读门":40,"推门":40,"创门":40,"mixed":15},
            "tag_weights": {"architecture":12,"history":12,"photo":12,"handcraft":12,"food":12,"shopping":12},
            "profile_weights": {"family":10,"romantic":10,"independent":8,"social":5},
            "last_updated": datetime.now().isoformat()}

def save_config(config):
    config["last_updated"] = datetime.now().isoformat()
    with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)

# 加载/保存用户数据
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

# 自动分析数据并更新权重（低成本"模型反馈"）
def update_weights_from_data():
    user_data = load_user_data()
    if len(user_data) < 5: return False
    
    config = load_config()
    theme_counter = Counter()
    tag_counter = Counter()
    profile_counter = Counter()
    
    for record in user_data[-50:]:
        req = record.get('request', {})
        theme_counter[req.get('theme','mixed')] += 1
        profile_counter[req.get('profile','independent')] += 1
        for tag in req.get('tags', []):
            tag_counter[tag] += 1
            
    for theme in config["theme_weights"]:
        count = theme_counter.get(theme, 0)
        config["theme_weights"][theme] = max(10, min(60, config["theme_weights"][theme] + (5 if count > 10 else -2)))
        
    for tag in config["tag_weights"]:
        count = tag_counter.get(tag, 0)
        config["tag_weights"][tag] = max(5, min(20, config["tag_weights"][tag] + (3 if count > 8 else -1)))
        
    save_config(config)
    return True

# ================= 节点数据（严格对照《门楼形制对照表》） =================
def calc_coord(door):
    east_lat, east_lng, east_door = 39.927887, 116.372587, 1
    west_lat, west_lng, west_door = 39.927750, 116.366500, 56
    ratio = (door - east_door) / (west_door - east_door)
    lat = east_lat + (west_lat - east_lat) * ratio
    lng = east_lng + (west_lng - east_lng) * ratio
    return lat, lng

NODES = [
    {"id":"N1","name":"隆长寺山门","door":"1号","theme":"读门","type":"文化","stay":15,"lat":calc_coord(1)[0],"lng":calc_coord(1)[1],"interfere":0.2,"tags":["architecture","history"],"desc":"明代圣祚隆长寺旧址（随墙门）"},
    {"id":"N2","name":"广亮大门","door":"11号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(11)[0],"lng":calc_coord(11)[1],"interfere":0.25,"tags":["architecture"],"desc":"广亮大门，等级最高"},
    {"id":"N3","name":"金柱大门","door":"13号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(13)[0],"lng":calc_coord(13)[1],"interfere":0.25,"tags":["architecture"],"desc":"金柱大门，等级次高"},
    {"id":"N4","name":"广亮大门","door":"15号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(15)[0],"lng":calc_coord(15)[1],"interfere":0.25,"tags":["architecture"],"desc":"广亮大门，高级官宦宅门"},
    {"id":"N5","name":"广亮大门","door":"27号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(27)[0],"lng":calc_coord(27)[1],"interfere":0.25,"tags":["architecture"],"desc":"广亮大门，保存完好"},
    {"id":"N6","name":"广亮大门","door":"33号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(33)[0],"lng":calc_coord(33)[1],"interfere":0.25,"tags":["architecture"],"desc":"广亮大门，形制完整"},
    {"id":"N7","name":"金柱大门","door":"35号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(35)[0],"lng":calc_coord(35)[1],"interfere":0.25,"tags":["architecture"],"desc":"金柱大门，砖雕精美"},
    {"id":"N8","name":"程砚秋故居","door":"39号","theme":"推门","type":"文化","stay":20,"lat":calc_coord(39)[0],"lng":calc_coord(39)[1],"interfere":0.3,"tags":["history","photo"],"desc":"程砚秋居住21年（如意门）"},
    {"id":"N9","name":"金柱大门","door":"44号","theme":"读门","type":"文化","stay":10,"lat":calc_coord(44)[0],"lng":calc_coord(44)[1],"interfere":0.25,"tags":["architecture"],"desc":"金柱大门，门楼形制完整"},
    {"id":"N10","name":"开放院落","door":"45号","theme":"推门","type":"文化","stay":15,"lat":calc_coord(45)[0],"lng":calc_coord(45)[1],"interfere":0.4,"tags":["history"],"desc":"随墙门，原汁原味"},
    {"id":"N11","name":"京剧体验馆","door":"17号","theme":"创门","type":"商业","stay":40,"lat":calc_coord(17)[0],"lng":calc_coord(17)[1],"interfere":0.15,"tags":["handcraft","photo"],"desc":"御霜雅集主题（西洋门）"},
    {"id":"N12","name":"拾光茶铺","door":"21号","theme":"创门","type":"商业","stay":30,"lat":calc_coord(21)[0],"lng":calc_coord(21)[1],"interfere":0.1,"tags":["food","shopping"],"desc":"一院一茗特调茶（蛮子门）"},
    {"id":"N13","name":"故事书店","door":"43号","theme":"创门","type":"商业","stay":25,"lat":calc_coord(43)[0],"lng":calc_coord(43)[1],"interfere":0.05,"tags":["shopping","history"],"desc":"门楼主题文创（蛮子门）"},
    {"id":"N14","name":"胡同夜市","door":"50号","theme":"创门","type":"商业","stay":30,"lat":calc_coord(50)[0],"lng":calc_coord(50)[1],"interfere":0.35,"tags":["food","photo"],"desc":"胡同小吃摊位（如意门）"}
]

def calc_distance(lat1, lng1, lat2, lng2):
    R = 6371000
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lng2 - lng1)
    a = math.sin(dphi/2)**2 + math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

@app.route('/')
def index():
    return jsonify({"message": "🚪 门楼层记·故事里 - 名主题活动策划方案"})

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
    
    config = load_config()
    candidates = []
    for node in NODES:
        if avoid_resident and node['interfere'] > 0.3: continue
        score = 0
        score += config["theme_weights"].get(node['theme'], 15)
        for tag in tags:
            if tag in node['tags']:
                score += config["tag_weights"].get(tag, 5)
        score += config["profile_weights"].get(profile, 5)
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
        
    culture_cnt = sum(1 for n in route if n['type']=='文化')
    business_cnt = sum(1 for n in route if n['type']=='商业')
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
    
    user_record = {
        'timestamp': datetime.now().isoformat(),
        'request': data,
        'response': {"route_ids": [n['id'] for n in route], "totalTime": total_time}
    }
    save_user_data(user_record)
    
    if len(load_user_data()) % 10 == 0:
        update_weights_from_data()
        
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
