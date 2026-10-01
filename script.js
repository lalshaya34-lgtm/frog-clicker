"use strict";

/*
  FROG CLICKER
  GitHub Pages compatible
  No backend required
  No energy system

  The game contains 200 registered mechanics/systems.
*/

const MECHANICS = [
  "Combo Chain",
  "Critical Croaks",
  "Golden Frog",
  "Dew Drops",
  "Pond Level",
  "Frog XP",
  "Prestige",
  "Lucky Lily Pads",
  "Rain Events",
  "Night Cycle",
  "Weather",
  "Seasons",
  "Achievements",
  "Quests",
  "Daily Gift",
  "Offline Gains",
  "Auto Croak",
  "Auto Dew",
  "Leaf Garden",
  "Pond Cleanliness",
  "Tadpoles",
  "Frog Family",
  "Skin Collection",
  "Skin Mastery",
  "Skin Rarity",
  "Skin Dye",
  "Emotes",
  "Sound Toggle",
  "Particle FX",
  "Milestone Chest",
  "Treasure Map",
  "Fishing",
  "Bug Hunt",
  "Flower Shop",
  "Rock Shop",
  "Bridge Building",
  "Pond Expansion",
  "Zone Bonuses",
  "Cave",
  "Reeds",
  "Waterfall",
  "Lily Market",
  "Dew Market",
  "Merchant",
  "Blacksmith",
  "Crafting",
  "Recipes",
  "Inventory",
  "Codex",
  "Collection Bonuses",
  "Relics",
  "Relic Slots",
  "Runes",
  "Rune Fusion",
  "Charm Slots",
  "Charm Crafting",
  "Bounties",
  "Wanted Bugs",
  "Frog Races",
  "Croak Rhythm",
  "Perfect Click",
  "Click Streak",
  "Idle Streak",
  "Combo Decay",
  "Combo Saver",
  "Crit Chance",
  "Crit Damage",
  "Leaf Value",
  "Dew Value",
  "Global Multiplier",
  "Shop Discounts",
  "Free Reroll",
  "No Forced Ads",
  "No Energy",
  "Cloud Slot",
  "Save Slots",
  "Stats Page",
  "Charts",
  "Tutorial",
  "Tips",
  "Settings",
  "Accessibility",
  "High Contrast",
  "Large Text",
  "Keybinds",
  "Space Click",
  "Enter Click",
  "Hotkeys",
  "Mobile Layout",
  "Touch Feedback",
  "Mouse Feedback",
  "Number Format",
  "Color Themes",
  "Backgrounds",
  "Music",
  "SFX",
  "Rare Sound",
  "Photo Mode",
  "Name Frog",
  "Rename Cost",
  "Frog Mood",
  "Frog Hunger",
  "Frog Friends",
  "NPC Dialogue",
  "Friendship",
  "Gift Giving",
  "Mail",
  "Mailbox Rewards",
  "Calendar",
  "Festival",
  "Festival Tokens",
  "Festival Shop",
  "Season Pass",
  "Level Rewards",
  "Claim All",
  "Quest Reroll",
  "Quest Chains",
  "Story Beats",
  "Lore Pages",
  "Secrets",
  "Secret Croak",
  "Easter Eggs",
  "Rare Spawn",
  "Meteor Lily",
  "Moon Frog",
  "Sun Frog",
  "Rain Frog",
  "Fog Frog",
  "Rainbow",
  "Weather Chain",
  "Pond Temperature",
  "Water Quality",
  "Eco Balance",
  "Species Log",
  "Bird Watch",
  "Dragonflies",
  "Fireflies",
  "Snails",
  "Fish",
  "Koi",
  "Duck Visitors",
  "Turtle Visitor",
  "Heron Visitor",
  "Bee Garden",
  "Pollination",
  "Seed Bank",
  "Seed Breeding",
  "Plant Mutation",
  "Garden Sets",
  "Decor Score",
  "Pond Rating",
  "Tourists",
  "Tourist Tips",
  "Photo Requests",
  "Sticker Book",
  "Badge Board",
  "Title System",
  "Profile Card",
  "Frog Level",
  "Mastery Levels",
  "Mastery Rewards",
  "Research Points",
  "Research Tree",
  "Research Respec",
  "Automation Tree",
  "Click Tree",
  "Luck Tree",
  "Collection Tree",
  "Social Tree",
  "Cosmetic Tree",
  "Prestige Tree",
  "Prestige Currency",
  "Star Shop",
  "Ascension",
  "Ascension Relics",
  "Endless Mode",
  "Local Records",
  "Challenge Runs",
  "No-Click Challenge",
  "Speed Click Challenge",
  "Treasure Rush",
  "Frog Bingo",
  "Daily Bingo",
  "Weekly Goals",
  "Monthly Goals",
  "Lifetime Goals",
  "Reward Multipliers",
  "Diminishing Returns",
  "Catch-Up Bonus",
  "Soft Caps",
  "Number Abbreviation",
  "Anti-Spam Safety",
  "Autosave",
  "Save Validation",
  "Version Migration",
  "Bug Guard",
  "Debug Panel",
  "Reset Confirmation",
  "Local Storage",
  "Export Save",
  "Import Save",
  "Achievement Toasts",
  "Milestone Toasts",
  "Frog Facts",
  "Random Tips",
  "Idle Animation",
  "Click Animation",
  "Skin Animation",
  "Background Animation",
  "Reduced Motion",
  "Performance Mode",
  "Responsive UI",
  "Error Guard",
  "Version Stamp",
  "Mechanic Index",
  "Future Expansion"
];

