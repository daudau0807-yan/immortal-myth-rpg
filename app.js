const stories = [
  {
    type: "主線",
    name: "不朽神話裁縫之翼殞落之地",
    label: "主線：不朽神話裁縫之翼殞落之地",
    theme: "myth",
    visual: "assets/main-visual.png",
    text: []
  },
  {
    type: "支線",
    name: "被天空遺棄的孩子們",
    label: "支線：被天空遺棄的孩子們",
    theme: "sky",
    visual: "assets/sky-visual.png",
    text: []
  },
  {
    type: "魔王支線",
    name: "墜落之翼葬身之地",
    label: "魔王支線:墜落之翼葬身之地",
    theme: "fall",
    visual: "assets/fall-visual.png",
    text: []
  },
  {
    type: "戀愛支線",
    name: "妳與昨天已過百年",
    label: "戀愛支線:妳與昨天已過百年",
    theme: "love",
    visual: "assets/love-visual.png",
    text: []
  }
];

const characters = [
  {
    id: "neil-dolomo",
    group: "長生屬",
    name: "尼爾・多隆摩",
    visual: "assets/characters/neil-dolomo.png",
    motion: "memory",
    text: [],
    details: [
      { label: "角色職業", value: "畫家" },
      { label: "詛咒", value: "阿茲海默" },
      { label: "角色語錄", value: "「世人只知爾人 摘星逐日 君王氣貌。他卻夜半輾轉反側；畫盡罄竹。癡尋不至彼人笑顏 」" }
    ],
    entries: {
      person: {
        title: "角色任務",
        sections: [
          {
            title: "今天是昨天的明天",
            exclusive: true,
            text: ["了解多隆摩為什麼要畫畫"]
          },
          {
            title: "當惡魔誕生之時",
            text: ["魔王支線 多隆摩視角"]
          }
        ]
      },
      story: [
        "能將眼前一切都記載進畫冊見證歷史洪流 喜歡臨摹世界上發生的一切 但似乎忘記為什麼要畫畫 是為了什麼嗎？ 是因為我的詛咒讓我只能記得今天 所以我才想把每個今天帶到明天 又或是？"
      ]
    }
  },
  {
    id: "zhiyinling-taimei",
    group: "長生屬",
    name: "芷茵靈・泰枚",
    visual: "assets/characters/zhiyinling-taimei.png",
    motion: "fog",
    text: [],
    details: [
      { label: "角色職業", value: "醫生" },
      { label: "詛咒", value: "抑鬱症" },
      { label: "角色語錄", value: "『蒙上一層霧 我無法…我真的無法，我的燈塔身在何處』" }
    ],
    entries: {
      person: {
        title: "角色任務",
        sections: [
          {
            title: "未知花語",
            exclusive: true,
            text: ["了解泰枚藏在心裡面的事情"]
          },
          {
            title: "無法醫治之病",
            text: ["魔王支線 泰枚視角"]
          }
        ]
      },
      story: [
        "蒐集所有的草藥 每株草藥都如數家珍 <傷疾論敘> <北草藥縮> 等書作者 被稱為『長生醫藥之神』 任何疾病都能醫治沒有例外 但看似無所不能卻像隱瞞著什麼沒說出口"
      ]
    }
  },
  {
    id: "yi-si-wuyishi",
    group: "長生屬",
    name: "伊壹寺・梧漪士",
    visual: "assets/characters/yi-si-wuyishi.png",
    motion: "shadow",
    text: [],
    details: [
      { label: "角色職業", value: "哲學家" },
      { label: "詛咒", value: "高功能亞斯伯格" },
      { label: "角色語錄", value: "『正午之時 追尋影子 當局者清 旁觀者迷』" }
    ],
    entries: {
      person: {
        title: "角色任務",
        sections: [
          {
            title: "午後烈日與濃茶",
            exclusive: true,
            text: ["了解梧漪士所追求的事物"]
          },
          {
            title: "當惡魔歸來之時",
            text: ["魔王支線 梧漪士視角"]
          }
        ]
      },
      story: [
        "總是若有所思喃喃自語雖然一副生人勿近 但是卻在愛在不合時宜之時坎坎而談，23歲是個學生，在琊狩仙狽專院研讀哲學系，具冠上『被天空神吻過腦子的天才』 但也因為形式風格過於我行我素缺乏了解他的人"
      ]
    }
  },
  {
    id: "laozishu-daoshan",
    group: "長生屬",
    name: "牢資屬・盜山",
    visual: "assets/characters/laozishu-daoshan.png",
    motion: "still-air",
    text: [],
    details: [
      { label: "角色職業", value: "盜賊" },
      { label: "詛咒", value: "被害妄想" },
      { label: "角色語錄", value: "「此生長居天際，但僅被困無風之地」" }
    ],
    entries: {
      person: {
        title: "角色任務",
        sections: [
          {
            title: "等價交患？",
            exclusive: true,
            text: ["了解盜山討厭長生屬的原因"]
          },
          {
            title: "最難盜取之物 其名為？",
            text: ["魔王支線 盜山視角"]
          }
        ]
      },
      story: [
        "渴望蒐集到世上所有珍寶以此為目標努力的盜賊 雖說如此非常講義氣 只要能拿出對等的籌碼 他也會聽從於你  但似乎防備心非常重尤其特別討厭長生屬的一切"
      ]
    }
  },
  {
    id: "agongliu-qi",
    group: "長生屬",
    name: "阿宮溜・柒",
    visual: "assets/characters/agongliu-qi.png",
    motion: "eclipse",
    text: [],
    details: [
      { label: "角色職業", value: "？" },
      { label: "詛咒", value: "自閉症" },
      { label: "角色語錄", value: "「明天的太陽永不升起 昨夜的月亮我看不見」" }
    ],
    entries: {
      person: {
        title: "角色任務",
        sections: [
          {
            title: "我的刀鈍",
            exclusive: true,
            text: ["找到柒最在乎的事物"]
          },
          {
            title: "辛辣甜蝦",
            text: ["魔王支線 柒視角"]
          }
        ]
      },
      story: [
        "天空神最信任的家族阿宮溜一家沐浴在最純潔的加護之下 常常緘默不語 好似一副沒有任何事能激起他的興致"
      ]
    }
  },
  {
    id: "xiangfu",
    group: "短生屬",
    name: "降伏",
    visual: "assets/characters/xiangfu.png",
    motion: "ink-rise",
    text: []
  },
  {
    id: "weihe",
    group: "短生屬",
    name: "魏何",
    visual: "assets/characters/weihe.png",
    motion: "ink-drift",
    text: []
  },
  {
    id: "wangqiange",
    group: "短生屬",
    name: "王墘閣",
    visual: "assets/characters/wangqiange.png",
    motion: "screen-open",
    text: []
  },
  {
    id: "xuziyu",
    group: "短生屬",
    name: "徐梓郁",
    visual: "assets/characters/xuziyu.png",
    motion: "silk-fall",
    text: []
  },
  {
    id: "anning",
    group: "短生屬",
    name: "安寧",
    visual: "assets/characters/anning.png",
    motion: "water-still",
    text: []
  }
];
const achievements = [
  {
    id: "all-brothers",
    name: "四海內皆兄弟",
    parts: [
      "完成",
      { label: "所有角色的專屬任務", type: "character-view" }
    ]
  },
  {
    id: "devil-contract",
    name: "與惡魔的契約",
    parts: [
      "同時完成 ",
      { label: "任務-當惡魔歸來之時", type: "character-task", characterId: "yi-si-wuyishi", taskTitle: "當惡魔歸來之時" },
      " 、",
      { label: "任務-當惡魔誕生之時", type: "character-task", characterId: "neil-dolomo", taskTitle: "當惡魔誕生之時" }
    ]
  },
  {
    id: "silent-accusation",
    name: "緘默者的控訴",
    parts: [
      "完成 ",
      { label: "任務-無法醫治之病", type: "character-task", characterId: "zhiyinling-taimei", taskTitle: "無法醫治之病" }
    ]
  },
  {
    id: "wings-cannot-reach-stars",
    name: "羽翼無法觸及星辰",
    parts: [
      "完成 ",
      { label: "任務-最難盜取之物 其名為？", type: "character-task", characterId: "laozishu-daoshan", taskTitle: "最難盜取之物 其名為？" }
    ]
  },
  {
    id: "above-all-below-god",
    name: "萬人之上 一神之下",
    parts: [
      "完成 ",
      { label: "任務-辛辣甜蝦", type: "character-task", characterId: "agongliu-qi", taskTitle: "辛辣甜蝦" }
    ]
  },
  {
    id: "living-with-sky",
    name: "與天共生",
    parts: [
      "獲得 ",
      { label: "與惡魔的契約", type: "achievement", achievementId: "devil-contract" },
      "、",
      { label: "緘默者的控訴", type: "achievement", achievementId: "silent-accusation" },
      "、",
      { label: "羽翼無法觸及星辰", type: "achievement", achievementId: "wings-cannot-reach-stars" },
      "、",
      { label: "萬人之上 一神之下", type: "achievement", achievementId: "above-all-below-god" },
      " 四項成就"
    ]
  },
  {
    id: "inside-myth",
    name: "神話之內",
    parts: ["完成", { label: "主線解謎", type: "puzzle", theme: "myth" }]
  },
  {
    id: "longing-for-sky",
    name: "只不過嚮往天空",
    parts: ["完成", { label: "支線解謎", type: "puzzle", theme: "sky" }]
  },
  {
    id: "outside-myth",
    name: "神話之外",
    parts: ["完成", { label: "魔王支線解謎", type: "puzzle", theme: "fall" }]
  },
  {
    id: "eternal-farewell-night",
    name: "就讓告別那晚成為永夜",
    parts: ["完成", { label: "戀愛支線所有解謎", type: "puzzle", theme: "love" }]
  }
];
const storyChapters = {
  myth: [
    {
      id: "prologue",
      name: "序章",
      title: "不朽神話 裁縫之翼殞落之地 序章",
      unlocked: true,
      text: [
        "傳說世上存在兩種族 一種在天空的庇護下長大卻被歲月詛咒著 與生俱來的羽翼代表著天空對他們的祝福讓他們能夠在天空翱翔 但他們同時也被歲月詛咒著每人身上都有無法擺脫的桎梏 被天空孕育的孩子永世無法擺脫天空",
        "另一種族呢 沐浴大地的加護 雖被眷養著卻仍然嚮往著天空 每個人都有屬於自己的技術來縫紉羽翼 嚮往天空的懷抱 生命力不如長生屬一般 所以被稱為短生屬",
        "但…大地與天空本來就是對立面 天空有著屬於自己的詛咒來拘束自己的子民  大地也不曾會挽留那些妄圖拋棄他的子民",
        "那在這世上 存在被天空拋棄的人 他們沒有自己的羽翼 但也被大地視為背叛而被摒棄的叛徒 他們被成為天逐屬",
        "不過話又說回來了 是什麼讓他們嚮往著天空呢……。"
      ]
    },
    {
      id: "chapter-1",
      name: "第一章",
      title: "不朽神話 裁縫之翼殞落之地 第一章",
      unlocked: true,
      format: "dialogue",
      text: [
        "「好想像他們一樣，在天空飛翔……」",
        "魏何靠在窗邊，望著幾名長生屬從雲間飛過。",
        "「我們短生屬的雙腳，生來就是為了勞動。他們長生屬的雙腳不必沾染泥土，還有翅膀可以代步……短生屬根本就是賤民。」",
        "「你還是一如既往地嚮往天空啊，魏何。」",
        "魏何回過頭，只見一名老人扶著門框，顫巍巍地站在房門前。",
        "「爸爸……您起床了？」",
        "「嗯。我大概也快回歸大地神的懷抱了……咳！咳咳！」",
        "「父親大人！」",
        "魏何急忙上前攙扶。很難想像，眼前這名連獨自行走都十分困難的老人，年輕時曾是大地神最信賴的大祭司，救過無數身陷災難的短生屬。",
        "但無論身分多麼尊貴，依然敵不過短生屬的壽命。",
        "「和長生屬相比，我們的生命根本微不足道。」魏何低聲說，「我們的生死，在他們眼中形同草芥。」",
        "「但長生屬也很可憐。他們是被天空神囚禁的罪人，終生受到詛咒束縛……而且，那位大人曾經救過我們魏家。你別總是和長生屬針鋒相對。」",
        "「那位大人確實讓魏家免於滅族，但如果大地神也賜予我們翅膀，當年的災難就不會如此嚴重。」",
        "「不得無禮！」",
        "老人突然厲聲斥責。",
        "魏何沉默片刻，將父親扶到窗邊坐下，隨後單膝跪地。",
        "「父親大人，我很抱歉。」",
        "老人望向窗外，神情逐漸緩和。",
        "「起來吧。你既然想知道那位大人做過什麼，我便把當年的事情告訴你。」",
        "地曆二十四年，天空神連續降下數月大雨。",
        "田地被淹、莊稼腐爛，洪水沖毀了短生屬的家園。倖存者不但無處可去，還得面對隨之而來的飢荒。",
        "神話將雨水稱作「天空神的眼淚」。只有天空神悲傷或震怒時，眼淚才會落向大地。",
        "當時的魏家先祖身為大地神的大祭司，卻對災情束手無策。他只能跪在祭壇前，不吃不喝地祈禱。",
        "「請大地神將我們的聲音傳達給天空神。若這場落水不停，短生屬恐怕將迎來滅族之災。」",
        "大祭司不知祈禱了多久，最終因過度虛弱而失去意識。",
        "在夢中，他來到一片純白空間。",
        "一名男子正站在他的面前。男子舉止文雅，背後的羽翼潔白柔順，沒有沾染半點塵埃。",
        "「在下來自阿宮溜家族，是天空神指派管理長生屬的使者，也是家族中負責此職的第七代。你稱呼我為『柒』便好。」",
        "「柒大人，您好。鄙人是短生屬的大祭司，已在祭壇前乞求天空神平息怒火多日。再次睜眼後，便來到了這裡。」",
        "「怒火？」",
        "柒微微皺眉。",
        "「天空能包容萬物，無邊無際，怎麼可能輕易生氣？就算真的生氣，也不會與短生屬這種微不足道的事情有關。」",
        "大祭司強忍著心中的不滿，低頭說道：",
        "「對天空神而言，我們或許微不足道。但這場落水已經奪走無數人的家園，再不停下，短生屬必將遭受滅頂之災。」",
        "柒注視著他。片刻後，才轉過身去。",
        "「我知道了。我會親自請示天空神。」",
        "「多謝柒大人！」",
        "「我只答應替你傳達，不能保證祂會回應。」",
        "柒展開雙翼，純白空間也隨之劇烈晃動。",
        "「你先回去吧。」",
        "一股力量將大祭司拉出夢境。",
        "當他再次睜開眼睛時，發現自己正躺在祭壇中央。幾名婢女焦急地圍在身旁，見他醒來，才終於鬆了一口氣。",
        "大祭司撐起身體，環顧四周。",
        "雨聲消失了。",
        "他不敢置信地走出祭壇。厚重的烏雲正在緩緩散去，久違的陽光穿過縫隙，照在滿目瘡痍的大地上。",
        "連續數月的落水，真的停了。",
        "大祭司抬頭望著天空，腦中再次浮現那雙潔白羽翼。",
        "直到此刻他才明白，那名自稱「柒」的長生屬使者，並不是一場夢。"
      ]
    },
    {
      id: "chapter-2",
      name: "第二章",
      title: "不朽神話 裁縫之翼殞落之地 第二章",
      requires: ["myth-who-answer"],
      format: "dialogue",
      text: [
        "「…………」",
        "天空神的聲音沒有言語，也沒有形體。",
        "祂彷彿就是這片空間本身——安靜、寬廣而柔和，如同母親張開雙臂，將世間萬物都擁入懷中。",
        "柒站在無邊無際的純白之中，若有所思地撫過衣袖。",
        "「啊……您說的是那場持續數月的落水嗎？」",
        "「…………」",
        "四周依然寂靜，柒卻像是聽懂了什麼。他微微垂下眼眸，回想起祭壇中那名短生屬大祭司焦急的神情。",
        "「他們認為那是您生氣才降下那般落水。」",
        "「…………」",
        "一股難以形容的悲傷自空間深處傳來。雲霧在柒腳邊緩緩流動，如同尚未乾涸的淚水。",
        "柒抬起頭。",
        "「您……是在哭嗎，天空神大人？」",
        "天空何其寬廣，足以包容世間萬物。",
        "天空神曾降下加護，讓自己的子民擁有近似於祂的漫長壽命；又為他們編織詛咒，使他們即使活過漫長歲月，也能理解生命並不完美。",
        "受天空神眷顧而誕生的長生屬，如同神話裡的天使。他們的羽翼潔白，不染塵埃。",
        "而長生屬存在的意義，便是在近乎無限的歲月中，尋找自己為何而生。",
        "「紀錄所有時光。」",
        "「收穫所有生命。」",
        "「捕獲所有珍寶。」",
        "「感受所有事物。」",
        "「審判所有離別。」",
        "這些都是生命短暫的種族難以完成，唯有長生屬才能背負的使命。",
        "但天空神的意念忽然落在柒身上。",
        "唯獨你，柒。",
        "阿宮溜一家已經背負六世罪名，也審判過六世離別。如今身為第七代的你，身上同時承載著前六世未能消散的痛苦。",
        "或許，一切會在第七世終結。",
        "柒短暫地沉默了。",
        "隨後，他將手掌放在胸前，向面前空無一物的天空深深行禮。",
        "「阿宮溜一家衷心所屬於天空神。」",
        "「即使先祖在時間之下，被詛咒逐漸磨損殆盡，我等也不會背棄使命。第七代之後，還會有第八代、第九代……直到天空不再需要阿宮溜一家守護為止。」",
        "「…………」",
        "天空神再次傳來意念。",
        "這一次，柒原本平靜的神情出現了變化。",
        "「原來如此……這就是您降下落水的原因嗎？」",
        "他的眼神漸漸沉下。",
        "「天逐屬找到了那件神器，並利用它製造出了羽翼。」",
        "「…………」",
        "那不是天空神賜予的翅膀。",
        "那對仿造羽翼粗製濫造，由不屬於天空之物強行拼湊而成。它的出現不只破壞了天空與大地之間的契約，更可能攪亂阿宮溜家族守護了七世的祥和。",
        "柒的衣袖在無風的空間中輕輕飄動。",
        "「大地神無法約束自己的子民，竟讓天逐屬妄圖破壞契約。」",
        "他的聲音比平時更加冰冷。",
        "「既然身為大地神眷顧的子民，卻妄想以虛假的羽翼染指天空，理應遭受神罰。」",
        "然而，大祭司懇求他的模樣再次浮現於柒的腦海。",
        "那人明知短生屬在神明眼中微不足道，依然跪在地上，請求他拯救自己的族人。",
        "柒遲疑片刻。",
        "「可是，其他短生屬也會遭受滅頂之災。他們並未參與天逐屬的計畫。」",
        "「…………」",
        "天空神的意念如落水般在空間中擴散。",
        "在那場席捲大地的災難裡，所有短生屬都只能困在地面。如果神器真的製造出了能夠飛行的羽翼，那名使用者必定會飛離地面，躲避洪水。",
        "到了那時，藏在短生屬之中的叛徒便會自行現身。",
        "柒終於明白天空神的意圖。",
        "「所以，這場落水並不只是神罰。」",
        "「您真正的目的，是逼出那個使用仿造羽翼的人？」",
        "「…………」",
        "柒望向純白空間的深處。",
        "既然天空神不容許短生屬飛翔，又為何會讓那件神器誕生於世？",
        "那究竟是足以破壞神明契約的禁忌，還是天空神刻意留給凡人的考驗？",
        "柒沒有問出口。",
        "因為就在此時，他察覺到那股覆蓋大地的悲傷正在逐漸消散。",
        "天空神已經做出了決定。",
        "落水將會停止。",
        "但藏在大地上的那雙仿造羽翼，仍未被找到。",
        "持續數月的落水終於停止，烏雲散去，久違的陽光重新落在大地。即使廣場四周仍留著洪水沖刷的痕跡，人們的臉上依然充滿劫後餘生的喜悅。",
        "大祭司站在廣場中央，接受眾人的歡呼與簇擁。",
        "「我們是受到大地神庇佑的種族。天空神降下這場落水，正是為了測試我們對大地神的忠誠！」",
        "「即使面對災難，我們依然沒有拋棄自己的信仰。我們展現出的堅忍不拔令天空神動容，所以祂才停止落水，讓陽光重新照耀大地！」",
        "廣場上的歡呼一浪高過一浪。",
        "「感謝大地神！」",
        "「感謝天空神的寬恕！」",
        "「大祭司拯救了我們！」",
        "人們相信，那場災難是一場來自神明的試煉；也相信自己憑藉堅定的信仰，得到了天空神的認可。",
        "卻沒有人注意到，廣場邊緣的一棵老樹下，站著一名披著斗篷的男人。",
        "「天空神的試煉？」",
        "他靠著樹幹，望向被人群簇擁的大祭司，嘴角浮現一抹輕蔑的笑意。",
        "「這種老掉牙的神話，就留給那群愚民相信吧。」",
        "微風吹過，掀起男人背後的斗篷一角。",
        "藏在斗篷下的並非長生屬那般潔白柔順的翅膀，而是一對由碎布、竹節與繩索拼接而成的羽翼。表面粗糙，結構也遠遠稱不上完美，卻確實能夠帶他離開大地。",
        "男人抬頭望向重現光明的天空。",
        "「天空可從來不屬於長生屬。」"
      ]
    },
    {
      id: "chapter-3",
      name: "第三章",
      title: "不朽神話 裁縫之翼殞落之地 第三章",
      requires: ["myth-fall-meaning-answer", "myth-priest-meaning-answer"],
      text: []
    },
    {
      id: "chapter-4",
      name: "第四章",
      title: "不朽神話 裁縫之翼殞落之地 第四章",
      requires: ["myth-roles-answer", "myth-wing-maker-answer"],
      text: []
    }
  ],
  sky: [
    {
      id: "chapter-1",
      name: "第一章",
      title: "被天空遺棄的孩子們 第一章",
      unlocked: true,
      format: "dialogue",
      text: [
        "城南有一座王家紗廠，原是存放糧草的舊倉，後來讓王家買了去，又從洋人手裡購來幾部汽機，才改作如今的模樣。",
        "廠房已有些年頭，青磚牆上裂紋橫生，牆皮一片片往下剝落。窗櫺破了好幾處，糊窗的紙早被煤煙燻成昏黃。屋樑底下終日浮著一層白濛濛的汽霧，棉絮混著煤灰四處飄散，稍一張口，便像有細毛黏進嗓子裡。",
        "角落裡，一名姑娘正低著頭，將手中的破衣布一針一線拼縫起來。",
        "她名喚安寧。",
        "安寧生得清瘦，兩頰微陷，面色淡白，嘴唇也沒多少血色。她坐在眾多女工之間，身子瞧來比旁人單薄許多，唯獨手上的活計十分俐落。",
        "細針穿過布面，牽出棉線，再從另一頭準確穿回。她不用尺量，也鮮少停下察看，只消以指腹摸過布料，便能尋出磨損與破裂之處。",
        "廠裡吵得很。",
        "汽機一刻不停地轟鳴，銅管噴吐白汽，老舊的齒輪彼此咬合，震得腳下磚地微微發顫。數十部織機一同作響，人在裡頭待得久了，連自己的心跳都聽不真切。",
        "若要與旁人說話，即便只隔著半步，也得湊到耳邊扯開嗓子。",
        "安寧卻能聽見藏在轟鳴底下的聲音。",
        "左邊第三部織機的轉軸鬆了，每轉七圈，便會響起一聲輕微的磕碰；後牆的汽管正漏著氣，那道細長的嘶聲正一點點變得尖銳；隔著兩張案桌，一名女工不慎將細針落在地上，針身彈過磚縫，最後滾進木箱底下。",
        "這些聲音早被汽機的轟鳴吞得一乾二淨，旁人半點也不曾察覺，傳入安寧耳中時卻依然清楚。",
        "她微微皺眉，把塞在耳中的棉布往裡按了按。",
        "饒是如此，廠內千百種聲響仍像潮水一般，一層壓過一層地湧來。安寧只得低下頭，將全副心神放在手中的布匹上。",
        "細針刺入布面，再輕輕抽出。",
        "規律的穿針聲，反倒成了她在滿室喧囂之中，唯一能抓住的清靜。",
        "附近的女工須借織機才能趕出的活計，她僅憑一雙手便能做得不相上下。案上的舊布一件件減少，縫補妥當的衣料則疊得方方正正，針腳又細又密。",
        "一滴汗順著她的髮絲滑過鬢角。",
        "安寧尚未看見，便已聽出那滴汗正在下落。她趕忙將布匹挪開，水珠這才落在案面的木紋上。",
        "啪嗒。",
        "聲音輕得很，轉眼便被機聲淹沒。",
        "安寧取袖口擦去水痕，生怕污損布料，讓管事尋著由頭扣她的工錢。",
        "廠房頂上雖吊著幾片大風扇，卻轉得又遲又慢，吹不散汽機吐出的熱氣，反倒將灼人的熱風吹往各處。每逢暑氣最盛之時，總有工人兩眼一黑，倒在織機跟前。",
        "管事便命人將其拖到牆根，潑幾瓢涼水。若能醒來，歇不了一刻鐘便得接著做活；若醒不來，也不過另尋一人補上空缺。",
        "即便如此，城裡仍有不少窮苦人家擠破頭想進王家的紗廠。",
        "城外良田多在富戶手中，窮人縱使租得幾畝薄田，交完租穀與官糧，也剩不下多少。一旦碰上旱澇，忙活一整年，連半袋糙米也未必保得住。",
        "相比之下，紗廠至少按期發放工錢。",
        "只是錢多錢少，全憑王家一句話。今日少發十文，明日再添個損壞布料的名目，工人也不敢多問。哪怕從天色未明做到掌燈時分，掙來的錢也只夠勉強餬口。",
        "安寧重新拿起細針。",
        "她正欲接著做活，忽然聽見身後傳來一陣腳步聲。",
        "來人的鞋底踏過磚地，步伐沉穩，不急不徐。每走幾步，便有一下細微的金屬碰撞聲夾在機器的轟鳴之中。",
        "安寧不曾回頭。",
        "廠裡的管事走路又急又重，常把鑰匙串掛在腰上；尋常工人的布鞋落地很輕，步子也多半匆忙。唯有王家那位少東家，行走時不慌不忙，耳畔的墜飾還會隨著腳步輕響。",
        "那人最終停在安寧身後。",
        "安寧依舊垂首做活，像是全然不曾察覺。",
        "來人抬起手，準備抽走她手裡的布匹。衣袖尚未擦過案沿，安寧捏著細針的手便已先往旁邊挪了半寸。",
        "男人的動作略微一頓。",
        "「這些都是你一人縫的？」",
        "站在她跟前的青年肩背寬厚，一身墨青長衫裁得十分合體。腰間繫著玉扣，靴面不沾半點煤灰。耳畔垂著一枚烏金墜飾，方才隱在轟鳴之下的細響，正是由此而來。",
        "他便是王家少東家——王墘閣。",
        "「回王少爺，都是我縫的。」",
        "安寧的聲音很輕，倒聽不出多少惶恐，只顯得單薄無力。",
        "王墘閣未等她遞上，便將布匹抽了過去。他先端詳布面上的針腳，又捏住縫合處扯了兩下。",
        "「針腳密，收線也穩。兩片舊布接在一起，竟瞧不出多少痕跡。」",
        "「不過是做得久了，手熟罷了。」",
        "「你進廠才四個月。」",
        "安寧微微一怔，似乎沒料到對方會記得。",
        "王墘閣將她的神情看在眼裡，隨口問道：",
        "「你叫安寧？」",
        "「回王少爺，是。」",
        "他的目光掠過安寧耳邊，落在那截微微露出的棉布上。",
        "「廠裡這般吵，你倒還坐得住 做事還穩。」",
        "「待久了，也就慣了。」",
        "王墘閣看了她片刻，臉上瞧不出喜怒。",
        "「下週起，你的底錢添到三百文。」",
        "安寧的手停在半空。",
        "「三百文？」",
        "附近幾部織機雖仍在運轉，工人們的動作卻明顯遲了半拍。有人低頭撥弄梭子，有人故意整理棉線，耳朵卻全朝這邊留意。",
        "王墘閣在廠中素有刻薄之名。",
        "旁人多領一文，他都要問清緣故。如今竟親口將一名新來女工的底錢添到三百文，可見他確實看中了安寧的本事。",
        "「多謝王少爺。」",
        "安寧正欲起身道謝，王墘閣卻以兩指壓住她面前的布匹。",
        "「先別忙著謝，我有條件。」",
        "安寧抬眼望向他。",
        "王墘閣神色平靜，那雙眼睛卻像是在估量一件貨物，叫人猜不出心中所想。",
        "「請王少爺吩咐。」",
        "「往後不必再來廠裡，改到王府當差。」",
        "「王府？」",
        "「怎麼，不願意？」",
        "他的語氣仍舊平淡，安寧卻覺得四周的空氣都沉了幾分。",
        "這並非一句真正的詢問。",
        "「安寧不敢。」",
        "「很好。」",
        "王墘閣收回手，慢條斯理地整了整衣袖。",
        "「明日卯正，到王府後門候著，自會有人領你進去。至於辦什麼差事，到了府裡便會知曉。」",
        "「可否容我先問——」",
        "王墘閣看了她一眼。",
        "安寧尚未說完的話便停在唇邊。",
        "「王家給你三百文，是要你辦事，不是請你多問。」",
        "說罷，他轉身便走。",
        "行至數步之外，王墘閣又稍稍停住。",
        "「此事不必四處張揚。」",
        "「是。」",
        "直到那身墨青長衫消失在廠門外，附近的工人才像是重新喘過氣來。",
        "一名年長女工悄悄湊近，壓低嗓門問道：",
        "「安寧，你何時與少東家說過話？」",
        "「今日是頭一回。」",
        "「那他怎會知道你的姓名？」",
        "安寧望向王墘閣離去的方向，輕輕搖頭。",
        "她也不知道。",
        "安寧扛著米糧回到家時，日頭已落到西牆之後。",
        "安家住在城南最僻靜的陋巷裡，是一間以黃泥與碎磚勉強砌成的矮屋。屋頂鋪著發黑的舊瓦，缺口處壓著幾塊石頭。每逢落雨，外頭下多大，屋裡便漏多大，總要將木盆、破甕全擺出來接水。",
        "門板少了一角，只得以舊草蓆遮住。窗上糊不起新紙，母親便撿了幾張廢棄的告示補上。夜風一吹，紙面獵獵作響，像有人在窗外不住敲門。",
        "屋裡沒有幾件像樣的家當。",
        "一張缺腳木桌，底下墊著碎磚；三隻粗瓷碗，碗沿皆有豁口。牆邊原本擺著母親陪嫁的木櫃，如今裡頭已是空空蕩蕩。",
        "值錢的銀簪、冬衣與銅盆，早在父親傷腰、不能再替人扛貨時，陸續送進了當鋪。",
        "最窘迫的時候，一家三口只能煮一鍋稀粥，再摻些野菜充飢。父母總說自己不餓，把碗裡僅有的幾粒米撥給安寧，她卻知道，他們不過是怕自己吃不飽，沒力氣去廠裡做活。",
        "「娘，這是這週的米糧，我散工時一道扛回來了。」",
        "安寧將麻袋放下，沉重的悶響震起一層灰塵。",
        "母親原在門邊補衣，聞聲連忙起身。",
        "「你一個姑娘家，身子又單薄，扛這許多做什麼？交給你爹便是。」",
        "「爹的腰尚未好，哪能再讓他扛。」",
        "母親伸手摸了摸麻袋，臉色頓時起了變化。",
        "「這袋米怎比往常沉上許多？」",
        "她解開袋口，看見裡頭裝著足量的糙米，先是一喜，隨即又警覺起來。",
        "「安寧，你哪來的這許多錢？」",
        "「王少爺今日替我添了工錢。往後每週有三百文，咱們家便不必再餓肚子了。」",
        "「三百文？」",
        "母親的手仍按在糧袋上，臉上卻不見多少歡喜。",
        "後屋的竹簾忽然讓人掀開。",
        "父親原本躺在涼蓆上歇息，聽見王家二字，立刻撐著牆站起。他走路時左腿有些僵硬，每踏一步，眉頭便收緊幾分。",
        "「王家為何平白替你添錢？」",
        "「王少爺說，我縫布的手藝尚可。」",
        "「只因這個？」",
        "安寧遲疑片刻。",
        "父親立刻瞧出不對。",
        "「還有何事？」",
        "「他命我明日起別去紗廠，改到王府當差。」",
        "父親的臉色當即沉了下來。",
        "「不成。」",
        "「爹——」",
        "「王家是何等門第，你不是不知。」",
        "父親壓低聲音，",
        "「咱們窮歸窮，卻不能叫你糊裡糊塗進了王府。連辦什麼差事都不肯明說，如何去得？」",
        "「若有三百文，往後家裡便不必再典當物件。娘不用將自己的口糧省給我，爹也能請郎中瞧瞧腰傷。」",
        "母親聽見這話，眼眶微微泛紅。",
        "她走到安寧身旁，伸手摸向女兒的耳廓，從裡頭取出兩團塞得緊實的棉布。",
        "棉布已被汗水浸透，安寧的耳朵也因終日堵著而泛紅。",
        "耳塞才剛取下，原本寂靜的矮屋便在安寧耳中活了過來。",
        "灶中柴火裂開的脆響，屋樑裡蟲豸爬過木縫的窸窣聲，巷口貨郎清點銅錢的碰撞聲，還有隔壁婦人壓著嗓門責罵孩子的言語，全在同一刻湧入她的耳中。",
        "再遠一些，巷外有人推著獨輪車經過。",
        "木輪右側缺了一小塊，每轉一圈，便會在石路上顛簸一次。安寧甚至不必出門察看，也知道車上裝的是瓷器——輪子顛動時，瓷碗互相輕碰的聲音正從兩條巷外傳來。",
        "她閉了閉眼，待那些聲音逐漸分出遠近，才慢慢鬆開眉頭。",
        "「娘不是交代過你，在廠裡要藏著些本事嗎？」",
        "「我已經藏得很小心了。」",
        "「你若當真藏得好，王少爺便不會親自尋上你。」",
        "母親替她輕輕揉了揉泛紅的耳朵，面上滿是憂色。",
        "安寧自幼便聽得比旁人遠，也比旁人細。",
        "旁人只道她耳目靈便，唯有父母明白，那不是尋常的耳力。",
        "她能聽見旁人聽不見的聲音。",
        "自然也可能聽見一些不該聽見的話。",
        "「沒法子，誰叫我的耳朵生來便是如此。」",
        "安寧接過母親手中的棉布，面上仍是那副溫和笑意。",
        "「所以爹娘才替我取名『安寧』，盼我能得片刻清靜，不是嗎？」",
        "那一晚，安家難得煮了一鍋不摻野菜的糙米飯。",
        "家裡捨不得點油燈，只燃著一截將要燒盡的蠟燭。昏黃燭光映著破舊的桌面，也照亮三碗冒著熱氣的米飯。",
        "安寧捧著缺了一角的碗，靜靜看著父母。",
        "她心想，只要明日的差事不是太過為難，自己便答應下來。",
        "她不知道，王墘閣早已留意她多日。",
        "頭一回，雖不會使用裁縫機 但織布成品速度和品質卻不輸其他工人",
        "第二回，是一根汽管尚未崩裂，她便忽然離開座位，將附近幾名女工拉到了一旁。",
        "第三回，便是今日。",
        "他看中的，從來不是安寧織布的手藝。",
        "王府所需的，也從來不是一名尋常繡娘。"
      ]
    },
    { id: "chapter-2", name: "第二章", title: "被天空遺棄的孩子們 第二章", text: [] },
    { id: "chapter-3", name: "第三章", title: "被天空遺棄的孩子們 第三章", text: [] },
    { id: "chapter-4", name: "第四章", title: "被天空遺棄的孩子們 第四章", text: [] }
  ],
  fall: [
    {
      id: "chapter-1",
      name: "第一章",
      title: "墜落之翼葬身之地 第一章",
      unlocked: true,
      format: "dialogue",
      intro: "fall-crater",
      text: [
        "「這是這個月第八起的羽翼墜落事故了吧」",
        "「從那麼高的地方摔下來 那種失重感想想就覺得可怕」",
        "「可是生為短生屬牠們為什麼這麼嚮往天空阿 看看那些那些長生屬的翎羽最後也變成變成囹圄 」",
        "「或許… 恩？喔下雨了」",
        "「看來天空似乎有些傷心呢」",
        "在[我]的座位上放著一杯熱茶 茶梗在正中央載浮載沉",
        "就像[我？]一樣啊 明明被夾在天空和大地間 卻不歸屬於任何一邊",
        "但如果要我選擇 我還是嚮往天空吧但至於為什麼 也是因為神話吧",
        "地是有限的；路或許有一天會走到盡頭的    但天空是沒有邊界 沒有尺度 沒有極限的 大到可以裝下所有荒誕的想法 可憐的願望 微不足道的一切",
        "羽翼就像和祂溝通的媒介 當你靠近他必須證明你的資格祂才會接納你",
        "接觸了之後 有種熟悉的感覺好像回到小時候灰濛濛的天下起大雨 祂依舊很傷心 祂是個愛哭鬼 亂雜的雨聲好像被祂吐出的傷心事 [我]靜靜的聆聽安穩的睡去 [我]總是覺得下雨的時候特別好睡 好像有人在唱搖籃曲一樣 雖然聽不懂你的語言 但是卻能感受到你的情緒",
        "天空那麼寬廣 可以容納的事物無窮無盡 是什麼事情能讓祂心煩呢 好好奇喔",
        "真希望能聽懂祂的語言",
        "「『我』要怎麼樣和他溝通呢？」"
      ]
    },
    {
      id: "chapter-2",
      name: "第二章",
      title: "墜落之翼葬身之地 第二章",
      format: "dialogue",
      intro: "fall-blood-tears",
      text: [
        "我在深不見底的洞穴中挖掘。",
        "一下，又一下。",
        "我早已忘記自己挖了多少個日夜。四周沒有陽光，也聽不見外界的聲音，只有泥土被刨開的聲響不斷在洞穴裡迴盪。",
        "當我停下來向上望去，洞口只剩下一個遙遠的光點。",
        "這個洞深得像是沒有盡頭，彷彿我再繼續挖下去，便能挖穿大地，抵達連神明都未曾見過的另一端。",
        "但我的目的並不在那裡。",
        "我只是想為手中的種子，找到一片足以生長的土壤。",
        "我將它埋入洞穴最深處，守在旁邊，等待它發芽。",
        "直到某一天，一抹嫩綠終於破土而出。",
        "「我種下一顆種子，終於長出了果實 今天是個偉大日子」",
        "當惡魔誕生之時，『我』終於能與『祂』溝通。",
        "一滴水落在我的鼻尖。",
        "我伸手碰了碰那道水痕，隨後仰頭望向遙遠的洞口。",
        "「哦……『祂』落水了。」",
        "更多落水穿過洞口，滲進四周的土壤。",
        "『祂』的喜怒哀樂全都藏在其中。悲傷、憤怒、憐憫，以及連『祂』自己都說不清楚的情感，化作滋養惡魔的水分。",
        "但只有『祂』的情感，還不足以讓惡魔真正成長。",
        "我咬破了舌尖讓自己的血流入泥土。",
        "鮮紅的血液與『祂』的落水交融，逐漸滲入惡魔腳下的土地。",
        "「『祂』給予你水分。」",
        "我伸手輕撫尚且脆弱的嫩芽。",
        "「而『我』給予你養分。」",
        "它貪婪地吸收水分與血液，像是一個永遠無法填滿的洞。細長的鬚根迅速鑽入泥土，向大地深處蔓延，掠奪所能觸及的一切養分。",
        "隨後，它長出了第一根枝枒。",
        "枝枒向上延伸，穿過黑暗，追逐從洞口落下的微光。它越長越高，最後甚至撐開洞穴，試圖攀上遙不可及的雲霄。",
        "我站在它的根部，仰望它逐漸遠去。",
        "而對『祂』而言——",
        "『神話』由此開始。",
        "神話，不過只是故事。",
        "雖說如此，後續的故事還請各位聽『我』娓娓道來。我會不急不徐地闡述一切，所以各位客官不妨先喝口茶，潤潤喉。",
        "畢竟，接下來的故事還很長。",
        "後來，『他』吸收了充足的養分，成為人們口中的神樹。",
        "『我』曾站在神樹底下抬頭仰望。",
        "『他』的樹幹寬廣得宛如城牆，枝葉穿過層層雲霧，無論『我』如何仰頭，都看不見真正的頂端。",
        "短生屬自然也看不見。",
        "他們沒有足夠漫長的生命了解『他』，只能一代又一代地傳頌殘缺的故事，猜測神樹究竟為何存在。",
        "『祂』是否住在神樹頂端？",
        "雲層之上是否藏著珍寶？",
        "『他』為何誕生，又為何執著地向天空生長？",
        "短生屬窮盡一生，或許也得不到答案。",
        "對了，說到有限的壽命——",
        "為何短生屬的生命天生如此短暫？",
        "長生屬擁有近似無限的時間，背後還生有潔白的羽翼；短生屬卻只能留在地面，仰望自己永遠無法抵達的天空。",
        "實在太不公平了，不是嗎？",
        "『我』有時也會想，如果短生屬能夠長出翅膀，飛上神樹頂端，或許便能找到『祂』，親口向『祂』問個明白。",
        "啊……？",
        "短生屬長不出翅膀？",
        "那麼，親手製造一雙不就好了嗎？",
        "這便是天逐屬最初的信念。",
        "純粹、滿腔熱血，並且義無反顧。",
        "那時的他們只是相信，短生屬也有資格離開大地。他們尚且不知道，一雙仿造的羽翼將會帶來什麼，也不知道自己的信念最終會被寫成怎樣的神話。",
        "相信各位也曾在神話之中，聽過天逐屬車車的故事。",
        "但在神話之外，可從來沒有那種東西。",
        "至少，真相並不像各位聽見的那麼簡單。",
        "客官，您不妨仔細想想。",
        "一棵樹要長大，需要什麼？",
        "水分、陽光，以及養分。",
        "在最開始，『祂』給予了『他』最初的水分；『我』則以自己的血，給予了『他』最初的養分。",
        "那麼，陽光呢？",
        "對『他』而言，陽光究竟意味著什麼？",
        "『他』又是如何吸收陽光，從深不見底的洞穴一路生長至凌霄？",
        "或者，『他』從誕生的那一刻起，便知道陽光位於何處，所以才會不顧一切地向上攀爬？",
        "神話之外的故事，總是讓人摸不著頭腦，對吧？",
        "別擔心。",
        "茶尚未涼，『我』也沒有離去。",
        "在接下來的時間裡，『我』會好好向各位講完剩下的故事。"
      ]
    },
    { id: "chapter-3", name: "第三章", title: "墜落之翼葬身之地 第三章", text: [] },
    { id: "chapter-4", name: "第四章", title: "墜落之翼葬身之地 第四章", text: [] }
  ],
  love: [
    {
      id: "chapter-1",
      name: "第一章",
      title: "妳與昨天已過百年 第一章",
      unlocked: true,
      format: "dialogue",
      text: [
        "「這個月的藥記得按時吃喔，荼蘼。」",
        "我一邊細心幫她理好有些凌亂的髮絲，一邊輕聲哄著。",
        "「我不想吃藥，好苦喔……而且我感覺我已經吃好久了，病都還沒有好……」荼蘼微微嘟起嘴，澄澈卻空洞的眼神裡盛滿了委屈，腦袋無力地靠在我的肩頭。",
        "「……」",
        "我沒有回應，只是沉默地側過身，從胸前那件早已磨得泛白、帶著淡淡機油與棉絮味的麻布袋裡，小心翼翼地掏出了這次看病的硬幣。",
        "那些泛著黯淡光澤的銅幣在粗糙的手心裡沉甸甸的。儘管這是我在不分晝夜、齒輪轟鳴的紡織廠裡瘋狂勞動兩週才換來的全部工資，我也絲毫不覺得可惜——只要祂能好起來，只要荼蘼能恢復朝氣，這點代價根本不算什麼。",
        "然而，眼前的長者似乎對我的內心掙扎毫無興趣。昏暗的藥鋪裡，只有幾盞搖曳的油燈勉強照亮這方寸之地，空氣中瀰漫著乾枯草藥、陳年羊皮紙與一種說不上來的苦澀怪味。他神色冷漠，連眼皮都沒抬一下，只是握著那支斑駁的鵝絨筆，在粗糙的羊皮紙上沙沙地畫下一些艱澀難懂的符號。隨後，他慢條斯理地起身，那件屬於「長生屬」的長袍在地上拖曳出微弱的摩擦聲，走向了身後那一整面由黑實木打造的巨大藥櫃，拉開其中一個抽屜，取出草藥開始在石缽中緩慢地研磨起來。",
        "搗藥杵撞擊石缽的沉悶聲響，在安靜的藥鋪裡顯得格外清晰。",
        "眼前的一切，彷彿刻進了我的肌肉記憶一般，帶來一陣強烈到讓人心驚的既視感。我都快記不清這是第幾次了——每一次拿到這個月勞動薪水的第一件事，就是牽著荼蘼的手，穿過中世紀泥濘狹窄的街道，來到這間彷彿時間靜止的藥鋪，讓醫生診斷她最近的病情。",
        "在我的記憶裡，自從認識她以來，她一直都是這種無精打采的狀態。她常常忘東忘西，明明外表已經是個成熟的大人了，卻連最基本的照顧自己都做不到，脆弱得像個隨時會融化的雪人，一個讓人永遠放心不下的小孩子。",
        "看著醫生機械般重複的動作，一絲壓抑已久的焦慮終於按捺不住，從我的胸口溢了出來。",
        "「醫生……我問你……」",
        "「請說。」他精準地回答道，語氣平穩得沒有一絲波瀾，手上的工序更是絲毫未改。他熟練地將研磨好的草藥倒在粗麻布上，折疊、按壓。",
        "「你是什麼病都能治好，對吧……？」我死死盯著他的側臉，試圖捕捉到一絲情緒起伏。",
        "「當然。」醫生的動作微微一頓，油燈將他枯槁的身影拉得極長，「『芷茵靈』的加護，能夠讓我驅散這世上的一切傷寒雜病。」",
        "「不過……我每個圓月日都定期帶她來找你，算一算，也過了兩坤半了吧？」我的聲音裡帶著一絲連自己都沒察覺的顫抖。長者這才緩緩停下手上的動作，那雙彷彿看盡滄桑的渾濁眼眸終於對上了我的視線：",
        "「『芷茵靈』讓我能治癒所有傷痛。只不過……祂的詛咒也同樣制約著我，無法透露任何治療的細節。」",
        "聽到這個答案，我只能自嘲般地苦笑了一聲，垂下眼眸：「也對啊，你們『長生屬』的規矩一向複雜得很……這力量，簡直就是一面雙面刃啊。」",
        "「總之，這是祂讓我在這片天下生存的籌碼。若你相信祂的加護，每個圓月日按時回訪便是；若是不信，也可另尋高就。」",
        "語落，他沒有再多說一個字，只是將那包用細麻繩捆綁得整整齊齊、散發著些許澀味的藥包，推到了我的面前。"
      ]
    },
    { id: "chapter-2", name: "第二章", title: "妳與昨天已過百年 第二章", text: [] },
    { id: "chapter-3", name: "第三章", title: "妳與昨天已過百年 第三章", text: [] },
    { id: "chapter-4", name: "第四章", title: "妳與昨天已過百年 第四章", text: [] }
  ]
};
const puzzleTrees = stories.map((story) => ({
  id: story.theme,
  type: story.type,
  name: story.name,
  questions: [],
  stageRewards: []
}));
// question: { text: [], branches: [{ id, name, answers, keywords, threshold, keywordRatio, reward: { type, text: [] } }] }

