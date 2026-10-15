(function () {
  const EN = {
    "首页": "Home", "智能推荐": "Smart Picks", "数字导览": "Digital Guide", "3D展厅": "3D Gallery", "3D 展厅": "3D Gallery", "我的路线": "My Route", "项目介绍": "About",
    "从这里，开启胡同漫游": "Begin Your Hutong Walk", "核心功能一触即达，慢慢读懂西四门楼": "Explore Xisi, one historic gate at a time", "今日推荐": "Featured Today",
    "门楼故事 · 读门": "Gate Story · Discover", "从金柱大门读懂院落礼序": "Discover courtyard traditions through the gate", "看看门扇的位置、门前的尺度，如何藏着一座院子的旧日规矩。": "See how the gate's position and proportions reflect the traditions of a courtyard home.",
    "胡同漫游 · 阅巷": "Hutong Walk · Explore", "沿着西四北三条，慢行一段旧时光": "A Slow Walk Along Xisi North 3rd Alley", "结合数字导览与沿途点位，循着街巷肌理发现门楼、故居和邻里记忆。": "Follow the digital guide to discover historic gates, former homes, and neighborhood stories.",
    "文化体验 · 新颜": "Culture · Living Heritage", "在传统街巷里遇见当代生活": "Meet Contemporary Life in Historic Lanes", "从门楼故事出发，继续探索胡同里的文化空间与社区新业态。": "Continue from the gate stories into the cultural spaces and local businesses of the hutong.",
    "🎯 开启漫步路线": "🎯 Start Exploring", "智能路线推荐": "Smart Route Planner", "选择你的游览方式": "Choose How to Explore", "自主游览": "Explore Freely", "查看全部景点": "View All Places", "定制我的路线": "Plan My Route",
    "上一题": "Previous", "下一题": "Next", "生成我的路线": "Create My Route", "计算中...": "Calculating...", "景点列表": "Places", "📍 漫步动线详情": "📍 Route Details", "⏱ 总计用时": "⏱ Total Time", "🚶 步行距离": "🚶 Walking Distance", "📊 文化深度": "📊 Culture Score",
    "数据加载中...": "Loading map data...", "寻古轴 (三条)": "Historic Route (3rd Alley)", "商业/生活轴": "Local Life & Shops", "注意脚下台阶及来往车辆；进入居民院落前请确认开放标识，避免拍摄居民室内。": "Watch for steps and traffic. Check access signs before entering courtyards and do not photograph residents indoors.",
    "返回数字导览": "Back to Digital Guide", "技术原型展示": "Prototype Model", "🎧 听·胡同里的金柱门往事": "🎧 Listen · Stories of the Jinzhumen Gate", "查看 3D 数字化档案": "View 3D Archive", "正在打开门楼模型…": "Opening the gate model…", "模型加载中…": "Loading model…", "模型加载失败，请检查网络后重试。": "Model failed to load. Check your connection and try again.", "重试加载": "Retry", "模型资源待补充": "Model asset pending", "该门楼的专属模型尚未交付，当前展示档案信息。": "The dedicated 3D model has not been provided yet. Archive details are shown instead.", "安全提示：请留意脚下台阶及来往车辆；参观居民院落前请确认开放标识。": "Safety: Watch for steps and traffic. Check access signs before entering courtyards.",
    "大字模式": "Large Text", "关闭大字": "Normal Text", "中文": "中文", "菜单": "Menu", "安全提示：": "Safety: ",
    "推开一座门楼，走进一层时光": "Open a historic gate and step into another era", "层记西四，阅见古今": "Xisi: Stories Across Time", "层记西四 · 阅见古今": "Xisi: Stories Across Time", "西四北三条社区文商活化计划": "Xisi North 3rd Alley Community Revitalization Project", "西四北三条社区文商活化计划项目组": "Xisi North 3rd Alley Community Project Team", "让历史地层可阅读，让胡同烟火被听见": "Read the layers of history. Hear the life of the hutong.",
    "我们将胡同肌理、门楼礼制、当代烟火视为可阅读的“文化地层”，通过 3D 数字档案与胡同声痕，为您解构时光的褶皱。": "Read the hutong's urban fabric, gate traditions, and everyday life as cultural layers through 3D archives and neighborhood soundscapes.", "寻古轴": "Historic Gates", "阅巷轴": "Hutong Walk", "新颜带": "Living Heritage", "利用 3D 实景模型与数字化档案，深度解构西四六种典型门楼形制。读懂程砚秋故居、圣祚隆长寺背后封建礼制与匠心砖雕的历史地层。": "Explore six traditional gate forms through 3D models and digital archives, including the former home of Cheng Yanqiu and Longchang Temple.", "安静漫步西四北四条、五条。拿起手机轻碰 NFC 标签，戴上耳机聆听鸽哨、邻里日常与原住民口述史，在不扰民的前提下捕捉最原真的声痕。": "Walk Xisi North 4th and 5th Alleys and listen to pigeon whistles, neighborhood stories, and residents' memories while respecting local life.", "在漫步终点的大街区域，体验“门楼系列”文化盲盒、特调精酿与主理人手作。通过新业态利润反哺社区，共同守护老旧门楼的记忆。": "At the end of your walk, discover gate-themed culture, local craft drinks, and handmade goods that help support community heritage.",
    "回答几个问题，我们将为你量身定制最佳游览路线": "Answer a few questions and get a route tailored to you", "1. 你更感兴趣的是哪种体验？": "1. What kind of experience interests you most?", "2. 你计划游览多长时间？": "2. How long would you like to explore?", "3. 你和谁一起来？": "3. Who are you exploring with?", "4. 你对哪些内容特别感兴趣？（多选）": "4. What are you especially interested in? (Select all that apply)", "5. 是否希望避开居民生活区，减少打扰？": "5. Would you prefer to avoid disturbing residential areas?",
    "📖 门楼探秘": "📖 Historic Gates", "了解建筑形制与砖雕艺术": "Discover gate architecture and brick carving", "🏡 院落故事": "🏡 Courtyard Stories", "走进胡同，感受胡同生活": "Experience everyday life in the hutong", "🎨 新颜共生": "🎨 Living Heritage", "体验京剧、手作等新业态": "Try opera, crafts, and new local experiences", "🌟 综合体验": "🌟 A Little of Everything", "均衡感受文化、故事与创新": "Balance culture, stories, and creativity",
    "快速精华游": "A quick highlights walk", "标准深度游": "A classic in-depth walk", "全面沉浸游": "A full immersive visit", "深度探索游": "An extended exploration", "🚶 独自一人": "🚶 Solo", "自由探索，深度体验": "Explore at your own pace", "💑 情侣/伴侣": "💑 Partner", "浪漫漫步，拍照打卡": "A relaxed walk with photo stops", "👨‍👧👦 家庭亲子": "👨‍👧👦 Family", "寓教于乐，适合儿童": "A fun, family-friendly visit", "👥 朋友同行": "👥 Friends", "互动体验，分享乐趣": "Share interactive experiences",
    "🏛 古建筑": "🏛 Historic Architecture", "门楼形制、砖雕艺术": "Gate forms and brick carving", "📜 历史人文": "📜 History & Culture", "名人故居、院落故事": "Former homes and courtyard stories", "✋ 手作体验": "✋ Craft Workshops", "拓印、拼豆、脸谱绘制": "Rubbing prints, bead art, and opera masks", "🍵 美食茶饮": "🍵 Food & Tea", "胡同私房菜、特色茶铺": "Local dishes and tea houses", "📸 摄影打卡": "📸 Photography", "最美角度、出片圣地": "Scenic spots and photo locations", "🛍 文创购物": "🛍 Local Design", "门楼主题文创产品": "Gate-themed souvenirs", "🤫 是的，希望居民友好": "🤫 Yes, respect residents", "优先选择公共空间和开放区域": "Prioritize public and open spaces", "🏘 没关系，想体验真实生活": "🏘 No, I want local life", "愿意探访居民院落，感受原真性": "I am comfortable visiting open residential courtyards",
    "🎯 智能路线推荐": "🎯 Smart Route Planner", "选择你的游览方式": "Choose How to Explore", "自己随心逛，或让系统为你规划一条路线": "Explore freely or let us plan a route for you", "无需答题 · 立即开始": "No quiz · Start now", "回答 5 个问题 · 约 1 分钟": "5 questions · about 1 minute", "直接进入地图，查看西四北三条沿线的全部景点。点击点位可了解简介并进入 3D 门楼档案，行程由你自己安排。": "Open the map to explore places along Xisi North 3rd Alley. Select a place for its story and 3D archive.", "根据你的体验偏好、游览时长、同行人员和兴趣标签，生成一条量身定制的步行路线，并给出沿途用时与距离。": "Get a walking route based on your interests, available time, and group, with estimated time and distance.", "两种方式可随时切换，地图页内也提供切换入口。": "You can switch at any time. The map also has a route mode selector.",
    "📋 您的专属路线已生成": "📋 Your Route Is Ready", "基于您的偏好智能规划": "Planned around your preferences", "📊 路线评分": "📊 Route Scores", "文化深度": "Cultural depth", "商业体验": "Local businesses", "居民友好度": "Resident friendliness", "📍 详细行程": "📍 Itinerary", "🗺 查看地图导航": "🗺 Open Map", "🔄 重新规划": "🔄 Plan Again",
    "📍 漫步动线详情": "📍 Route Details", "⏱ 总计用时": "⏱ Total Time", "🚶 步行距离": "🚶 Walking Distance", "📊 文化深度": "📊 Culture Score", "数据加载中...": "Loading map data...", "寻古轴 (三条)": "Historic Route (3rd Alley)", "商业/生活轴": "Local Life & Shops", "门楼编号：": "Gate No.: ", "返回数字导览": "Back to Digital Guide", "🎧 听·胡同里的金柱门往事": "🎧 Listen · Stories of the Jinzhumen Gate", "模型资源待补充": "Model asset pending",
    "13号院 · 金柱大门": "No. 13 Courtyard · Jinzhumen Gate", "金柱大门 · 数字化档案": "Jinzhumen Gate · Digital Archive", "隆长寺山门 · 随墙门": "Longchang Temple Gate · Wall Gate", "11号院 · 广亮大门": "No. 11 Courtyard · Guangliang Gate", "程砚秋故居 · 如意门": "Cheng Yanqiu's Former Residence · Ruyi Gate", "44号院 · 金柱大门": "No. 44 Courtyard · Jinzhumen Gate", "45号院 · 居民院落": "No. 45 Courtyard · Residential Courtyard", "门楼数字档案": "Historic Gate Digital Archive", "该点位的文字档案正在整理，专属三维模型尚未交付。": "The archive is being prepared. Its dedicated 3D model is not available yet.",
    "圣祚隆长寺旧址的随墙门形制，院落与街巷之间的门墙关系体现了传统空间秩序。": "This wall gate marks the former site of Shengzuo Longchang Temple and reflects the traditional relationship between courtyard and lane.", "广亮大门是北京传统宅门中的高等级形制，门前空间宽绰，常见门簪、雀替与砖雕装饰。": "The Guangliang gate is a high-status Beijing residence entrance, often featuring a broad forecourt, gate ornaments, brackets, and brick carving.", "京剧大师程砚秋先生曾居住于此。此点位数字档案记录故居与胡同生活记忆。": "Peking Opera master Cheng Yanqiu once lived here. This archive preserves stories of the residence and hutong life.", "西四北街巷中的金柱大门点位，记录门扇位置、院落尺度与传统宅门形制。": "A Jinzhumen gate in Xisi North, documenting the gate position, courtyard scale, and traditional entrance form.", "居民院落展示点。请尊重居民生活，按开放标识参观，不进入未开放空间。": "A residential courtyard. Please respect residents, follow access signs, and do not enter closed areas.", "门楼文化与当代街区生活相遇的文商体验点。": "A cultural and commercial stop where historic gate heritage meets contemporary neighborhood life."
  };
  const ZH = Object.fromEntries(Object.entries(EN).map(([zh, en]) => [en, zh]));
  const state = {
    lang: localStorage.getItem('menlou-language') === 'en' ? 'en' : 'zh',
    elderly: localStorage.getItem('menlou-elderly-mode') === 'on'
  };
  window.MenlouI18n = { get language() { return state.lang; } };

  function translateText(root, dictionary) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement.closest('script,style,textarea,input,.site-controls')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!dictionary[trimmed]) return;
      const start = raw.match(/^\s*/)[0];
      const end = raw.match(/\s*$/)[0];
      node.nodeValue = `${start}${dictionary[trimmed]}${end}`;
    });
    if (root.nodeType === Node.ELEMENT_NODE) {
      const elements = [root, ...root.querySelectorAll('[alt],[aria-label],[title]')];
      elements.forEach((element) => ['alt', 'aria-label', 'title'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && dictionary[value]) element.setAttribute(attribute, dictionary[value]);
      }));
    }
  }

  function updateControls() {
    const langButton = document.getElementById('site-language-toggle');
    const elderlyButton = document.getElementById('site-elderly-toggle');
    if (langButton) {
      langButton.textContent = state.lang === 'zh' ? 'EN' : '中文';
      langButton.setAttribute('aria-label', state.lang === 'zh' ? 'Switch to English' : '切换到中文');
      langButton.title = langButton.getAttribute('aria-label');
    }
    if (elderlyButton) {
      const label = state.lang === 'zh' ? (state.elderly ? 'A−' : '大字') : (state.elderly ? 'A−' : 'A+');
      elderlyButton.textContent = label;
      elderlyButton.setAttribute('aria-label', state.lang === 'zh' ? (state.elderly ? '关闭大字模式' : '开启大字模式') : (state.elderly ? 'Turn off large text' : 'Turn on large text'));
      elderlyButton.title = elderlyButton.getAttribute('aria-label');
    }
  }

  function setLanguage(language) {
    if (language === state.lang) return;
    translateText(document.body, language === 'en' ? EN : ZH);
    state.lang = language;
    localStorage.setItem('menlou-language', language);
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    updateControls();
  }

  function mountControls() {
    const controls = document.createElement('div');
    controls.className = 'site-controls';
    controls.innerHTML = '<button class="site-control" id="site-language-toggle" type="button"></button><button class="site-control" id="site-elderly-toggle" type="button"></button>';
    document.body.appendChild(controls);
    document.getElementById('site-language-toggle').addEventListener('click', () => setLanguage(state.lang === 'zh' ? 'en' : 'zh'));
    document.getElementById('site-elderly-toggle').addEventListener('click', () => {
      state.elderly = !state.elderly;
      document.body.classList.toggle('elderly-mode', state.elderly);
      localStorage.setItem('menlou-elderly-mode', state.elderly ? 'on' : 'off');
      updateControls();
    });
    updateControls();
  }

  function initRecommendations() {
    const slides = Array.from(document.querySelectorAll('.recommend-slide'));
    if (!slides.length) return;
    let current = 0;
    const counter = document.getElementById('recommendCount');
    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
      if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
    };
    document.getElementById('recommendPrev')?.addEventListener('click', () => show(current - 1));
    document.getElementById('recommendNext')?.addEventListener('click', () => show(current + 1));
    setInterval(() => { if (!document.hidden) show(current + 1); }, 6000);
  }

  function mountSafetyNotice() {
    if (!/^(map|gate-3d)\.html$/.test(location.pathname.split('/').pop())) return;
    const notice = document.createElement('div');
    notice.className = 'safety-notice';
    notice.setAttribute('role', 'note');
    notice.textContent = '安全提示：请留意脚下台阶及来往车辆；参观居民院落前请确认开放标识。';
    document.body.appendChild(notice);
  }

  document.addEventListener('DOMContentLoaded', () => {
    mountControls();
    initRecommendations();
    mountSafetyNotice();
    document.body.classList.toggle('elderly-mode', state.elderly);
    if (state.lang === 'en') {
      translateText(document.body, EN);
      document.documentElement.lang = 'en';
      updateControls();
    }
    const observer = new MutationObserver((records) => {
      if (state.lang !== 'en') return;
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) translateText(node.parentElement, EN);
        else if (node.nodeType === Node.ELEMENT_NODE) translateText(node, EN);
      }));
      updateControls();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