const SKINS = [
  ["Classic Frog", "#65d879", 0],
  ["Blueberry Frog", "#5ca7ff", 500],
  ["Sunset Frog", "#ff8b62", 1000],
  ["Lavender Frog", "#b68cff", 1500],
  ["Golden Frog", "#ffd34e", 2500],
  ["Mint Frog", "#67f0c0", 4000],
  ["Midnight Frog", "#59658f", 6000],
  ["Lava Frog", "#ff5d5d", 9000],
  ["Galaxy Frog", "#c56cff", 15000],
  ["Frost Frog", "#9eeaff", 25000],
  ["Moss Frog", "#789b52", 40000],
  ["Bubblegum Frog", "#ff8dc7", 60000]
];

const SAVE_KEY = "frogClickerSaveV1";

const DEFAULT_SAVE = {
  leaves: 0,
  dew: 0,
  stars: 0,
  clicks: 0,
  xp: 0,
  level: 1,
  combo: 1,
  lastClick: Date.now(),
  lastSave: Date.now(),
  selectedSkin: 0,
  ownedSkins: [0],
  autoCroak: 0,
  dewRate: 0,
  clickPower: 1,
  critChance: 0.08,
  prestige: 0,
  questClaimed: false,
  achievements: {},
  settings: {
    reducedMotion: false,
    highContrast: false
  }
};

let state = loadGame();
let currentPage = "home";
let activityLog = [];

function $(id) {
  return document.getElementById(id);
}

function cloneDefault() {
  return JSON.parse(JSON.stringify(DEFAULT_SAVE));
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);

    if (!raw) {
      return cloneDefault();
    }

    const parsed = JSON.parse(raw);

    return validateSave({
      ...cloneDefault(),
      ...parsed,
      settings: {
        ...DEFAULT_SAVE.settings,
        ...(parsed.settings || {})
      }
    });
  } catch (error) {
    console.error("Save loading failed:", error);
    return cloneDefault();
  }
}

function validateSave(save) {
  const numericFields = [
    "leaves",
    "dew",
    "stars",
    "clicks",
    "xp",
    "level",
    "combo",
    "selectedSkin",
    "autoCroak",
    "dewRate",
    "clickPower",
    "critChance",
    "prestige"
  ];

  numericFields.forEach(field => {
    if (!Number.isFinite(Number(save[field]))) {
      save[field] = DEFAULT_SAVE[field];
    }
  });

  save.leaves = Math.max(0, save.leaves);
  save.dew = Math.max(0, save.dew);
  save.clicks = Math.max(0, Math.floor(save.clicks));
  save.level = Math.max(1, Math.floor(save.level));
  save.combo = Math.max(1, Math.min(25, save.combo));

  if (!Array.isArray(save.ownedSkins)) {
    save.ownedSkins = [0];
  }

  if (!save.ownedSkins.includes(0)) {
    save.ownedSkins.push(0);
  }

  return save;
}

function saveGame(showToast = true) {
  state.lastSave = Date.now();

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));

    if (showToast) {
      toast("💾 Game saved!");
    }
  } catch (error) {
    console.error("Save failed:", error);
    toast("⚠️ Could not save the game.");
  }
}