puzzleTrees.find((tree) => tree.id === "myth").questions = [
  {
    id: "myth-who",
    level: 0,
    text: ["魏何父親口中的那位大人指的是誰 （全名）"],
    branches: [
      {
        id: "myth-who-answer",
        answers: ["阿宮溜・柒"],
        keywords: ["阿宮溜", "柒"],
        keywordRatio: 1,
        threshold: 0.8,
        nextQuestions: ["myth-fall-meaning", "myth-priest-meaning"],
        mergeRequires: ["myth-fall-meaning-answer", "myth-priest-meaning-answer"],
        mergeQuestions: ["myth-roles", "myth-wing-maker"],
        reward: {
          type: "故事文本",
          text: ["主線第二章"]
        }
      }
    ]
  },
  {
    id: "myth-fall-meaning",
    level: 1,
    requires: ["myth-who-answer"],
    text: ["對於『天空神』那場落水的意義是什麼"],
    branches: [
      {
        id: "myth-fall-meaning-answer",
        answers: [
          "為了找出用天逐屬車車做出翅膀的人",
          "找出做出翅膀的人",
          "找到做出翅膀的人",
          "做出翅膀的人",
          "製作翅膀的人",
          "找出製作翅膀的人",
          "使用天逐屬車車製作翅膀的人"
        ],
        keywords: ["製作", "翅膀", "人"],
        keywordRatio: 0.67,
        threshold: 0.68
      }
    ]
  },
  {
    id: "myth-priest-meaning",
    level: 1,
    requires: ["myth-who-answer"],
    text: ["在清醒後『大祭司』是如何解讀那場落水的意義"],
    branches: [
      {
        id: "myth-priest-meaning-answer",
        answers: ["考驗短生屬對大地神的忠誠"],
        keywords: ["短生屬", "大地神", "忠誠"],
        keywordRatio: 0.67,
        threshold: 0.72
      }
    ]
  },
  {
    id: "myth-roles",
    level: 2,
    requires: ["myth-fall-meaning-answer", "myth-priest-meaning-answer"],
    text: ["對於天空神所指的「紀錄所有時光」「收穫所有生命」「捕獲所有珍寶」「感受所有事物」「審判所有離別」分別代表什麼"],
    hint: "提示：說不定跟長生屬的職業有關？",
    branches: [
      {
        id: "myth-roles-answer",
        answers: ["畫家 醫師 盜賊 哲學家 判官"],
        keywords: ["畫家", "醫師", "盜賊", "哲學家", "判官"],
        keywordRatio: 0.8,
        threshold: 0.72
      }
    ]
  },
  {
    id: "myth-wing-maker",
    level: 2,
    requires: ["myth-fall-meaning-answer", "myth-priest-meaning-answer"],
    text: ["使用天逐屬車車製作出翅膀的人是？"],
    hint: "提示：你以為把短生屬都猜過一遍就會對？",
    branches: [
      {
        id: "myth-wing-maker-answer",
        answers: ["王尚堪"],
        keywords: ["王尚堪"],
        keywordRatio: 1,
        threshold: 0.8
      }
    ]
  }
];

