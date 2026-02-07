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
    specialService: {
        title: "赠送：【带爸妈来北欧的安心支持】",
        description: "行程前30分钟语音/咨询。解答SIM卡怎么办、该带什么衣服、注意事项等行前焦虑，让父母安心出发。"
    },
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
    title: "斯德哥尔摩老城故事 City Walk",
    subtitle: "历史 × 城市 × 地铁艺术（年轻人友好 / 可拼团）",
    tags: ["年轻人首选", "听故事", "City Walk", "高性价比"],
    idealFor: "第一次来斯德哥尔摩的年轻游客。喜欢听故事、拍照、城市漫步。不想太赶、不想太贵，想用半天时间真正“认识”这座城市。",
    description: "这是一次以故事为主线的城市漫步，不是走马观花式打卡，也不是严肃的历史课堂。约 2–2.5 小时，节奏轻松，边走边拍，适合拍照与社交。",
    coverImage: "https://picsum.photos/id/1033/800/600", // Subway/Urban vibe
    priceEstimate: "拼团约 300-500 SEK/人 (小团)",
    itinerary: [
      {
        time: "第一站",
        location: "老城入口 · 城市从这里开始",
        description: "从老城外围进入，了解为什么斯德哥尔摩建在“岛上”，老城在中世纪的角色，以及瑞典人和“权力 / 商业 / 海”的关系。",
        highlight: "老城入口街景，城市色彩最集中的街区外观。",
        iconType: 'walk'
      },
      {
        time: "第二站",
        location: "老城核心 · 独家冷知识",
        description: "深入核心区，外观皇宫。不讲枯燥年份，只讲八卦：你知道为什么诺贝尔奖唯独没有“数学奖”吗？（那是一段情史...）",
        highlight: "解锁隐藏技能：教你如何通过墙上的“铁锚钉”一眼辨别房屋的建造年代。",
        iconType: 'landmark'
      },
      {
        time: "第三站",
        location: "老城小巷 · 电影感街区",
        description: "离开主路，进入游客较少的小巷。看看中世纪街道结构和老城居民的真实生活，感受这里为什么“看起来很适合拍电影”。",
        highlight: "狭窄街道纵深构图，捕捉光影最好的小巷角度。",
        iconType: 'photo'
      },
      {
        time: "第四站",
        location: "世界最美地铁站 · 地下艺术空间",
        description: "搭乘地铁前往 1–2 个代表性地铁站（如岩石洞穴风、彩色艺术站）。这是包车游给不了的独特体验，也是从历史穿越到现代的旅程。",
        highlight: "岩壁站台、艺术墙面、对称构图的站台视角。",
        iconType: 'photo'
      },
      {
        time: "结束",
        location: "自由活动 & 推荐",
        description: "行程结束后，根据你们的喜好推荐附近的 Fika 咖啡馆或晚餐区域。如有父母同行或希望更轻松体验，建议选择包车一日游。",
        iconType: 'food'
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

export const FAQS = [
    {
        question: "Q1：刚到瑞典，SIM 卡会不会很难用？",
        answer: "如果是第一次来北欧，确实容易有点懵，尤其是在机场人多、语言不熟的情况下。一般来说，只要提前准备好合适的 SIM 或 eSIM，就不会有太大问题。",
        cta: "👉 如果你选择我们的接机 / 城市行程，我们可以在第一天帮你确认网络是否正常使用。"
    },
    {
        question: "Q2：瑞典公交怎么买票？会不会很复杂？",
        answer: "瑞典的公共交通对本地人很友好，但对第一次来的游客来说，界面和规则不太直观，尤其是换乘和票种。",
        cta: "👉 如果你参加 city walk 或包车行程，我们会直接带你完成一次真实乘坐，你就会马上明白。"
    },
    {
        question: "Q5：带爸妈来瑞典，会不会走得太累？",
        answer: "如果照着网上攻略走，确实很容易累。我们的行程设计原则是：少走路、多休息、可以随时调整。",
        cta: "👉 如果是父母同行，更建议选择包车或节奏更慢的行程。"
    },
    {
        question: "Q6：如果中途想调整行程，可以吗？",
        answer: "当然可以。我们更关注当天的状态和体验，而不是“一定要走完所有点”。",
        cta: ""
    }
];