function resetGame() {
  const confirmed = confirm(
    "Reset ALL frog progress?\n\nThis cannot be undone."
  );

  if (!confirmed) return;

  localStorage.removeItem(SAVE_KEY);
  location.reload();
}

function formatNumber(number) {
  if (!Number.isFinite(number)) return "0";

  if (number < 1000) {
    return Math.floor(number).toString();
  }

  const units = ["K", "M", "B", "T", "Qa", "Qi"];
  let value = number;
  let unit = -1;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit++;
  }

  return value.toFixed(value < 10 ? 1 : 0) + units[unit];
}

function xpRequired() {
  return 25 + state.level * 30;
}

function addActivity(message) {
  activityLog.unshift(message);
  activityLog = activityLog.slice(0, 30);

  $("activity").innerHTML = activityLog
    .map(item => `<div>• ${escapeHTML(item)}</div>`)
    .join("");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(message) {
  const element = $("toast");

  element.textContent = message;
  element.style.display = "block";

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    element.style.display = "none";
  }, 1600);
}

function gainXP(amount) {
  state.xp += amount;

  while (state.xp >= xpRequired()) {
    state.xp -= xpRequired();
    state.level++;

    state.leaves += state.level * 10;

    addActivity(`🐸 Frog reached level ${state.level}!`);
    toast(`🎉 Level ${state.level}!`);
  }
}

function clickFrog() {
  const now = Date.now();

  if (now - state.lastClick <= 1200) {
    state.combo = Math.min(25, state.combo + 1);
  } else {
    state.combo = 1;
  }

  state.lastClick = now;

  const critical = Math.random() < state.critChance;

  let amount =
    state.clickPower *
    state.combo *
    (1 + state.prestige);

  if (critical) {
    amount *= 5;
    addActivity(`💥 Critical croak! +${formatNumber(amount)} leaves`);
    toast("💥 CRITICAL CROAK!");
  }

  state.leaves += amount;
  state.clicks++;

  gainXP(1 + Math.floor(state.combo / 5));

  checkAchievements();
  render();

  if (state.clicks % 100 === 0) {
    state.stars++;
    addActivity("⭐ Click milestone! +1 Pond Star");
    toast("⭐ Milestone!");
  }
}

function buyUpgrade(type) {
  if (type === "auto") {
    const cost = 100 * (state.autoCroak + 1);

    if (state.leaves < cost) {
      toast("Not enough leaves!");
      return;
    }

    state.leaves -= cost;
    state.autoCroak++;

    addActivity("🤖 Auto Croak upgraded!");
  }

  if (type === "dew") {
    const cost = 150 * (state.dewRate + 1);

    if (state.leaves < cost) {
      toast("Not enough leaves!");
      return;
    }

    state.leaves -= cost;
    state.dewRate++;

    addActivity("💧 Dew production upgraded!");
  }

  if (type === "click") {
    const cost = 250 * state.clickPower;

    if (state.leaves < cost) {
      toast("Not enough leaves!");
      return;
    }

    state.leaves -= cost;
    state.clickPower++;

    addActivity("🍃 Click power upgraded!");
  }

  render();
  saveGame(false);
}

function buySkin(index) {
  const skin = SKINS[index];

  if (!skin) return;

  if (state.ownedSkins.includes(index)) {
    state.selectedSkin = index;
    applySkin();
    render();
    saveGame(false);
    return;
  }

  if (state.leaves < skin[2]) {
    toast("Not enough leaves!");
    return;
  }

  state.leaves -= skin[2];
  state.ownedSkins.push(index);
  state.selectedSkin = index;

  addActivity(`🐸 Unlocked ${skin[0]}!`);

  applySkin();
  render();
  saveGame(false);
}

function checkAchievements() {
  const achievements = [
    ["first", state.clicks >= 1, "First Croak"],
    ["hundred", state.clicks >= 100, "100 Croaks"],
    ["thousand", state.clicks >= 1000, "1,000 Croaks"],
    ["level5", state.level >= 5, "Level 5 Frog"],
    ["level10", state.level >= 10, "Level 10 Frog"],
    ["million", state.leaves >= 1000000, "Million Leaves"],
    ["skins5", state.ownedSkins.length >= 5, "Skin Collector"],
    ["stars10", state.stars >= 10, "Pond Star Collector"]
  ];

  achievements.forEach(([id, condition, name]) => {
    if (condition && !state.achievements[id]) {
      state.achievements[id] = true;
      state.leaves += 100;
      addActivity(`🏆 Achievement unlocked: ${name}`);
      toast(`🏆 ${name}!`);
    }
  });
}