puzzleTrees.find((tree) => tree.id === "myth").stageRewards = [
  {
    id: "myth-chapter-3",
    requires: ["myth-fall-meaning-answer", "myth-priest-meaning-answer"],
    reward: {
      type: "故事文本",
      text: ["主線第三章"]
    }
  },
  {
    id: "myth-chapter-4",
    requires: ["myth-roles-answer", "myth-wing-maker-answer"],
    reward: {
      type: "故事文本",
      text: ["主線第四章"]
    }
  }
];

puzzleTrees.find((tree) => tree.id === "sky").questions = [
  {
    id: "sky-artifact",
    level: 0,
    text: ["對於短生屬想要獲得翅膀 不可獲缺的神器叫做什麼（五個字）"],
    branches: [
      {
        id: "sky-wing-material",
        name: "王墘閣製作翅膀需要的『關鍵』材料是什麼",
        answers: ["天逐屬車車"],
        keywords: ["天逐屬車車"],
        threshold: 0.8,
        nextQuestion: "sky-material"
      }
    ]
  },
  {
    id: "sky-material",
    level: 1,
    requires: ["sky-wing-material"],
    text: ["王墘閣製作翅膀需要的『關鍵』材料是什麼"],
    branches: [
      {
        id: "sky-material-answer",
        name: "生活在冰水壹湖的豆腐鴨的 血",
        answers: ["生活在冰水壹湖的豆腐鴨的血", "豆腐鴨的血", "豆腐鴨血"],
        keywords: ["冰水壹湖", "豆腐鴨", "血"],
        keywordRatio: 0.67,
        threshold: 0.72
      }
    ]
  }
];

