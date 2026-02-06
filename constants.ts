import { TourPackage, TourType } from './types';

// Images sourced from picsum (placeholders)
export const HERO_IMAGE = "https://picsum.photos/id/1036/1600/900"; // Wider image for desktop
export const AVATAR_IMAGE = "https://picsum.photos/id/64/200/200";

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: TourType.FAMILY,
    title: "亲子家庭 · 瑞典自然包车慢游",
    subtitle: "带娃/带父母 · 舒适车型 · 慢节奏",
    tags: ["带父母首选", "体力友好", "行程灵活"],
    idealFor: "第一次来瑞典的家庭 / 爸妈同行。担心老人走不动，或者孩子太小需要午休。",
    description: "这不是一个需要早起的旅行团。我们将行程节奏放慢好好体会北欧人的慵懒感，主打车览风景+平地散步，随时可以停车休息。围绕家庭状态，而不是“走完所有景点”。",
    coverImage: "https://picsum.photos/id/292/800/600",
    lunchOptions: [
      { name: "中餐 - 美食博主严选", type: "适合家庭分享", priceLevel: "¥¥" },
      { name: "瑞典肉丸 - 老字号", type: "孩子最爱", priceLevel: "¥¥¥" },
    ],
    itinerary: [
      {
        time: "上午",
        location: "老城 & 皇宫周边（慢节奏）",
        description: "开车直达斯德哥尔摩最具历史感的老城区，近距离观看皇宫。",
        highlight: "避开人流，选择更安静的平坦路线行走。走路可控，可随时休息。",
        iconType: 'walk'
      },
      {
        time: "中午",
        location: "根据家庭口味灵活安排",
        description: "可选择中餐慰藉中国胃，或尝试地道西餐。",
        highlight: "用餐时间不固定，视当天老人小孩的状态调整。",
        iconType: 'food'
      },
      {
        time: "下午",
        location: "城市景观 + 自然结合",
        description: "前往皇室居住的郊区宫殿花园或城市制高点观景。",
        highlight: "视体力情况决定是否进入室内参观。主打不强制、不赶行程。",
        iconType: 'car'
      },
      {
        time: "傍晚",
        location: "湖畔与城市慢游",
        description: "车游市中心与传统富人区，在安静的小岛或湖边结束一天行程。",
        highlight: "每天不早起，避免长时间连续步行。",
        iconType: 'photo'
      }
    ]
  },
  {
    id: TourType.CLASSIC,
    title: "第一次来北欧｜斯德哥尔摩经典精华",
    subtitle: "不踩雷 · 全中文 · 必打卡",
    tags: ["第一次来瑞典", "经典地标", "高效省心"],
    idealFor: "第一次来欧洲/北欧的游客，英语一般，希望一天看完所有精华，但不想像大团一样赶鸭子。",
    description: "专为初次造访设计。拒绝走马观花，我们精选了“出片率最高”且“最代表瑞典”的路线。全程专车接送，解决找路、买票、语言烦恼。",
    coverImage: "https://picsum.photos/id/1040/800/600", 
    itinerary: [
      {
        time: "上午",
        location: "中世纪老城 (Gamla Stan)",
        description: "瑞典的发源地。听听诺贝尔博物馆的故事，看看斯德哥尔摩大教堂。",
        highlight: "带您走那条只有当地人知道的“最窄街道”，避开旅行团大军。",
        iconType: 'walk'
      },
      {
        time: "中午",
        location: "老城特色午餐",
        description: "推荐尝试地道的北欧海鲜汤或驯鹿肉，体验当地饮食文化。",
        iconType: 'food'
      },
      {
        time: "下午",
        location: "市政厅 & 城市全景",
        description: "参观诺贝尔晚宴举办地“蓝厅”与“金厅”。随后前往全城最佳观景台。",
        highlight: "帮您在梅拉伦湖畔找到拍摄三皇冠塔楼的最佳机位。",
        iconType: 'landmark'
      },
      {
        time: "傍晚",
        location: "瓦萨沉船博物馆 / 游艇码头",
        description: "根据兴趣二选一。感受维京时期的震撼，或在夕阳下的Strandvägen大道漫步。",
        iconType: 'photo'
      }
    ]
  },
  {
    id: TourType.PHOTO,
    title: "小众秘境｜人像摄影 & 氛围感之旅",
    subtitle: "避开游客 · 电影感 · 深度体验",
    tags: ["摄影/情侣", "小众路线", "网红出片"],
    idealFor: "情侣、年轻女孩、摄影爱好者。不想拍游客照，想要朋友圈高赞大片。",
    description: "我不带你去全是游客的皇宫门口。我带你去斯德哥尔摩的地铁艺术长廊、孤独的灯塔、当地设计师的买手店。我们要的是“氛围感”。",
    coverImage: "https://picsum.photos/id/338/800/600",
    itinerary: [
      {
        time: "上午",
        location: "斯德哥尔摩地铁艺术巡礼",
        description: "世界最长的地下画廊。我们不赶时间，精选3个最出片的蓝色/彩虹车站。",
        highlight: "指导最佳构图机位，拍出空无一人的大片感。",
        iconType: 'photo'
      },
      {
        time: "中午",
        location: "Södermalm 复古区",
        description: "瑞典的布鲁克林。午餐在当地网红咖啡馆解决。",
        highlight: "充满古着店、彩色木屋，每一面墙都好拍。",
        iconType: 'food'
      },
      {
        time: "下午",
        location: "小众观景台 & 孤独灯塔",
        description: "去游客找不到的Monteliusvägen，俯瞰整个老城。",
        highlight: "等待北欧特有的柔和光线，拍摄情绪人像。",
        iconType: 'walk'
      },
      {
        time: "傍晚",
        location: "城市日落 / 图书馆",
        description: "在极简风的北欧建筑中，或在余晖洒满的海边，结束浪漫的一天。",
        iconType: 'photo'
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    user: "小红薯_9281",
    text: "本来担心带爸妈来瑞典玩不动，幸好找了包车。司机师傅完全不催，看我爸走累了马上就调整路线去喝咖啡，特别人性化！",
    tag: "家庭出游"
  },
  {
    user: "Momo去北欧",
    text: "不想报大团，这个行程真的太懂我了。没有那些无聊的景点，去的全是好拍照的地方，司机大哥拍照技术甚至比我男朋友好！",
    tag: "蜜月旅行"
  },
  {
    user: "User7782",
    text: "带着两岁宝宝，这种保姆车服务太必要了。中午孩子睡着了可以在车上休息，不用在外面受冻，真的很安心。",
    tag: "亲子游"
  }
];