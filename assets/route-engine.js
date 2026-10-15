(function () {
  const places = [
    { id: 'B1', name: '无问西东精酿', door: '北155号', theme: '创门', type: '商业', stay: 30, lat: 39.92765, lng: 116.37295, interfere: 0.1, tags: ['food', 'photo'], desc: '西四北大街北155号，门楼文化消费转译首站。' },
    { id: 'N1', name: '隆长寺山门', door: '3号院', theme: '读门', type: '文化', stay: 15, lat: 39.92803, lng: 116.37250, interfere: 0.2, tags: ['architecture', 'history'], desc: '明代圣祚隆长寺旧址，存有乾隆诗碑。' },
    { id: 'N2', name: '马福祥宅 (11号院)', door: '11号院', theme: '读门', type: '文化', stay: 10, lat: 39.92806, lng: 116.37126, interfere: 0.25, tags: ['architecture'], desc: '广亮大门代表形制，砖雕装饰精美。' },
    { id: 'N3', name: '13号院金柱大门', door: '13号院', theme: '读门', type: '文化', stay: 10, lat: 39.92807, lng: 116.37102, interfere: 0.25, tags: ['architecture'], desc: '金柱大门形制严谨，记录西四传统宅门规制。' },
    { id: 'N11', name: '京剧体验馆', door: '17号', theme: '创门', type: '商业', stay: 40, lat: 39.92808, lng: 116.37052, interfere: 0.15, tags: ['handcraft', 'photo'], desc: '体验京剧文化与街区新业态。' },
    { id: 'N12', name: '拾光茶铺', door: '21号', theme: '创门', type: '商业', stay: 30, lat: 39.92809, lng: 116.37003, interfere: 0.1, tags: ['food', 'shopping'], desc: '胡同茶饮体验点。' },
    { id: 'N39', name: '程砚秋故居', door: '39号院', theme: '推门', type: '文化', stay: 20, lat: 39.92815, lng: 116.36780, interfere: 0.3, tags: ['history', 'photo'], desc: '京剧大师程砚秋先生居住21年之处。' },
    { id: 'L5', name: '傅增湘故居', door: '五条13号院', theme: '推门', type: '文化', stay: 15, lat: 39.92950, lng: 116.37050, interfere: 0.3, tags: ['sound', 'history'], desc: '声音采集点，可聆听胡同深处的鸽哨声。' },
    { id: 'N13', name: '故事书店', door: '43号', theme: '创门', type: '商业', stay: 25, lat: 39.92816, lng: 116.36731, interfere: 0.05, tags: ['shopping', 'history'], desc: '门楼主题文创与口述史展览。' },
    { id: 'N10', name: '45号居民院落', door: '45号', theme: '推门', type: '文化', stay: 15, lat: 39.92817, lng: 116.36706, interfere: 0.4, tags: ['history'], desc: '居民生活点位，请遵循开放标识并尊重社区生活。' },
    { id: 'N9', name: '44号金柱大门', door: '44号', theme: '读门', type: '文化', stay: 10, lat: 39.92827, lng: 116.36706, interfere: 0.25, tags: ['architecture'], desc: '西四北街巷中的金柱大门代表点位。' },
    { id: 'N14', name: '胡同夜市', door: '50号', theme: '创门', type: '商业', stay: 30, lat: 39.92829, lng: 116.36632, interfere: 0.35, tags: ['food', 'photo'], desc: '胡同文化与夜间生活体验点。' },
    { id: 'B2', name: '易应茶舍', door: '西四北大街147号', theme: '创门', type: '商业', stay: 30, lat: 39.92791, lng: 116.37293, interfere: 0.1, tags: ['food'], desc: '西四北大街沿街茶舍。' },
    { id: 'B3', name: '叙杯', door: '赵登禹路144号附近', theme: '创门', type: '商业', stay: 20, lat: 39.92922, lng: 116.36726, interfere: 0.1, tags: ['food'], desc: '赵登禹路沿街店铺。' },
    { id: 'B4', name: '无名蹄花', door: '赵登禹路146-148号附近', theme: '创门', type: '商业', stay: 30, lat: 39.92906, lng: 116.36719, interfere: 0.1, tags: ['food'], desc: '赵登禹路沿街餐饮点位。' }
  ];

  function distanceMeters(a, b) {
    const y = (b.lat - a.lat) * 111320;
    const x = (b.lng - a.lng) * 111320 * Math.cos(a.lat * Math.PI / 180);
    return Math.hypot(x, y);
  }

  window.generateRoute = function (answers) {
    const targetMinutes = Number(answers.duration) || 90;
    const themeMap = { read: '读门', push: '推门', create: '创门' };
    let candidates = places.filter((place) => !(answers.avoidResident && place.interfere >= 0.3));
    const preferredTheme = themeMap[answers.theme];
    candidates = candidates.map((place) => {
      const themeScore = preferredTheme ? (place.theme === preferredTheme ? 8 : 0) : 3;
      const tagScore = (answers.tags || []).filter((tag) => place.tags.includes(tag)).length * 3;
      const familyScore = answers.profile === 'family' && place.interfere > 0.3 ? -5 : 0;
      return { ...place, score: themeScore + tagScore + familyScore };
    }).sort((a, b) => b.score - a.score);

    const first = candidates.find((place) => place.id === 'B1') || candidates[0];
    if (!first) return { route: [], totalTime: 0, distance: 0, scores: { culture: 0, business: 0, resident: 100 } };
    const route = [first];
    const remaining = candidates.filter((place) => place.id !== first.id);
    let totalTime = first.stay;
    let totalDistance = 0;
    while (remaining.length) {
      const last = route[route.length - 1];
      let nearestIndex = -1;
      let distance = Infinity;
      remaining.forEach((place, index) => {
        const candidateDistance = distanceMeters(last, place);
        const candidateTime = Math.max(1, Math.ceil(candidateDistance / 80)) + place.stay;
        const relevanceAdjustedDistance = candidateDistance - place.score * 1.5;
        if (totalTime + candidateTime <= targetMinutes && relevanceAdjustedDistance < distance) {
          nearestIndex = index;
          distance = candidateDistance;
        }
      });
      if (nearestIndex < 0) break;
      const next = remaining[nearestIndex];
      const nextTime = Math.max(1, Math.ceil(distance / 80)) + next.stay;
      route.push(next);
      totalTime += nextTime;
      totalDistance += distance;
      remaining.splice(nearestIndex, 1);
      if (totalTime >= targetMinutes) break;
    }

    const businesses = route.filter((place) => place.type === '商业').length;
    const culture = route.length - businesses;
    const respectful = route.filter((place) => place.interfere < 0.3).length;
    return {
      status: 'success',
      route: route.map(({ score, ...place }) => place),
      totalTime,
      distance: Number((totalDistance / 1000).toFixed(2)),
      scores: {
        culture: Math.round(culture / route.length * 100),
        business: Math.round(businesses / route.length * 100),
        resident: Math.round(respectful / route.length * 100)
      }
    };
  };
})();