const storyGrid = document.querySelector("#story-grid");
const characterGrid = document.querySelector("#character-grid");
const achievementGrid = document.querySelector("#achievement-grid");
const puzzleGrid = document.querySelector("#puzzle-grid");
const modal = document.querySelector("#text-modal");
const modalType = document.querySelector("#modal-type");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");
const rewardModal = document.querySelector("#reward-modal");
const rewardType = document.querySelector("#reward-type");
const rewardText = document.querySelector("#reward-text");
const chapterModal = document.querySelector("#chapter-modal");
const chapterType = document.querySelector("#chapter-type");
const chapterTitle = document.querySelector("#chapter-title");
const chapterName = document.querySelector("#chapter-name");
const chapterText = document.querySelector("#chapter-text");
const chapterIntro = document.querySelector("#chapter-intro");
const chapterPagination = document.querySelector("#chapter-pagination");
const chapterPagePrev = document.querySelector("#chapter-page-prev");
const chapterPageNext = document.querySelector("#chapter-page-next");
const chapterPageStatus = document.querySelector("#chapter-page-status");
const storyTestUnlock = document.querySelector("#story-test-unlock");
const unlockedBranches = new Set();
const puzzleFeedback = new Map();
const announcedStageRewards = new Set();
const playedChapterIntros = new Set();
let allStoryTextsUnlocked = false;
let activeChapterPages = [];
let activeChapterPage = 0;
let activeChapterFormat = "continuous";
const characterModal = document.querySelector("#character-modal");
const characterHero = document.querySelector("#character-hero");
const characterGroup = document.querySelector("#character-group");
const characterName = document.querySelector("#character-name");
const characterText = document.querySelector("#character-text");
const characterPersonModal = document.querySelector("#character-person-modal");
const characterStoryModal = document.querySelector("#character-story-modal");
const characterPersonText = document.querySelector("#character-person-text");
const characterStoryText = document.querySelector("#character-story-text");
const characterPersonTitle = document.querySelector("#character-person-title");

