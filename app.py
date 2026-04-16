from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 节点数据
NODES = [
    {"id": "N1", "name": "隆长寺山门", "theme": "读门", "type": "文化", "stay": 15, "lat": 39.9253, "lng": 116.3745,
     "interfere": 0.2, "tags": ["architecture", "history", "photo"]},
    {"id": "N2", "name": "程砚秋故居", "theme": "推门", "type": "文化", "stay": 20, "lat": 39.9248, "lng": 116.3758,
     "interfere": 0.3, "tags": ["history", "photo"]},
    {"id": "N3", "name": "广亮大门实景展", "theme": "读门", "type": "文化", "stay": 10, "lat": 39.9256, "lng": 116.3762,
     "interfere": 0.25, "tags": ["architecture", "photo"]},
    {"id": "N4", "name": "开放院落A", "theme": "推门", "type": "文化", "stay": 15, "lat": 39.9244, "lng": 116.3765,
     "interfere": 0.4, "tags": ["history"]},
    {"id": "N5", "name": "拾光茶铺", "theme": "创门", "type": "商业", "stay": 30, "lat": 39.9250, "lng": 116.3772,
     "interfere": 0.1, "tags": ["food", "shopping"]},
    {"id": "N6", "name": "京剧体验馆", "theme": "创门", "type": "商业", "stay": 40, "lat": 39.9255, "lng": 116.3752,
     "interfere": 0.15, "tags": ["handcraft", "photo", "shopping"]},
    {"id": "N7", "name": "手作工坊", "theme": "创门", "type": "商业", "stay": 35, "lat": 39.9247, "lng": 116.3778,
     "interfere": 0.1, "tags": ["handcraft", "shopping"]},
    {"id": "N8", "name": "故事书店", "theme": "创门", "type": "商业", "stay": 25, "lat": 39.9252, "lng": 116.3785,
     "interfere": 0.05, "tags": ["shopping", "history"]},
    {"id": "N9", "name": "胡同夜市", "theme": "创门", "type": "商业", "stay": 30, "lat": 39.9242, "lng": 116.3770,
     "interfere": 0.35, "tags": ["food", "shopping", "photo"]}
]

EDGES = {
    "N1": {"N2": 4, "N3": 3}, "N2": {"N1": 4, "N4": 5, "N5": 3}, "N3": {"N1": 3, "N6": 6},
    "N4": {"N2": 5, "N7": 4}, "N5": {"N2": 3, "N7": 2}, "N6": {"N3": 6, "N9": 5},
    "N7": {"N4": 4, "N5": 2, "N8": 3}, "N8": {"N7": 3, "N9": 4}, "N9": {"N6": 5, "N8": 4}
}


# 首页路由
@app.route('/')
def index():
    return jsonify({
        "message": "🚪 门楼层记·故事里 - 后端服务运行中",
        "endpoints": {
            "GET /api/nodes": "获取所有节点",
            "POST /api/generate-route": "生成推荐路线"
        }
    })


# 获取所有节点
@app.route('/api/nodes', methods=['GET'])
def get_nodes():
    return jsonify(NODES)


# 生成路线
@app.route('/api/generate-route', methods=['POST'])
def generate_route():
    data = request.get_json()
    theme = data.get('theme', 'mixed')
    duration = int(data.get('duration', 90))
    profile = data.get('profile', 'independent')
    tags = data.get('tags', [])
    avoid_resident = data.get('avoidResident', False)

    # 简单返回示例数据
    result = {
        "status": "success",
        "route": NODES[:3],
        "totalTime": 60,
        "scores": {"culture": 80, "business": 20, "resident": 85}
    }
    return jsonify(result)


if __name__ == '__main__':
    print("🚀 门楼层记后端服务启动中...")
    print("访问地址：http://127.0.0.1:5000")
    app.run(debug=True, port=5000)