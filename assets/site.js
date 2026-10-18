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
  Object.assign(EN, {
    "门楼层记·故事里": "Gate Stories of Xisi", "层记西四 阅见古今": "Xisi: Layers of Time",
    "📍 西四北三条 · 西城区": "📍 Xisi North 3rd Alley · Xicheng District", "社区文商活化计划": "Community Culture & Commerce Renewal",
    "推开一座门楼，走进一层时光。在城市微更新中寻找胡同的记忆。": "Open a historic gate and step into another layer of time. Discover hutong memories through neighborhood renewal.",
    "智能地图导览": "Smart Map Guide", "回答简单问题，AI为你规划专属漫步路线。避开喧嚣，寻找胡同深处的文化彩蛋与隐秘风景。": "Answer a few questions and let AI plan a walk just for you. Find hidden stories and quiet corners of the hutong.",
    "开启游览 ›": "Start Exploring ›", "对话\"老街坊\"": "Talk to the Old Neighbor", "我们引入了专属AI智能体“老街坊”。关于西四北的名人轶事、门楼讲究，你可以随时向他提问，支持语音朗读！": "Meet our AI neighborhood guide, the Old Neighbor. Ask about local stories and historic gates, or listen to answers read aloud.",
    "去找他聊聊 ›": "Chat with the Guide ›", "3D 数字展厅": "3D Digital Gallery", "利用数字孪生技术，将胡同里的门楼1:1还原。滑动屏幕，即可360度观察广亮大门、金柱大门的绝美砖雕。": "Explore detailed 3D gate models. Drag to rotate and view traditional brickwork from every angle.",
    "进入展厅 ›": "Enter the Gallery ›", "胡同漫游护照": "Hutong Explorer Passport", "在线上或线下完成点位打卡，集齐专属电子印章，召唤你的西四北胡同漫游者专属证书。": "Check in online or in person, collect digital stamps, and earn your Xisi North Hutong Explorer certificate.",
    "查看进度 ›": "View Progress ›", "结合数字导览与沿途点位，发现门楼、故居和邻里记忆。": "Follow the digital guide to discover historic gates, former homes, and neighborhood memories.",
    "街区全天开放": "Neighborhood open all day", "建议漫游 45 分钟": "Suggested visit: 45 minutes", "历史文化街区": "Historic District",
    "序章 · 街巷档案": "Prologue · Alley Archive", "这不是一条扁平化的“古街”": "This is more than a picturesque old street", "“文化地层”": "layers of culture", "。推开每一座门楼，都是时光留下的褶皱。": ". Each historic gate opens onto another fold in time.",
    "胡同积淀": "Years of Hutong History", "院落记忆": "Courtyard Stories", "门楼形制": "Gate Forms", "时代地层": "Layers of Time",
    "肌": "Urban Fabric", "棋盘肌理 · 礼制街巷": "A Historic Street Grid", "头条至八条": "1st to 8th Alleys", "🧭 走向：东西向规整巷陌": "🧭 Layout: orderly east–west lanes", "📏 全长：约 530 米": "📏 Length: about 530 m",
    "四代叠压 · 古今同巷": "Four Eras, One Neighborhood", "活态文化": "Living Heritage", "元代": "Yuan Dynasty", "胡同尺度": "Hutong Layout", "明清": "Ming and Qing", "门楼礼制": "Gate Traditions", "民国": "Republican Era", "名人书香": "People and Ideas", "今日": "Today", "茶香鸽哨": "Tea and Pigeon Whistles",
    "推开门，逐层穿越": "Open the Gate, Travel Through Time", "向下滚动 · 点按发光圆点查看细节": "Scroll down and tap a glowing point to explore",
    "点按图中的光点": "Tap a glowing point", "查看这幅细节图里的故事": "Discover the story behind this detail",
    "第一层 · 元": "Layer 1 · Yuan Dynasty", "元大都": "Dadu, the Yuan Capital", "胡同骨架的初生": "The Hutong Grid Takes Shape",
    "西四北三条至五条保留了最完整的元代胡同规制。在这里，您脚下的巷陌尺度，与七百年前的元大都如出一辙。": "Xisi North 3rd to 5th Alleys preserve the Yuan-era street plan. The lanes beneath your feet follow a layout shaped seven centuries ago.",
    "元大都按棋盘式规划街巷，大街之间并排的东西向小巷被称作“胡同”。这套骨架后来被明清沿用，是整条胡同最深的一层地层。": "The Yuan capital was laid out on a grid. East–west lanes between its main streets came to be known as hutongs, and the plan continued through later dynasties.",
    "棋盘式街巷": "Grid of Lanes", "东西向胡同": "East–West Hutongs", "元代规制": "Yuan-Era Plan", "在地图上走一走胡同 ›": "Explore the Hutong Map ›",
    "第二层 · 明清": "Layer 2 · Ming and Qing", "门楼礼制与砖雕美学": "Gate Traditions and Brick Carving", "广亮大门、金柱大门、如意门……六种门楼形制散布其间。它们不仅是建筑，更是封建等级制度与民间匠心美学的数字化活态载体。": "Six traditional gate forms—including Guangliang, Jinzhumen, and Ruyi gates—reflect historic social customs and the craftsmanship of local builders.",
    "门楼是一座宅院的“名片”：形制的高低、门簪与门墩的设置、砖雕的繁简，都在无声地讲述主人的身份与家世，也就是“门当户对”的由来。": "A gate is a home's calling card. Its form, ornaments, and brickwork once spoke quietly of a family's standing—the roots of the idea of a well-matched household.",
    "广亮大门": "Guangliang Gate", "金柱大门": "Jinzhumen Gate", "如意门": "Ruyi Gate", "砖雕纹样": "Brick Carving", "走进 3D 展厅读门楼 ›": "Explore the Gates in 3D ›",
    "第三层 · 民国": "Layer 3 · Republican Era", "名人的时代印记": "The Imprint of Notable Residents", "程砚秋手植的石榴树，傅增湘藏书楼的余墨。这里的每一座门楼背后，都重叠着一个时代的文人气度与家国故事。": "A pomegranate tree planted by Cheng Yanqiu; traces of books collected by Fu Zengxiang. The gates here hold the stories and spirit of an era.",
    "新旧交替的年代里，戏曲名家与藏书大家先后在此安家，把曲韵与书香留在了寻常巷陌。": "As China changed, celebrated opera artists and collectors made their homes here, leaving a legacy of music and learning in everyday lanes.",
    "程砚秋故居": "Cheng Yanqiu's Former Residence", "傅增湘藏书楼": "Fu Zengxiang's Library", "戏曲与藏书": "Opera and Books", "探访名人故居 ›": "Visit Notable Homes ›",
    "第四层 · 当代": "Layer 4 · Today", "胡同声痕与新颜": "Hutong Voices and New Life", "鸽哨掠过、邻里问候、精酿茶歇。我们在数字化交互中保留这些市井烟火，并以新商业业态为老街区注入可持续的活力。": "Pigeon whistles, neighborly greetings, and a tea break. Digital experiences preserve the rhythms of daily life while new local businesses bring lasting vitality.",
    "今天，3D 数字档案、NFC 声痕与 AI 老街坊，让游客不必打扰居民，也能“读”到每一座门楼；沿街新业态的收益，则反哺老街区的修缮与社区福利。": "3D archives, NFC audio stories, and the AI Old Neighbor help visitors discover each gate without disturbing residents. Local businesses also support neighborhood preservation.",
    "3D 数字档案": "3D Digital Archives", "NFC 声痕": "NFC Audio Stories", "新业态共创": "Community-Led Renewal", "当代": "Contemporary", "文商共荣 · 街区驿站": "Culture and Commerce · Neighborhood Stop", "漫游礼遇": "Visitor Perks", "胡同茶歇 · 集章兑礼": "Hutong Tea Break · Collect Stamps", "探访门楼收集电子印章，解锁沿街茶饮、文创小店专属礼遇。": "Collect digital stamps as you visit historic gates and unlock treats at local tea shops and design stores.", "去领护照 ›": "Get Your Passport ›", "无扰导览": "Quiet Digital Guide", "NFC 声痕 · 静音听古": "NFC Audio · Listen Quietly", "手机轻触门牌或线上点播，听“老街坊”细讲宅院故事。": "Tap an NFC sign or listen online as the Old Neighbor shares courtyard stories.", "打开地图 ›": "Open the Map ›",
    "胡同漫游公约": "Hutong Visitor Pledge", "文商共荣 · 雅邻共忆": "Shared Heritage, Considerate Visits", "欢迎走进西四北三条。胡同是风景，更是居民的家。": "Welcome to Xisi North 3rd Alley. This hutong is both a place to explore and a home to its residents.", "愿我们把好奇留在巷中，做胡同里最温柔的过客。": "Explore with care and be a considerate guest in the hutong.", "轻声慢步": "Keep Voices Low", "不喧哗、不外放、不聚集": "No shouting, loud audio, or large gatherings", "私宅勿入": "Respect Private Homes", "未开放院落请勿擅入": "Do not enter courtyards that are not open", "温柔镜头": "Photograph Considerately", "门楼可赏，勿对窗拍摄": "Enjoy the gates; do not photograph through windows", "净美街巷": "Keep the Lanes Clean", "垃圾随行，护佑胡同烟火": "Take your litter with you", "已有": "Already", "位漫游者响应雅邻公约": "visitors have taken the pledge", "🤝 践行公约": "🤝 Take the Pledge",
    "街区漫游便民贴士": "Visitor Information", "免费开放": "Free Admission", "街区位置：": "Location: ", "北京市西城区西四北三条（东起西四北大街）": "Xisi North 3rd Alley, Xicheng District, Beijing (east entrance at Xisi North Street)", "地铁出行：": "By Subway: ", "地铁 4 号线「西四站」B口/D口出，步行约 260 米": "Line 4: Xisi Station, Exit B or D; about a 260 m walk", "推荐时段：": "Best Time to Visit: ", "09:00 - 19:30（午后斜阳映照门楼砖雕光影最佳）": "09:00–19:30 (afternoon light brings out the gate carvings)", "让历史地层可阅读 · 让胡同烟火被听见": "Read the layers of history · Hear the life of the hutong",
    "3D展厅 | 门楼层记": "3D Gallery | Gate Stories of Xisi", "看地图": "View Map", "正在准备门楼模型…": "Preparing the gate model…", "单指旋转 · 双指缩放": "Drag to rotate · Pinch to zoom", "门楼模型": "Gate Model", "听·胡同里的金柱门往事": "Listen · Stories of the Jinzhumen Gate", "返回地图": "Back to Map", "开启漫步路线": "Start Your Walk", "数字导览": "Digital Guide", "智能推荐": "Smart Picks", "选择已建模门楼": "Choose a 3D gate model", "模型加载中…": "Loading model…", "该点位的专属 3D 模型尚未提供，当前仅展示档案信息。": "A dedicated 3D model is not available for this location yet. Showing its archive instead."
  });
  Object.assign(EN, {
    "西四北三条位于北京老城西城区，是西四北头条至八条这组东西向平行胡同中的重要一脉，至今完整保留着元代棋盘式胡同肌理，传统四合院落沿巷道南北两侧依次排开。": "Xisi North 3rd Alley is one of eight parallel lanes in Beijing's old Xicheng district. It preserves the Yuan-era grid, with traditional courtyards lining both sides.",
    "在这里，胡同的尺度来自元代，门楼的礼制来自明清，名人的故事来自民国，而街角的茶香与鸽哨来自今天。四个时代层层叠压，共同留在了同一条巷子里。": "Here, the lane layout dates to the Yuan, gate traditions to the Ming and Qing, notable residents to the Republican era, and tea and pigeon whistles to everyday life today. Four eras meet in one alley.",
    "老街坊\n路线问我！": "Old Neighbor\nAsk me about routes!", "用 1 枚 NFC 贴纸代替多个点位：每次触碰会生成 1 条记录，并按路线顺序分配 1 枚印章。数据中会标注为“演示标签”。": "One NFC sticker can represent multiple locations. Each tap creates a record and assigns the next stamp in route order. These records are labeled as demo tags."
  });
  Object.assign(EN, {
    "马福祥宅 11 号院 · 广亮大门": "Ma Fuxiang Residence · Guangliang Gate", "三条 41—43 号 · 蛮子门": "Nos. 41–43, 3rd Alley · Manzi Gate", "三条 23 号 · 西洋门": "No. 23, 3rd Alley · Western-Style Gate", "三条 45 号 · 随墙门": "No. 45, 3rd Alley · Wall Gate",
    "金柱大门 · 三维模型": "Jinzhumen · 3D Model", "如意门 · 三维模型": "Ruyi Gate · 3D Model", "广亮大门 · 三维模型": "Guangliang Gate · 3D Model", "蛮子门 · 三维模型": "Manzi Gate · 3D Model", "西洋门 · 三维模型": "Western-Style Gate · 3D Model", "随墙门 · 三维模型": "Wall Gate · 3D Model",
    "模型加载失败，请检查网络或模型文件后重试。": "Model failed to load. Check your connection or model file and try again.", "门楼模型加载中…": "Loading gate model…"
  });
  Object.assign(EN, {
    "门楼层记·故事里 | 层记西四 阅见古今": "Gate Stories of Xisi | Xisi: Layers of Time", "层记西四 · 阅见古今": "Xisi: Layers of Time", "门楼层记 · 故事里": "Gate Stories of Xisi", "门楼层记": "Gate Stories of Xisi",
    "而是一部在元大都骨架上生长了七百年的": "A living record shaped over seven centuries on the foundations of Yuan-era Dadu", "。推开每一座门楼，都是时光留下的褶皱。": ". Every historic gate is a fold in time waiting to be read.", "年": "years", "座": "courtyards", "种": "gate forms", "时光的褶皱": "Folds in Time",
    "1271 · 元大都": "1271 · Yuan Dadu", "1368 - 1912 · 明清": "1368–1912 · Ming and Qing", "1912 - 1949 · 民国": "1912–1949 · Republican Era", "NOW · 当代": "NOW · Contemporary", "广亮大门、金柱大门、如意门... 六种门楼形制散布其间。它们不仅是建筑，更是封建等级制度与民间匠心美学的数字化活态载体。": "Six gate forms—including Guangliang, Jinzhumen, and Ruyi gates—reflect historic social customs and the craftsmanship of local builders.",
    "您的漫步指南": "Your Walking Guide", "穿行在西四北三条，通过 3D 数字化拆解，读懂那些散落在尘埃里的砖雕纹样与门当户对的美学逻辑。": "Explore Xisi North 3rd Alley and use 3D models to understand its brick carvings and historic gate traditions.", "生活轴": "Everyday Life Route", "走进四条、五条。拿起手机轻碰 NFC 标签，戴上耳机聆听原住民口述的胡同记忆，在不扰民的安静中感知生活。": "Walk 4th and 5th Alleys. Tap an NFC tag and listen to residents' memories while keeping the neighborhood peaceful.",
    "在漫步的终点——西四北大街，于精酿、茶饮与主理人手作中，带走一份独属于西四的“文化盲盒”。": "At the end of your walk, discover craft drinks, tea, and locally made goods—a cultural surprise unique to Xisi.", "我们设立了“门楼公益金”，将导览收入的回馈于老旧建筑的修缮维护与社区老年居民的福利。在这里的每一次驻足与消费，都是对古城记忆的一次共同守护。": "The Gate Heritage Fund supports building repairs and community programs for older residents. Every thoughtful visit helps preserve the memory of the old city.",
    "开启漫步路线 ›": "Start Your Walk ›", "运营看板（管理方）": "Operations Dashboard (Staff)", "© 2026 门楼层记·故事里 项目团队": "© 2026 Gate Stories of Xisi Project Team", "让胡同文化在数字世代焕发新生": "Bringing hutong culture to a new generation",
    "关于项目 | 门楼层记": "About | Gate Stories of Xisi", "‹ 首页": "‹ Home", "—— 西四北三条社区文商活化计划 ——": "— Xisi North 3rd Alley Community Culture & Commerce Renewal —", "这是一部在元大都骨架上生长了七百年的": "A living record shaped over seven centuries on the foundations of Yuan-era Dadu", "。每一座门楼，都是时光留下的褶皱，等待您去阅读。": ". Every historic gate is a fold in time waiting to be read.", "您的漫步指南": "Your Walking Guide", "开启漫步路线 ›": "Start Your Walk ›", "游览": "Explore", "护照": "Passport",
    "开启漫步 | 门楼层记·故事里": "Start Exploring | Gate Stories of Xisi", "项目介绍 ›": "About the Project ›", "无需答题": "No Quiz Needed", "地图上查看全部": "See All on the Map", "处景点，想去哪就去哪": "places to explore—choose where to go", "立即进入 ›": "Explore Now ›", "约 1 分钟": "About 1 minute", "回答 5 个问题，为你定制专属步行路线": "Answer 5 questions for a personalized walking route", "开始定制 ›": "Plan My Route ›", "继续上次路线": "Continue Your Last Route", "打卡盖章，集齐领取漫游证书": "Collect stamps and earn your explorer certificate", "翻开 ›": "Open ›", "快速出发": "Quick Start", "点一下，立即生成路线": "Tap once to create a route", "热门景点": "Popular Places", "点击在地图上查看": "Tap to view on the map", "游览小贴士": "Visitor Tips", "胡同内多为居民住宅，请轻声慢行，勿打扰居民生活。": "Most hutong homes are residential. Keep your voice low and avoid disturbing residents.", "全程步行，建议穿舒适的鞋，根据时间选择路线长度。": "The route is on foot. Wear comfortable shoes and choose a route that fits your schedule.", "在地图上点击点位，可查看简介并进入 3D 门楼档案。": "Tap a map marker to read about the place and open its 3D gate archive.",
    "数字导览 | 门楼层记·故事里": "Digital Guide | Gate Stories of Xisi", "全部景点": "All Places", "雅邻共忆温馨提示：": "A Gentle Reminder:", "胡同是居民的家，请轻声慢步，不外放不聚集；做胡同里最温柔的过客。": "The hutong is home to its residents. Walk quietly, avoid loud audio and crowds, and be a considerate guest.", "🚶 步行时间": "🚶 Walking Time", "🏛 观光时间": "🏛 Visit Time", "📏 步行距离": "📏 Walking Distance", "门楼/古迹寻古 (三至五条)": "Historic Gates and Sites (Alleys 3–5)", "文商/生活体验 (沿街与茶社)": "Local Life and Shops (Street and Tea Houses)", "我的当前位置": "My Location", "路线问我！": "Ask Me About Routes!",
    "定制我的路线 | 门楼层记·故事里": "Plan My Route | Gate Stories of Xisi", "温馨提示：雅邻共忆": "A Gentle Reminder", "胡同更是居民的家，请轻声慢步，不外放不聚集；": "The hutong is also home to its residents. Walk quietly and avoid loud audio or crowds;", "做胡同里最温柔的过客。": "please be a considerate guest.", "上一步": "Previous", "下一步": "Next", "我的专属路线 | 门楼层记·故事里": "My Route | Gate Stories of Xisi", "重新规划": "Plan Again", "在地图上查看": "View on Map",
    "电子护照 | 门楼层记·故事里": "Digital Passport | Gate Stories of Xisi", "电子护照": "Digital Passport", "门楼层记 · 西四北三条": "Gate Stories · Xisi North 3rd Alley", "已集印章": "Stamps Collected", "枚": "stamps", "初访游客": "First-Time Visitor", "怎么集章": "How to Collect Stamps", "浏览档案": "Browse an Archive", "在 3D 展厅打开点位档案并停留片刻": "Open a location archive in the 3D gallery and stay for a moment", "收听讲解": "Listen to a Story", "播放点位的讲解音频": "Play the audio guide for a location", "现场打卡": "Check In On Site", "扫描点位二维码，或用手机轻触 NFC 标签": "Scan a location QR code or tap its NFC tag", "集齐全部印章": "Collect Every Stamp", "即可生成专属漫游证书": "Then create your explorer certificate", "漫游证书": "Explorer Certificate", "集齐全部印章后，可生成带有你昵称的漫游证书。": "Collect all stamps to create a certificate with your nickname.", "生成漫游证书": "Create Certificate", "预览证书样式": "Preview Certificate", "演示模式": "Demo Mode", "开启后，点击印章位可“模拟扫码打卡”，会在运营看板中记为": "When enabled, tap a stamp to simulate a check-in. It will appear on the dashboard as", "测试数据": "Demo Data", "NFC 演示标签": "NFC Demo Tag", "标签链接：": "Tag Link: ", "复制": "Copy", "下一次触碰将分配到：": "The next tap will be assigned to:", "清除本机护照记录": "Clear Passport Data on This Device", "继续漫游": "Continue Exploring", "收进护照": "Save to Passport", "长按图片即可保存到相册": "Press and hold the image to save it to your photos", "完成": "Done"
  });
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const appliedText = new WeakMap();
  const state = {
    lang: localStorage.getItem('menlou-language') === 'en' ? 'en' : 'zh',
    elderly: localStorage.getItem('menlou-elderly-mode') === 'on'
  };
  window.MenlouI18n = { get language() { return state.lang; } };

  function translateText(root, dictionary, language = 'en') {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement.closest('script,style,textarea,input,.site-controls')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      const start = source.match(/^\s*/)[0];
      const end = source.match(/\s*$/)[0];
      let translated = language === 'zh' ? source : dictionary[trimmed];
      if (language === 'en' && translated === undefined && trimmed.startsWith('门楼模型加载中 ')) {
        translated = trimmed.replace('门楼模型加载中 ', 'Loading gate model ');
      }
      if (translated !== undefined) node.nodeValue = language === 'zh' ? translated : `${start}${translated}${end}`;
      appliedText.set(node, node.nodeValue);
    });
    if (root.nodeType === Node.ELEMENT_NODE) {
      const elements = [root, ...root.querySelectorAll('[alt],[aria-label],[title],[placeholder]')];
      elements.forEach((element) => ['alt', 'aria-label', 'title', 'placeholder'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value === null) return;
        let originals = originalAttributes.get(element);
        if (!originals) { originals = new Map(); originalAttributes.set(element, originals); }
        if (!originals.has(attribute)) originals.set(attribute, value);
        const source = originals.get(attribute);
        const translated = language === 'zh' ? source : dictionary[source];
        if (translated !== undefined) element.setAttribute(attribute, translated);
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
    translateText(document.documentElement, EN, language);
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
      translateText(document.documentElement, EN, 'en');
      document.documentElement.lang = 'en';
      updateControls();
    }
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.target.nodeType === Node.ELEMENT_NODE && record.target.closest('.site-controls')) return;
        if (record.target.parentElement?.closest('.site-controls')) return;
        if (record.type === 'characterData') {
          if (state.lang === 'en' && record.target.nodeValue !== appliedText.get(record.target)) {
            originalText.set(record.target, record.target.nodeValue);
            translateText(record.target.parentElement, EN, 'en');
          } else if (state.lang === 'zh') originalText.set(record.target, record.target.nodeValue);
          return;
        }
        if (state.lang !== 'en') return;
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateText(node.parentElement, EN, 'en');
          else if (node.nodeType === Node.ELEMENT_NODE) translateText(node, EN, 'en');
        });
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  });
})();