restoreUnlockedStoryTexts();

stories.forEach((story, index) => {
  const button = document.createElement("button");
  button.className = `story-card story-card--${story.theme}`;
  button.type = "button";
  button.dataset.theme = story.theme;
  button.style.setProperty("--i", index);
  button.innerHTML = `
    <span class="story-type">${story.type}</span>
    <strong>${story.name}</strong>
  `;
  button.addEventListener("click", () => openStory(story));
  button.addEventListener("mouseenter", () => setTheme(story.theme));
  button.addEventListener("focus", () => setTheme(story.theme));
  button.addEventListener("mouseleave", clearTheme);
  button.addEventListener("blur", clearTheme);
  storyGrid.appendChild(button);
});

renderCharacters();
renderAchievements();
renderPuzzleTrees();
enableViewSwitching();
enableDragging();

storyTestUnlock.addEventListener("click", () => {
  allStoryTextsUnlocked = true;
  storyTestUnlock.classList.add("is-active");
  storyTestUnlock.textContent = "所有故事文本已開放";
  storyTestUnlock.disabled = true;
});

document.querySelector("[data-close]").addEventListener("click", () => modal.close());
document.querySelector("[data-reward-close]").addEventListener("click", () => rewardModal.close());
document.querySelector("[data-chapter-close]").addEventListener("click", () => chapterModal.close());
document.querySelector("[data-character-close]").addEventListener("click", () => characterModal.close());
document.querySelector("[data-person-close]").addEventListener("click", () => characterPersonModal.close());
document.querySelector("[data-story-close]").addEventListener("click", () => characterStoryModal.close());
chapterPagePrev.addEventListener("click", () => showChapterPage(activeChapterPage - 1));
chapterPageNext.addEventListener("click", () => showChapterPage(activeChapterPage + 1));

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