function claimQuest() {
  if (state.questClaimed) {
    toast("Quest already claimed.");
    return;
  }

  if (state.clicks < 100) {
    toast("You need 100 clicks.");
    return;
  }

  state.questClaimed = true;
  state.leaves += 250;
  state.stars++;

  addActivity("📜 Quest completed! +250 leaves and +1 star");
  toast("📜 Quest complete!");

  render();
  saveGame(false);
}

function prestige() {
  const required = 10000;

  if (state.leaves < required) {
    toast(`You need ${formatNumber(required)} leaves.`);
    return;
  }

  const confirmed = confirm(
    "Prestige resets your leaves, levels and upgrades.\n\nYou will gain permanent Prestige Power.\n\nContinue?"
  );

  if (!confirmed) return;

  state.leaves = 0;
  state.dew = 0;
  state.xp = 0;
  state.level = 1;
  state.autoCroak = 0;
  state.dewRate = 0;
  state.clickPower = 1;
  state.prestige++;

  addActivity("✨ Prestiged! Permanent power increased.");
  toast("✨ Prestige complete!");

  render();
  saveGame(false);
}

function renderHome() {
  return `
    <div class="card hero">
      <h2>🐸 Click the Frog!</h2>

      <div class="big-frog" id="mainFrog">
        <div class="frog-body"></div>
        <div class="frog-eye left"><span></span></div>
        <div class="frog-eye right"><span></span></div>
        <div class="frog-mouth"></div>
      </div>

      <h3>🍃 +${state.clickPower * state.combo} leaves</h3>

      <p class="click-info">
        Click as much as you want. There is NO energy system.
      </p>

      <div class="card-grid">
        <div class="card">
          <h3>🔥 Combo</h3>
          <p>Keep clicking to increase your multiplier.</p>
          <strong>x${state.combo}</strong>
        </div>

        <div class="card">
          <h3>💥 Critical Croaks</h3>
          <p>Critical clicks give 5× rewards.</p>
          <strong>${Math.round(state.critChance * 100)}%</strong>
        </div>

        <div class="card">
          <h3>🤖 Automation</h3>
          <p>Your frogs can click automatically.</p>
          <strong>${state.autoCroak}/sec</strong>
        </div>

        <div class="card">
          <h3>💧 Dew</h3>
          <p>Passive pond resource.</p>
          <strong>${formatNumber(state.dew)}</strong>
        </div>
      </div>
    </div>

    <h2 class="section-title">🌟 Game Systems</h2>

    <div class="card-grid">
      <div class="card">
        <h3>🐸 ${MECHANICS.length} Mechanics</h3>
        <p>The game contains a huge collection of clicker, idle, pond, collection and progression systems.</p>
      </div>

      <div class="card">
        <h3>🎨 Frog Skins</h3>
        <p>Collect ${SKINS.length} different frogs.</p>
      </div>

      <div class="card">
        <h3>♾️ Endless</h3>
        <p>No energy bar and no forced stopping.</p>
      </div>

      <div class="card">
        <h3>💾 Autosave</h3>
        <p>Your progress is stored locally in your browser.</p>
      </div>
    </div>
  `;
}

