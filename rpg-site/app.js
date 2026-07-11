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
    text: [
      "詛咒 阿茲海默",
      "「世人只知爾人 摘星逐日 君王氣貌。他卻夜半輾轉反側；畫盡罄竹。癡尋不至彼人笑顏 」"
    ]
  },
  {
    id: "zhiyinling-taimei",
    group: "長生屬",
    name: "芷茵靈・泰枚",
    visual: "assets/characters/zhiyinling-taimei.png",
    motion: "fog",
    text: [
      "醫生 詛咒 抑鬱症",
      "『蒙上一層霧 我無法…我真的無法，我的燈塔身在何處』"
    ]
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
            text: ["1 了解梧漪士所追求的事物"]
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
    text: [
      "「此生長居天際，但僅被困無風之地」",
      "詛咒：被害妄想"
    ]
  },
  {
    id: "agongliu-qi",
    group: "長生屬",
    name: "阿宮溜・柒",
    visual: "assets/characters/agongliu-qi.png",
    motion: "eclipse",
    text: [
      "「明天的太陽永不升起 昨夜的月亮我看不見」",
      "詛咒 自閉症"
    ]
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
const achievements = [];
const puzzleTrees = stories.map((story) => ({
  id: story.theme,
  type: story.type,
  name: story.name,
  questions: []
}));
// question: { text: [], branches: [{ id, name, answers, keywords, threshold, keywordRatio, reward: { type, text: [] } }] }

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
const unlockedBranches = new Set();
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
renderCollection(achievements, achievementGrid);
renderPuzzleTrees();
enableViewSwitching();
enableDragging();

document.querySelector("[data-close]").addEventListener("click", () => modal.close());
document.querySelector("[data-reward-close]").addEventListener("click", () => rewardModal.close());
document.querySelector("[data-character-close]").addEventListener("click", () => characterModal.close());
document.querySelector("[data-person-close]").addEventListener("click", () => characterPersonModal.close());
document.querySelector("[data-story-close]").addEventListener("click", () => characterStoryModal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

rewardModal.addEventListener("click", (event) => {
  if (event.target === rewardModal) rewardModal.close();
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

  story.text.forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    modalText.appendChild(paragraph);
  });

  modal.showModal();
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

function openCharacterEntry(dialog, container, content) {
  container.replaceChildren();
  let order = 0;

  if ((content || []).some((item) => typeof item === "object")) {
    content.forEach((section) => {
      const heading = document.createElement("h3");
      heading.style.setProperty("--delay", `${order * 90 + 160}ms`);
      heading.textContent = section.title;
      container.appendChild(heading);
      order += 1;
      section.text.forEach((line) => {
        const paragraph = document.createElement("p");
        paragraph.style.setProperty("--delay", `${order * 90 + 160}ms`);
        paragraph.textContent = line;
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
    panel.className = "puzzle-tree-panel";
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
  article.classList.toggle("is-locked", !available);
  input.disabled = !available;
  button.disabled = !available;

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

  input.addEventListener("input", () => form.classList.remove("is-wrong"));
  form.append(input, button);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const matched = question.branches.filter((branch) => branchMatches(input.value, branch));
    const newlyUnlocked = matched.filter((branch) => !unlockedBranches.has(branchKey(tree, branch)));

    if (matched.length === 0) {
      status.textContent = "";
      form.classList.remove("is-wrong");
      void form.offsetWidth;
      form.classList.add("is-wrong");
      return;
    }

    matched.forEach((branch) => {
      unlockedBranches.add(branchKey(tree, branch));
      applyBranchReward(tree, branch);
    });
    status.textContent = "回答正確";
    const canvas = puzzleGrid.querySelector(`.puzzle-tree--${tree.id} .puzzle-tree-canvas`);
    if (canvas) renderTreeCanvas(tree, canvas);
    showBranchRewards(newlyUnlocked);
  });

  article.append(prompt, form, status, branches);
  return article;
}

function createBranchNode(tree, branch) {
  const unlocked = unlockedBranches.has(branchKey(tree, branch));

  if (!unlocked) return null;

  if (branch.nextQuestion) {
    const nextQuestion = tree.questions.find((question) => question.id === branch.nextQuestion);
    if (nextQuestion) return createQuestionNode(tree, nextQuestion, true);
  }

  const node = document.createElement("button");

  node.className = "puzzle-branch";
  node.type = "button";
  node.dataset.tree = tree.id;
  node.dataset.branch = branch.id;
  node.classList.add("is-lit");
  node.textContent = branch.name || "";
  node.addEventListener("click", () => showBranchRewards([branch]));
  return node;
}

function questionIsUnlocked(tree, question) {
  return (question.requires || []).every((branchId) => unlockedBranches.has(branchKey(tree, { id: branchId })));
}

function showBranchRewards(branches) {
  const rewards = branches.map((branch) => branch.reward).filter((reward) => reward && (reward.text || []).length);
  if (rewards.length === 0) return;

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
      viewport.scrollTop = startScrollTop - (event.clientY - startY);
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