rewardModal.addEventListener("click", (event) => {
  if (event.target === rewardModal) rewardModal.close();
});

chapterModal.addEventListener("click", (event) => {
  if (event.target === chapterModal) chapterModal.close();
});

characterModal.addEventListener("click", (event) => {
  if (event.target === characterModal) characterModal.close();
});

characterPersonModal.addEventListener("click", (event) => {
  if (event.target === characterPersonModal) characterPersonModal.close();
});

characterStoryModal.addEventListener("click", (event) => {
  if (event.target === characterStoryModal) characterStoryModal.close();
});

characterModal.addEventListener("close", () => {
  if (characterPersonModal.open) characterPersonModal.close();
  if (characterStoryModal.open) characterStoryModal.close();
});

modal.addEventListener("close", clearTheme);

function openStory(story) {
  setTheme(story.theme);
  modal.dataset.theme = story.theme;
  modalType.textContent = story.type;
  modalTitle.textContent = story.label;
  modalText.replaceChildren();

  if (story.visual) {
    const visual = document.createElement("div");
    visual.className = "story-visual";
    visual.style.backgroundImage = `url("${story.visual}")`;
    modalText.appendChild(visual);
  }

  renderChapterShelf(story, modalText);

  if (!storyChapters[story.theme]) {
    story.text.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      modalText.appendChild(paragraph);
    });
  }

  modal.showModal();
}

function renderChapterShelf(story, container) {
  const chapters = storyChapters[story.theme];
  if (!chapters) return;
  const shelf = document.createElement("div");
  shelf.className = `chapter-shelf chapter-shelf--${chapters.length}`;

  chapters.forEach((chapter) => {
    const requirements = chapter.requires || [];
    const unlocked = allStoryTextsUnlocked || chapter.unlocked === true || (
      requirements.length > 0 && requirements.every((branchId) =>
        unlockedBranches.has(`${story.theme}:${branchId}`)
      )
    );
    const button = document.createElement("button");
    const label = document.createElement("span");
    button.className = "chapter-button";
    button.type = "button";
    button.disabled = !unlocked;
    button.classList.toggle("is-unlocked", unlocked);
    label.textContent = chapter.name;
    button.appendChild(label);

    if (!unlocked) {
      const lock = document.createElement("span");
      lock.className = "chapter-lock";
      lock.setAttribute("aria-hidden", "true");
      lock.textContent = "🔒";
      button.appendChild(lock);
    } else {
      button.addEventListener("click", () => openChapter(story, chapter));
    }
    shelf.appendChild(button);
  });
  container.appendChild(shelf);
}

function openChapter(story, chapter) {
  chapterModal.dataset.theme = story.theme;
  chapterType.textContent = story.type;
  chapterTitle.textContent = chapter.title.slice(0, -(chapter.name.length + 1));
  chapterName.textContent = chapter.name;
  activeChapterFormat = chapter.format === "dialogue" ? "dialogue" : "continuous";
  activeChapterPages = paginateChapterText(chapter.text, activeChapterFormat);
  activeChapterPage = 0;
  showChapterPage(0, false);
  if (chapter.intro && !playedChapterIntros.has(chapter.intro)) {
    playedChapterIntros.add(chapter.intro);
    playChapterIntro(chapter.intro, () => chapterModal.showModal());
  } else {
    chapterModal.showModal();
  }
}

function paginateChapterText(lines, format) {
  if (!lines.length) return [[]];
  const compactLandscape = window.matchMedia(
    "(orientation: landscape) and (max-height: 560px) and (max-width: 980px)"
  ).matches;
  const pageLimit = compactLandscape ? 700 : window.innerWidth <= 700 ? 900 : 1500;
  const pages = [];
  let page = [];
  let pageWeight = 0;

  lines.forEach((line) => {
    const dialogueWeight = format === "dialogue" && line.startsWith("「") ? 90 : 34;
    const lineWeight = line.length + dialogueWeight;
    if (page.length > 0 && pageWeight + lineWeight > pageLimit) {
      pages.push(page);
      page = [];
      pageWeight = 0;
    }
    page.push(line);
    pageWeight += lineWeight;
  });

  if (page.length > 0) pages.push(page);
  return pages;
}