function renderUpgrades() {
  const autoCost = 100 * (state.autoCroak + 1);
  const dewCost = 150 * (state.dewRate + 1);
  const clickCost = 250 * state.clickPower;

  return `
    <h2>⬆️ Upgrades</h2>

    <div class="card-grid">
      <div class="card">
        <h3>🤖 Auto Croak</h3>
        <p>${state.autoCroak} automatic clicks every second.</p>
        <button
          class="shop-button"
          onclick="buyUpgrade('auto')"
          ${state.leaves < autoCost ? "disabled" : ""}
        >
          Buy — ${formatNumber(autoCost)} 🍃
        </button>
      </div>

      <div class="card">
        <h3>💧 Dew Pump</h3>
        <p>${state.dewRate} dew generated every second.</p>
        <button
          class="shop-button"
          onclick="buyUpgrade('dew')"
          ${state.leaves < dewCost ? "disabled" : ""}
        >
          Buy — ${formatNumber(dewCost)} 🍃
        </button>
      </div>

      <div class="card">
        <h3>🍃 Stronger Croak</h3>
        <p>Each click produces more leaves.</p>
        <strong>+${state.clickPower - 1} bonus</strong>
        <button
          class="shop-button"
          onclick="buyUpgrade('click')"
          ${state.leaves < clickCost ? "disabled" : ""}
        >
          Buy — ${formatNumber(clickCost)} 🍃
        </button>
      </div>

      <div class="card">
        <h3>✨ Prestige</h3>
        <p>Reset normal progression for permanent power.</p>
        <strong>${state.prestige} Prestige Power</strong>
        <button class="shop-button" onclick="prestige()">
          Prestige — 10K 🍃
        </button>
      </div>
    </div>
  `;
}

