/**
 * 门楼层记·故事里 - 点位数据与路线生成引擎
 * 纯前端运行，不依赖后端服务。map.html、quiz.html、choose.html 共用此文件。
 *
 * window.MENLOU_NODES   全部景点数据
 * window.generateRoute  根据问卷答案生成路线
 */
(function () {
  'use strict';

  // 景点数据：theme 为"体验层·副标题"，interfere 为对居民的干扰度(0-1)，tags 为兴趣标签
  var NODES = [
    {id:"B1",name:"无问西东精酿",door:"北155号",theme:"创门·共生",type:"商业",stay:30,lat:39.92765,lng:116.37295,interfere:0.1,tags:["food","photo"],desc:"位于西四北大街北155号。提供门楼特调精酿，是文商融合的首站。"},
    {id:"B2",name:"易应茶舍",door:"西四北大街147号",theme:"创门·共生",type:"商业",stay:30,lat:39.92791,lng:116.37293,interfere:0.1,tags:["food"],desc:"西四北大街沿街茶舍，位于西四北三条路口南侧。"},
    {id:"N1",name:"隆长寺山门",door:"3号院",theme:"读门·寻古",type:"文化",stay:15,lat:39.92803,lng:116.37250,interfere:0.2,tags:["architecture","history"],desc:"【随墙门】明代圣祚隆长寺旧址，存有珍贵的乾隆诗碑。"},
    {id:"N2",name:"马福祥宅 (11号院)",door:"11号院",theme:"读门·寻古",type:"文化",stay:10,lat:39.92806,lng:116.37126,interfere:0.25,tags:["architecture"],desc:"【广亮大门】高级官宦宅门代表，牡丹缠枝砖雕极尽考究。"},
    {id:"N3",name:"13号院金柱大门",door:"13号院",theme:"读门·寻古",type:"文化",stay:10,lat:39.92807,lng:116.37102,interfere:0.25,tags:["architecture"],desc:"【金柱大门】等级仅次于广亮，完整保留了清末民初的规制。"},
    {id:"N11",name:"京剧体验馆",door:"17号",theme:"创门·共生",type:"商业",stay:40,lat:39.92808,lng:116.37052,interfere:0.15,tags:["handcraft","photo"],desc:"御霜雅集，西洋门形制，京剧文化活化。"},
    {id:"N12",name:"拾光茶铺",door:"21号",theme:"创门·共生",type:"商业",stay:30,lat:39.92809,lng:116.37003,interfere:0.1,tags:["food","shopping"],desc:"一院一茗特调茶（蛮子门）。"},
    {id:"L5",name:"傅增湘故居",door:"五条13号院",theme:"阅巷·生活",type:"文化",stay:15,lat:39.92950,lng:116.37050,interfere:0.3,tags:["sound","history"],desc:"声音采集点：收录有胡同鸽哨声，感知藏书大师的精神世界。"},
    {id:"B3",name:"叙杯",door:"赵登禹路144号附近",theme:"创门·共生",type:"商业",stay:20,lat:39.92922,lng:116.36726,interfere:0.1,tags:["food"],desc:"赵登禹路沿街店铺，位于西四北五条与四条之间。"},
    {id:"B4",name:"无名蹄花",door:"赵登禹路146-148号附近",theme:"创门·共生",type:"商业",stay:30,lat:39.92906,lng:116.36719,interfere:0.1,tags:["food"],desc:"赵登禹路沿街餐饮，临近西四北四条路口。"},
    {id:"N39",name:"程砚秋故居",door:"39号院",theme:"读门·寻古",type:"文化",stay:20,lat:39.92815,lng:116.36780,interfere:0.3,tags:["history","photo"],desc:"【如意门】京剧大师程砚秋先生居住21年之处。"},
    {id:"N13",name:"故事书店",door:"43号",theme:"创门·共生",type:"商业",stay:25,lat:39.92816,lng:116.36731,interfere:0.05,tags:["shopping","history"],desc:"门楼主题文创与口述史展览。"},
    {id:"N9",name:"44号金柱大门",door:"44号",theme:"读门·寻古",type:"文化",stay:10,lat:39.92827,lng:116.36706,interfere:0.25,tags:["architecture"],desc:"北侧双号院落代表。"},
    {id:"N10",name:"45号居民院落",door:"45号",theme:"推门·生活",type:"文化",stay:15,lat:39.92817,lng:116.36706,interfere:0.4,tags:["history"],desc:"随墙门，感受胡同原真生活。"},
    {id:"N14",name:"胡同夜市",door:"50号",theme:"创门·共生",type:"商业",stay:30,lat:39.92829,lng:116.36632,interfere:0.35,tags:["food","photo"],desc:"烟火经济体验区（如意门）。"}
  ];

  var ENTRANCE = {lat: 39.92795, lng: 116.37290};   // 西四北大街与三条路口，默认起点
  var WALK_SPEED = 80;                              // 步行速度，米/分钟
  var DIST_WEIGHT = 12;                             // 每多走 12 米，相当于少 1 分
  var MAX_STOPS = 8;
  var THEME_KEY = {read: '读门', push: '推门', create: '创门'};

  function shortTheme(t) { return String(t).split('·')[0]; }

  function distance(a, b) {
    var R = 6371000, rad = Math.PI / 180;
    var dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }

  function has(n, tag) { return n.tags.indexOf(tag) > -1; }

  // 同行人员对不同点位的偏好
  var PROFILE = {
    family:      function (n) { return (has(n, 'architecture') || has(n, 'history') ? 8 : 0) + (has(n, 'handcraft') ? 12 : 0); },
    romantic:    function (n) { return (has(n, 'photo') ? 10 : 0) + (has(n, 'food') ? 6 : 0); },
    independent: function (n) { return (has(n, 'sound') ? 10 : 0) + (has(n, 'history') ? 6 : 0) + (has(n, 'architecture') ? 4 : 0); },
    social:      function (n) { return (has(n, 'food') ? 6 : 0) + (has(n, 'handcraft') ? 10 : 0) + (n.type === '商业' ? 4 : 0); }
  };

  function eligible(n, a) {
    if (a.avoidResident && n.interfere > 0.35) return false;      // 避开居民生活区
    if (a.profile === 'family' && n.name.indexOf('精酿') > -1) return false;   // 亲子出行不含酒类门店
    return true;
  }

  function scoreNode(n, a) {
    var s = 10;
    if (a.theme && a.theme !== 'mixed' && shortTheme(n.theme) === THEME_KEY[a.theme]) s += 40;
    (a.tags || []).forEach(function (t) { if (has(n, t)) s += 14; });
    if (PROFILE[a.profile]) s += PROFILE[a.profile](n);
    if (a.avoidResident === false && n.interfere >= 0.3) s += 6;    // 愿意体验真实生活
    return s;
  }

  /**
   * answers: {theme, duration, profile, tags[], avoidResident}
   * 返回与原后端接口一致的结构：{status, route, totalTime, distance, scores}
   */
  function generateRoute(answers) {
    var a = answers || {};
    var duration = parseInt(a.duration, 10) || 90;
    var pool = NODES.filter(function (n) { return eligible(n, a); });
    var cur = ENTRANCE, time = 0, dist = 0, route = [], seenThemes = {};

    while (pool.length && route.length < MAX_STOPS) {
      var best = null, bestV = -Infinity, bestD = 0, bestT = 0;
      for (var i = 0; i < pool.length; i++) {
        var n = pool[i];
        var d = distance(cur, n);
        var t = Math.round(d / WALK_SPEED) + n.stay;
        if (time + t > duration) continue;
        var v = scoreNode(n, a) - d / DIST_WEIGHT;
        if (a.theme === 'mixed' && !seenThemes[shortTheme(n.theme)]) v += 12;   // 综合体验：鼓励覆盖不同体验层
        if (v > bestV) { bestV = v; best = n; bestD = d; bestT = t; }
      }
      if (!best) break;
      route.push(best);
      pool.splice(pool.indexOf(best), 1);
      seenThemes[shortTheme(best.theme)] = true;
      time += bestT; dist += bestD; cur = best;
    }

    var culture = route.filter(function (n) { return n.type === '文化'; }).length;
    var avgInterfere = route.length ? route.reduce(function (s, n) { return s + n.interfere; }, 0) / route.length : 0;
    var cultureScore = route.length ? Math.round(culture * 100 / route.length) : 0;

    return {
      status: 'success',
      route: route.map(function (n) {
        var o = {}; for (var k in n) o[k] = n[k];
        o.theme = shortTheme(n.theme);
        return o;
      }),
      totalTime: time,
      distance: Math.round(dist / 10) / 100,
      scores: {culture: cultureScore, business: 100 - cultureScore, resident: Math.round(100 - avgInterfere * 100)},
      request: a,
      generatedAt: new Date().toISOString()
    };
  }

  window.MENLOU_NODES = NODES;
  window.generateRoute = generateRoute;
})();