function showChapterPage(pageIndex, scrollToTop = true) {
  if (!activeChapterPages.length) return;
  activeChapterPage = Math.max(0, Math.min(pageIndex, activeChapterPages.length - 1));
  const lines = activeChapterPages[activeChapterPage];
  chapterText.replaceChildren();

  if (activeChapterFormat === "dialogue") {
    chapterText.classList.add("chapter-text--dialogue");
    lines.forEach((line, index) => {
      const block = document.createElement(line.startsWith("「") ? "blockquote" : "p");
      block.className = line.startsWith("「") ? "chapter-dialogue" : "chapter-narration";
      block.style.setProperty("--delay", `${Math.min(index * 35, 350)}ms`);
      block.textContent = line;
      chapterText.appendChild(block);
    });
  } else {
    chapterText.classList.remove("chapter-text--dialogue");
    if (lines.length > 0) {
      const paragraph = document.createElement("p");
      paragraph.textContent = lines.join(" ");
      chapterText.appendChild(paragraph);
    }
  }

  const hasMultiplePages = activeChapterPages.length > 1;
  chapterPagination.hidden = !hasMultiplePages;
  chapterPagePrev.disabled = activeChapterPage === 0;
  chapterPageNext.disabled = activeChapterPage === activeChapterPages.length - 1;
  chapterPageStatus.textContent = `第 ${activeChapterPage + 1} / ${activeChapterPages.length} 頁`;

  if (scrollToTop) {
    chapterModal.querySelector(".chapter-sheet").scrollTo({ top: 0, behavior: "smooth" });
  }
}

function playChapterIntro(intro, onComplete) {
  chapterIntro.dataset.intro = intro;
  if (!chapterIntro.open) chapterIntro.showModal();
  chapterIntro.classList.remove("is-playing");
  void chapterIntro.offsetWidth;
  chapterIntro.classList.add("is-playing");
  window.setTimeout(() => {
    chapterIntro.classList.remove("is-playing");
    if (chapterIntro.open) chapterIntro.close();
    chapterIntro.removeAttribute("data-intro");
    onComplete();
  }, 3200);
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
}

function clearTheme() {
  if (!modal.open) {
    document.body.removeAttribute("data-theme");
  }
}

function renderCollection(items, container) {
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "collection-card";

    if (item.visual) {
      const visual = document.createElement("div");
      visual.className = "collection-visual";
      visual.style.backgroundImage = `url("${item.visual}")`;
      article.appendChild(visual);
    }

    if (item.name) {
      const title = document.createElement("h3");
      title.textContent = item.name;
      article.appendChild(title);
    }

    (item.text || []).forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      article.appendChild(paragraph);
    });

    container.appendChild(article);
  });
}

function renderAchievements() {
  achievements.forEach((achievement) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const condition = document.createElement("p");
    article.className = "collection-card achievement-card";
    article.dataset.achievement = achievement.id;
    title.textContent = achievement.name;
    condition.className = "achievement-condition";

    achievement.parts.forEach((part) => {
      if (typeof part === "string") {
        condition.appendChild(document.createTextNode(part));
        return;
      }
      const link = document.createElement("button");
      link.className = "achievement-link";
      link.type = "button";
      link.textContent = part.label;
      link.addEventListener("click", () => followAchievementLink(part));
      condition.appendChild(link);
    });

    article.append(title, condition);
    achievementGrid.appendChild(article);
  });
}