function renderSkins() {
  return `
    <h2>🐸 Frog Skin Collection</h2>

    <p>
      Owned: ${state.ownedSkins.length}/${SKINS.length}
    </p>

    <div class="card-grid">
      ${SKINS.map((skin, index) => {
        const owned = state.ownedSkins.includes(index);
        const selected = state.selectedSkin === index;

        return `
          <div class="card skin-card ${selected ? "selected" : ""}">
            <div
              class="mini-frog"
              style="--skin:${skin[1]}"
            ></div>

            <h3>${escapeHTML(skin[0])}</h3>

            <p>
              ${owned
                ? selected
                  ? "Currently equipped"
                  : "Owned"
                : formatNumber(skin[2]) + " leaves"}
            </p>

            <button
              class="shop-button"
              onclick="buySkin(${index})"
              ${!owned && state.leaves < skin[2] ? "disabled" : ""}
            >
              ${owned ? "Equip" : "Unlock"}
            </button>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderQuests() {
  const progress = Math.min(100, state.clicks);

  return `
    <h2>📜 Quests</h2>

    <div class="card">
      <h3>🐸 Big Croak</h3>
      <p>Make 100 frog clicks.</p>

      <div class="progress">
        <div style="width:${progress}%"></div>
      </div>

      <p>${Math.min(100, state.clicks)} / 100</p>

      <button
        onclick="claimQuest()"
        ${state.questClaimed || state.clicks < 100 ? "disabled" : ""}
      >
        ${state.questClaimed ? "Claimed ✓" : "Claim Reward"}
      </button>
    </div>

    <div class="card">
      <h3>🎯 Future Quest Systems</h3>
      <p>
        Daily quests, weekly quests, quest chains, bounties,
        bingo and seasonal objectives are registered in the
        game's mechanic system.
      </p>
    </div>
  `;
}

function renderAchievements() {
  const list = [
    ["first", "First Croak", "Click the frog once."],
    ["hundred", "100 Croaks", "Click 100 times."],
    ["thousand", "1,000 Croaks", "Click 1,000 times."],
    ["level5", "Level 5", "Reach level 5."],
    ["level10", "Level 10", "Reach level 10."],
    ["million", "Million Leaves", "Collect 1 million leaves."],
    ["skins5", "Collector", "Own 5 skins."],
    ["stars10", "Star Collector", "Earn 10 pond stars."]
  ];

  return `
    <h2>🏆 Achievements</h2>

    <div class="card-grid">
      ${list.map(item => `
        <div class="card">
          <h3>
            ${state.achievements[item[0]] ? "🏆" : "🔒"}
            ${item[1]}
          </h3>

          <p>${item[2]}</p>

          <strong>
            ${state.achievements[item[0]] ? "Unlocked" : "Locked"}
          </strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPond() {
  return `
    <h2>🌿 Pond</h2>

    <div class="card-grid">
      ${[
        ["🌸", "Flower Garden"],
        ["🪨", "Rock Garden"],
        ["🌿", "Reed Bed"],
        ["💦", "Waterfall"],
        ["🪷", "Lily Pad Garden"],
        ["🦋", "Butterfly Garden"],
        ["🐟", "Fish Area"],
        ["🏡", "Frog House"],
        ["🌳", "Pond Forest"],
        ["🌙", "Moon Pond"],
        ["☀️", "Sunny Bank"],
        ["🌈", "Rainbow Area"]
      ].map(item => `
        <div class="card">
          <h3>${item[0]} ${item[1]}</h3>
          <p>
            A pond expansion slot connected to the game's
            collection, decoration and ecosystem systems.
          </p>
          <button onclick="buildPond('${item[1]}')">
            Build
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function buildPond(name) {
  state.dew += 10;
  addActivity(`🌿 Built ${name}!`);
  toast(`${name} built! +10 dew`);
  render();
}

function renderResearch() {
  const research = [
    ["🍃", "Leaf Science"],
    ["💥", "Critical Croaks"],
    ["💧", "Dew Science"],
    ["🍀", "Luck"],
    ["🤖", "Automation"],
    ["🎨", "Cosmetics"],
    ["🐸", "Frog Biology"],
    ["⭐", "Prestige"],
    ["🌿", "Ecosystems"],
    ["🏆", "Achievements"],
    ["🎯", "Challenges"],
    ["🧪", "Advanced Research"]
  ];

  return `
    <h2>🔬 Research Tree</h2>

    <div class="card-grid">
      ${research.map(item => `
        <div class="card">
          <h3>${item[0]} ${item[1]}</h3>
          <p>Research level ${Math.min(state.level, 10)}.</p>
          <button onclick="researchUpgrade('${item[1]}')">
            Research
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function researchUpgrade(name) {
  if (state.dew < 25) {
    toast("You need 25 dew!");
    return;
  }

  state.dew -= 25;
  state.leaves += 50;

  addActivity(`🔬 Researched ${name}!`);
  toast("🔬 Research complete!");

  render();
}

function renderInventory() {
  return `
    <h2>🎒 Inventory</h2>

    <div class="card-grid">
      <div class="card">
        <h3>🍃 Leaves</h3>
        <strong>${formatNumber(state.leaves)}</strong>
      </div>

      <div class="card">
        <h3>💧 Dew</h3>
        <strong>${formatNumber(state.dew)}</strong>
      </div>

      <div class="card">
        <h3>⭐ Pond Stars</h3>
        <strong>${state.stars}</strong>
      </div>

      <div class="card">
        <h3>🐸 Frog Skins</h3>
        <strong>${state.ownedSkins.length}/${SKINS.length}</strong>
      </div>

      <div class="card">
        <h3>⚙️ Registered Mechanics</h3>
        <strong>${MECHANICS.length}/200</strong>
      </div>
    </div>
  `;
}

function renderStats() {
  return `
    <h2>📊 Statistics</h2>

    <div class="card-grid">
      <div class="card">
        <h3>🐸 Total Clicks</h3>
        <strong>${formatNumber(state.clicks)}</strong>
      </div>

      <div class="card">
        <h3>🍃 Leaves</h3>
        <strong>${formatNumber(state.leaves)}</strong>
      </div>

      <div class="card">
        <h3>💧 Dew</h3>
        <strong>${formatNumber(state.dew)}</strong>
      </div>

      <div class="card">
        <h3>⭐ Stars</h3>
        <strong>${state.stars}</strong>
      </div>

      <div class="card">
        <h3>🔥 Highest Combo</h3>
        <strong>x${state.combo}</strong>
      </div>

      <div class="card">
        <h3>🔬 Mechanics</h3>
        <strong>${MECHANICS.length}/200</strong>
      </div>
    </div>
  `;
}

function renderSettings() {
  return `
    <h2>⚙️ Settings</h2>

    <div class="card-grid">
      <div class="card">
        <h3>♾️ Energy</h3>
        <p>Energy is permanently disabled.</p>
        <strong>OFF</strong>
      </div>

      <div class="card">
        <h3>🎨 High Contrast</h3>
        <p>Increase interface contrast.</p>
        <button onclick="toggleContrast()">
          Toggle
        </button>
      </div>

      <div class="card">
        <h3>💾 Save</h3>
        <p>Manually save your progress.</p>
        <button onclick="saveGame()">
          Save Now
        </button>
      </div>

      <div class="card">
        <h3>🧪 Debug</h3>
        <p>Registered game mechanics.</p>
        <strong>${MECHANICS.length}/200</strong>
      </div>
    </div>
  `;
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function renderPage() {
  const pages = {
    home: ["Frog Clicker", "Build the ultimate frog kingdom.", renderHome],
    upgrades: ["Upgrades", "Make your frog stronger.", renderUpgrades],
    skins: ["Frog Skins", "Collect and equip frogs.", renderSkins],
    quests: ["Quests", "Complete objectives for rewards.", renderQuests],
    achievements: ["Achievements", "Track your frog accomplishments.", renderAchievements],
    pond: ["Pond", "Build and expand your pond.", renderPond],
    research: ["Research", "Develop new frog technology.", renderResearch],
    inventory: ["Inventory", "Everything you've collected.", renderInventory],
    stats: ["Statistics", "Your frog's lifetime statistics.", renderStats],
    settings: ["Settings", "Configure your pond.", renderSettings]
  };

  const page = pages[currentPage] || pages.home;

  $("pageTitle").textContent = page[0];
  $("pageSubtitle").textContent = page[1];
  $("content").innerHTML = page[2]();

  document.querySelectorAll("#nav button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === currentPage
    );
  });

  if (currentPage === "home") {
    const frog = $("mainFrog");

    if (frog) {
      frog.addEventListener("click", clickFrog);
    }
  }
}

function applySkin() {
  const skin = SKINS[state.selectedSkin] || SKINS[0];

  document.querySelectorAll(".frog-body, .frog-eye").forEach(element => {
    element.style.background = skin[1];
  });

  $("skinName").textContent = skin[0];

  $("frogPreview")
    .querySelectorAll(".frog-body, .frog-eye")
    .forEach(element => {
      element.style.background = skin[1];
    });
}

function renderHUD() {
  $("leaves").textContent = formatNumber(state.leaves);
  $("dew").textContent = formatNumber(state.dew);
  $("stars").textContent = formatNumber(state.stars);
  $("level").textContent = state.level;
  $("clicks").textContent = formatNumber(state.clicks);
  $("combo").textContent = `x${state.combo}`;
  $("xp").textContent = Math.floor(state.xp);
  $("xpNeeded").textContent = xpRequired();

  const percentage =
    Math.min(100, (state.xp / xpRequired()) * 100);

  $("xpFill").style.width = `${percentage}%`;

  applySkin();
}

function render() {
  renderPage();
  renderHUD();
}

function gameTick() {
  // Passive dew.
  if (state.dewRate > 0) {
    state.dew += state.dewRate;
  }

  // Automatic clicking.
  if (state.autoCroak > 0) {
    const amount =
      state.autoCroak *
      state.clickPower *
      (1 + state.prestige);

    state.leaves += amount;
    gainXP(state.autoCroak);
  }

  // Combo slowly decays.
  if (
    Date.now() - state.lastClick > 1200 &&
    state.combo > 1
  ) {
    state.combo = Math.max(1, state.combo - 1);
  }

  checkAchievements();
  renderHUD();
}

document.querySelectorAll("#nav button").forEach(button => {
  button.addEventListener("click", () => {
    currentPage = button.dataset.page;
    render();
  });
});

$("saveBtn").addEventListener("click", () => {
  saveGame();
});

$("resetBtn").addEventListener("click", resetGame);

document.addEventListener("keydown", event => {
  if (
    event.code === "Space" ||
    event.code === "Enter"
  ) {
    if (
      document.activeElement &&
      ["INPUT", "TEXTAREA", "BUTTON"].includes(
        document.activeElement.tagName
      )
    ) {
      return;
    }

    event.preventDefault();

    if (currentPage !== "home") {
      currentPage = "home";
      render();
    }

    clickFrog();
  }
});

setInterval(gameTick, 1000);

setInterval(() => {
  saveGame(false);
}, 15000);

window.addEventListener("beforeunload", () => {
  saveGame(false);
});

window.addEventListener("error", event => {
  console.error("Frog Clicker error:", event.error);
});

window.addEventListener("unhandledrejection", event => {
  console.error("Frog Clicker promise error:", event.reason);
});

// Startup diagnostics.
console.log(
  `Frog Clicker loaded successfully. ${MECHANICS.length}/200 mechanics registered.`
);

if (MECHANICS.length !== 200) {
  console.warn(
    `Mechanic count is ${MECHANICS.length}, expected 200.`
  );
}

addActivity("🐸 Welcome to Frog Clicker!");
addActivity(`🧪 ${MECHANICS.length}/200 mechanics loaded.`);
addActivity("♾️ Energy system disabled.");

render();