function followAchievementLink(link) {
  if (link.type === "character-view") {
    document.querySelector('[data-view="character"]').click();
    return;
  }

  if (link.type === "character-task") {
    const character = characters.find((item) => item.id === link.characterId);
    if (!character?.entries) return;
    document.querySelector('[data-view="character"]').click();
    openCharacter(character);
    characterPersonTitle.textContent = character.entries.person.title;
    openCharacterEntry(
      characterPersonModal,
      characterPersonText,
      character.entries.person.sections,
      link.taskTitle
    );
    return;
  }

  if (link.type === "achievement") {
    const card = achievementGrid.querySelector(`[data-achievement="${link.achievementId}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      card.classList.remove("is-target");
      void card.offsetWidth;
      card.classList.add("is-target");
    }
    return;
  }

  if (link.type === "puzzle") {
    document.querySelector('[data-view="puzzle"]').click();
    const tree = puzzleGrid.querySelector(`.puzzle-tree--${link.theme}`);
    const toggle = tree?.querySelector(".puzzle-tree-toggle");
    if (toggle?.getAttribute("aria-expanded") !== "true") toggle?.click();
    tree?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}

function renderCharacters() {
  ["長生屬", "短生屬"].forEach((group) => {
    const section = document.createElement("section");
    const heading = document.createElement("h3");
    const grid = document.createElement("div");

    section.className = `character-group character-group--${group === "長生屬" ? "long" : "short"}`;
    heading.textContent = group;
    grid.className = "character-grid";
    section.append(heading, grid);

    characters.filter((character) => character.group === group).forEach((character) => {
      const button = document.createElement("button");
      const portrait = document.createElement("span");
      const name = document.createElement("strong");

      button.className = "character-card";
      button.type = "button";
      portrait.className = "character-portrait";
      portrait.style.backgroundImage = `url("${character.visual}")`;
      name.textContent = character.name;
      button.append(portrait, name);
      button.addEventListener("click", () => openCharacter(character));
      grid.appendChild(button);
    });

    characterGrid.appendChild(section);
  });
}

function openCharacter(character) {
  characterModal.dataset.group = character.group === "長生屬" ? "long" : "short";
  characterModal.dataset.motion = character.motion;
  characterGroup.textContent = character.group;
  characterName.textContent = character.name;
  characterHero.style.backgroundImage = `url("${character.visual}")`;
  characterText.replaceChildren();
  const entries = character.entries || null;
  const details = character.details || [];
  characterText.hidden = character.text.length === 0 && details.length === 0 && !entries;

  if (details.length) {
    const detailList = document.createElement("div");
    detailList.className = "character-detail-list";
    details.forEach((detail) => {
      const row = document.createElement("div");
      const label = document.createElement("span");
      const value = document.createElement("p");
      row.className = "character-detail-row";
      label.textContent = detail.label;
      value.textContent = detail.value;
      row.append(label, value);
      detailList.appendChild(row);
    });
    characterText.appendChild(detailList);
  }

  character.text.forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    characterText.appendChild(paragraph);
  });

  if (entries) {
    const actions = document.createElement("div");
    const personButton = document.createElement("button");
    const storyButton = document.createElement("button");

    actions.className = "character-actions";
    personButton.className = "leather-button";
    storyButton.className = "leather-button";
    personButton.type = "button";
    storyButton.type = "button";
    personButton.textContent = "角色任務";
    storyButton.textContent = "角色故事";
    personButton.addEventListener("click", () => {
      characterPersonTitle.textContent = entries.person.title;
      openCharacterEntry(characterPersonModal, characterPersonText, entries.person.sections);
    });
    storyButton.addEventListener("click", () => openCharacterEntry(characterStoryModal, characterStoryText, entries.story));
    actions.append(personButton, storyButton);
    characterText.appendChild(actions);
  }

  characterModal.showModal();
}

function openCharacterEntry(dialog, container, content, focusTitle = "") {
  container.replaceChildren();
  let order = 0;

  if ((content || []).some((item) => typeof item === "object")) {
    content.forEach((section) => {
      const heading = document.createElement("h3");
      heading.style.setProperty("--delay", `${order * 90 + 160}ms`);
      if (section.exclusive) {
        const kind = document.createElement("span");
        kind.className = "task-kind";
        kind.textContent = "專屬任務";
        heading.append(kind, document.createTextNode(`-${section.title}`));
      } else {
        heading.textContent = section.title;
      }
      heading.classList.toggle("is-target", section.title === focusTitle);
      container.appendChild(heading);
      order += 1;
      section.text.forEach((line) => {
        const paragraph = document.createElement("p");
        paragraph.style.setProperty("--delay", `${order * 90 + 160}ms`);
        paragraph.textContent = line;
        paragraph.classList.toggle("is-target", section.title === focusTitle);
        container.appendChild(paragraph);
        order += 1;
      });
    });
  } else {
    (content || []).forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.style.setProperty("--delay", `${order * 90 + 160}ms`);
      paragraph.textContent = line;
      container.appendChild(paragraph);
      order += 1;
    });
  }
  dialog.showModal();
}

function renderPuzzleTrees() {
  puzzleTrees.forEach((tree) => {
    const section = document.createElement("section");
    const toggle = document.createElement("button");
    const type = document.createElement("span");
    const name = document.createElement("strong");
    const mark = document.createElement("span");
    const panel = document.createElement("div");
    const canvas = document.createElement("div");

    section.className = `puzzle-tree puzzle-tree--${tree.id}`;
    toggle.className = "puzzle-tree-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    type.textContent = tree.type;
    name.textContent = tree.name;
    mark.className = "puzzle-tree-mark";
    mark.textContent = "+";
    mark.setAttribute("aria-hidden", "true");
    panel.className = "puzzle-tree-panel drag-viewport";
    panel.hidden = true;
    canvas.className = "puzzle-tree-canvas";

    renderTreeCanvas(tree, canvas);

    toggle.append(type, name, mark);
    panel.appendChild(canvas);
    section.append(toggle, panel);
    puzzleGrid.appendChild(section);

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mark.textContent = open ? "+" : "−";
      panel.hidden = open;
      section.classList.toggle("is-open", !open);
    });
  });
}

function renderTreeCanvas(tree, canvas) {
  canvas.replaceChildren();
  tree.questions.filter((question) => !(question.requires || []).length).forEach((question) => {
    canvas.appendChild(createQuestionNode(tree, question));
  });
}

function createQuestionNode(tree, question, nested = false) {
  const article = document.createElement("article");
  const prompt = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const status = document.createElement("p");
  const branches = document.createElement("div");

  article.className = "puzzle-question";
  article.classList.toggle("puzzle-question--nested", nested);
  article.dataset.tree = tree.id;
  article.dataset.question = question.id;
  article.style.setProperty("--indent", `${(question.level ?? 0) * 42}px`);
  prompt.className = "puzzle-question-text";
  form.className = "puzzle-form";
  input.type = "text";
  input.placeholder = "回答";
  input.autocomplete = "off";
  button.type = "submit";
  button.textContent = "回答";
  status.className = "puzzle-status";
  status.setAttribute("aria-live", "polite");
  branches.className = "puzzle-branches";
  const available = questionIsUnlocked(tree, question);
  const feedbackKey = `${tree.id}:${question.id}`;
  const feedback = puzzleFeedback.get(feedbackKey);
  article.classList.toggle("is-locked", !available);
  input.disabled = !available || feedback?.type === "correct";
  button.disabled = !available || feedback?.type === "correct";
  if (feedback) {
    status.textContent = feedback.text;
    status.classList.add(`is-${feedback.type}`);
  }

  (question.text || []).forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    prompt.appendChild(paragraph);
  });

  question.branches.forEach((branch) => {
    const branchNode = createBranchNode(tree, branch);
    if (branchNode) branches.appendChild(branchNode);
  });
  branches.hidden = branches.childElementCount === 0;

  input.addEventListener("input", () => {
    form.classList.remove("is-wrong");
    if (puzzleFeedback.get(feedbackKey)?.type === "wrong") {
      puzzleFeedback.delete(feedbackKey);
      status.textContent = "";
      status.classList.remove("is-wrong");
    }
  });
  form.append(input, button);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const matched = question.branches.filter((branch) => branchMatches(input.value, branch));
    const newlyUnlocked = matched.filter((branch) => !unlockedBranches.has(branchKey(tree, branch)));

    if (matched.length === 0) {
      const hint = question.hint || "提示 再仔細閱讀文本....";
      puzzleFeedback.set(feedbackKey, { type: "wrong", text: hint });
      status.textContent = hint;
      status.classList.remove("is-correct");
      status.classList.add("is-wrong");
      form.classList.remove("is-wrong");
      void form.offsetWidth;
      form.classList.add("is-wrong");
      return;
    }

    matched.forEach((branch) => {
      unlockedBranches.add(branchKey(tree, branch));
      applyBranchReward(tree, branch);
    });
    puzzleFeedback.set(feedbackKey, { type: "correct", text: "驗證通過" });
    const stageRewards = collectNewStageRewards(tree);
    const canvas = puzzleGrid.querySelector(`.puzzle-tree--${tree.id} .puzzle-tree-canvas`);
    if (canvas) renderTreeCanvas(tree, canvas);
    showBranchRewards([...newlyUnlocked, ...stageRewards], tree);
  });

  article.append(prompt, form, status, branches);
  return article;
}

function createBranchNode(tree, branch) {
  const unlocked = unlockedBranches.has(branchKey(tree, branch));

  if (!unlocked) return null;

  if (branch.nextQuestions) {
    const path = document.createElement("div");
    const split = document.createElement("div");
    path.className = "puzzle-split-path";
    split.className = "puzzle-split";
    branch.nextQuestions.forEach((questionId) => {
      const nextQuestion = tree.questions.find((question) => question.id === questionId);
      if (nextQuestion && questionIsUnlocked(tree, nextQuestion)) {
        split.appendChild(createQuestionNode(tree, nextQuestion, true));
      }
    });
    if (split.childElementCount === 0) return null;
    path.appendChild(split);

    if ((branch.mergeRequires || []).length) {
      const gate = document.createElement("div");
      const complete = branch.mergeRequires.every((branchId) =>
        unlockedBranches.has(branchKey(tree, { id: branchId }))
      );
      gate.className = "puzzle-merge-gate";
      gate.classList.toggle("is-lit", complete);
      if (complete && (branch.mergeQuestions || []).length) {
        const nextSplit = document.createElement("div");
        nextSplit.className = "puzzle-split puzzle-split--next";
        branch.mergeQuestions.forEach((questionId) => {
          const nextQuestion = tree.questions.find((question) => question.id === questionId);
          if (nextQuestion && questionIsUnlocked(tree, nextQuestion)) {
            nextSplit.appendChild(createQuestionNode(tree, nextQuestion, true));
          }
        });
        if (nextSplit.childElementCount > 0) {
          path.classList.add("has-open-gate");
          gate.classList.add("is-open");
          gate.appendChild(nextSplit);
        }
      }
      path.appendChild(gate);
    }
    return path;
  }

  if (branch.nextQuestion) {
    const nextQuestion = tree.questions.find((question) => question.id === branch.nextQuestion);
    if (nextQuestion && questionIsUnlocked(tree, nextQuestion)) {
      return createQuestionNode(tree, nextQuestion, true);
    }
  }

  if (!branch.name) return null;

  const node = document.createElement("button");

  node.className = "puzzle-branch";
  node.type = "button";
  node.dataset.tree = tree.id;
  node.dataset.branch = branch.id;
  node.classList.add("is-lit");
  node.textContent = branch.name || "";
  node.addEventListener("click", () => showBranchRewards([branch], tree));
  return node;
}

function questionIsUnlocked(tree, question) {
  return (question.requires || []).every((branchId) => unlockedBranches.has(branchKey(tree, { id: branchId })));
}

function collectNewStageRewards(tree) {
  return (tree.stageRewards || []).flatMap((stage) => {
    const key = `${tree.id}:${stage.id}`;
    const complete = stage.requires.every((branchId) =>
      unlockedBranches.has(branchKey(tree, { id: branchId }))
    );
    if (!complete || announcedStageRewards.has(key)) return [];
    announcedStageRewards.add(key);
    return [{ reward: stage.reward }];
  });
}

function showBranchRewards(branches, tree) {
  const rewards = branches.map((branch) => branch.reward).filter((reward) => reward && (reward.text || []).length);
  if (rewards.length === 0) return;

  rewardModal.dataset.theme = tree?.id || "";
  rewardType.textContent = rewards.some((reward) => reward.type === "故事文本") ? "你已獲得新文本" : "提示";
  rewardText.replaceChildren();
  rewards.forEach((reward) => {
    reward.text.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      rewardText.appendChild(paragraph);
    });
  });
  rewardModal.showModal();
}

function applyBranchReward(tree, branch) {
  if (branch.reward?.type !== "故事文本") return;
  const story = stories.find((item) => item.theme === tree.id);
  if (!story) return;
  branch.reward.text.forEach((line) => {
    if (!story.text.includes(line)) story.text.push(line);
  });
}

function restoreUnlockedStoryTexts() {
  puzzleTrees.forEach((tree) => {
    tree.questions.forEach((question) => {
      question.branches.forEach((branch) => {
        if (unlockedBranches.has(branchKey(tree, branch))) applyBranchReward(tree, branch);
      });
    });
  });
}

function branchMatches(value, branch) {
  const input = normalizeAnswer(value);
  if (!input) return false;

  const standards = (branch.answers || []).map(normalizeAnswer).filter(Boolean);
  if (standards.includes(input)) return true;

  const threshold = branch.threshold ?? 0.72;
  const similar = standards.some((answer) => {
    const required = Math.min(answer.length, input.length) <= 3 ? Math.max(threshold, 0.86) : threshold;
    return editSimilarity(input, answer) >= required || bigramSimilarity(input, answer) >= Math.max(0.58, required - 0.12);
  });
  if (similar) return true;

  const keywords = (branch.keywords || []).map(normalizeAnswer).filter(Boolean);
  if (keywords.length === 0) return false;
  const matchedKeywords = keywords.filter((keyword) => input.includes(keyword)).length;
  return matchedKeywords / keywords.length >= (branch.keywordRatio ?? 0.67);
}

function normalizeAnswer(value) {
  return String(value).normalize("NFKC").trim().toLocaleLowerCase("zh-Hant").replace(/[^\p{L}\p{N}]/gu, "");
}

function editSimilarity(left, right) {
  if (left === right) return 1;
  const rows = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i += 1) {
    let previous = rows[0];
    rows[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const current = rows[j];
      rows[j] = Math.min(rows[j] + 1, rows[j - 1] + 1, previous + (left[i - 1] === right[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return 1 - rows[right.length] / Math.max(left.length, right.length);
}

function bigramSimilarity(left, right) {
  if (left.length < 2 || right.length < 2) return 0;
  const leftPairs = new Map();
  for (let i = 0; i < left.length - 1; i += 1) {
    const pair = left.slice(i, i + 2);
    leftPairs.set(pair, (leftPairs.get(pair) || 0) + 1);
  }
  let overlap = 0;
  for (let i = 0; i < right.length - 1; i += 1) {
    const pair = right.slice(i, i + 2);
    const count = leftPairs.get(pair) || 0;
    if (count > 0) {
      overlap += 1;
      leftPairs.set(pair, count - 1);
    }
  }
  return (2 * overlap) / (left.length + right.length - 2);
}

function branchKey(tree, branch) {
  return `${tree.id}:${branch.id}`;
}

function enableViewSwitching() {
  const tabs = document.querySelectorAll("[data-view]");
  const panels = document.querySelectorAll("[data-view-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === tab.dataset.view));
      if (modal.open) modal.close();
      if (rewardModal.open) rewardModal.close();
      if (characterModal.open) characterModal.close();
      if (characterPersonModal.open) characterPersonModal.close();
      if (characterStoryModal.open) characterStoryModal.close();
      clearTheme();
    });
  });
}

function enableDragging() {
  document.querySelectorAll(".drag-viewport").forEach((viewport) => {
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;

    viewport.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, input, form")) return;
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startScrollLeft = viewport.scrollLeft;
      startScrollTop = viewport.scrollTop;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      viewport.scrollLeft = startScrollLeft - (event.clientX - startX);
      if (!viewport.classList.contains("puzzle-tree-panel")) {
        viewport.scrollTop = startScrollTop - (event.clientY - startY);
      }
    });

    const stopDragging = (event) => {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };

    viewport.addEventListener("pointerup", stopDragging);
    viewport.addEventListener("pointercancel", stopDragging);
  });
}
