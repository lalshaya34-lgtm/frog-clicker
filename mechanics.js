"use strict";

/*
  FROG FRENZY
  500 MECHANICS
  50 CATEGORIES × 10 MECHANICS
*/

const MECHANIC_CATEGORIES = [

  {
    name:"🐸 Clicking",
    icon:"🐸",
    descriptions:[
      "Increases base click power.",
      "Improves critical-hit chance.",
      "Improves perfect-click rewards.",
      "Improves charged-click rewards.",
      "Improves golden-click frequency.",
      "Improves jump-click rewards.",
      "Improves rapid-click bonuses.",
      "Improves chain bonuses.",
      "Improves lucky-click frequency.",
      "Improves mega-ribbit rewards."
    ]
  },

  {
    name:"💰 Economy",
    icon:"💰",
    descriptions:[
      "Increases coin income.",
      "Increases gem income.",
      "Improves passive interest.",
      "Improves coin multipliers.",
      "Improves gem multipliers.",
      "Improves treasure chance.",
      "Improves earning streaks.",
      "Improves market bonuses.",
      "Improves shop discounts.",
      "Improves wealth rewards."
    ]
  },

  {
    name:"🐾 Pets",
    icon:"🐾",
    descriptions:[
      "Improves pet collecting.",
      "Improves pet leveling.",
      "Improves pet XP.",
      "Improves pet rarity bonuses.",
      "Improves pet abilities.",
      "Improves pet fusion.",
      "Improves pet evolution.",
      "Improves pet team bonuses.",
      "Improves pet multipliers.",
      "Improves pet quest rewards."
    ]
  },

  {
    name:"🎨 Skins",
    icon:"🎨",
    descriptions:[
      "Improves skin collection.",
      "Improves skin rarity.",
      "Improves skin leveling.",
      "Improves skin bonuses.",
      "Improves animated-skin bonuses.",
      "Improves seasonal skins.",
      "Improves secret-skin discovery.",
      "Improves skin crafting.",
      "Improves skin-set bonuses.",
      "Improves skin mastery."
    ]
  },

  {
    name:"🧬 Evolution",
    icon:"🧬",
    descriptions:[
      "Reduces evolution requirements.",
      "Improves mutation chances.",
      "Improves mutation branches.",
      "Improves frog-form bonuses.",
      "Improves evolution stats.",
      "Improves evolution XP.",
      "Improves evolution abilities.",
      "Improves rare mutations.",
      "Improves evolution challenges.",
      "Improves evolution mastery."
    ]
  },

  {
    name:"🌎 Worlds",
    icon:"🌎",
    descriptions:[
      "Reduces world requirements.",
      "Increases world multipliers.",
      "Improves exploration rewards.",
      "Improves hidden-area discovery.",
      "Improves world-event rewards.",
      "Improves world treasure.",
      "Improves world-boss rewards.",
      "Improves world quest rewards.",
      "Improves collectibles.",
      "Improves world mastery."
    ]
  },

  {
    name:"👹 Bosses",
    icon:"👹",
    descriptions:[
      "Increases boss damage.",
      "Reduces boss health.",
      "Improves damage scaling.",
      "Improves critical boss damage.",
      "Improves boss phase rewards.",
      "Improves boss loot.",
      "Improves mini-boss rewards.",
      "Improves boss streaks.",
      "Improves boss achievements.",
      "Improves boss difficulty rewards."
    ]
  },

  {
    name:"⚔️ Combat",
    icon:"⚔️",
    descriptions:[
      "Increases attack speed.",
      "Increases attack power.",
      "Improves critical attacks.",
      "Improves combo attacks.",
      "Improves dodge chance.",
      "Improves armor.",
      "Improves damage reflection.",
      "Improves healing.",
      "Improves battle rewards.",
      "Improves combat mastery."
    ]
  },

  {
    name:"🔨 Crafting",
    icon:"🔨",
    descriptions:[
      "Improves material drops.",
      "Unlocks more recipes.",
      "Improves equipment crafting.",
      "Improves equipment leveling.",
      "Improves equipment rarity.",
      "Improves equipment upgrades.",
      "Improves potion crafting.",
      "Improves crafting mastery.",
      "Improves salvage rewards.",
      "Improves legendary crafting."
    ]
  },

  {
    name:"👥 Friends",
    icon:"👥",
    descriptions:[
      "Increases friend capacity.",
      "Improves friend bonuses.",
      "Improves friend gifts.",
      "Improves friend quests.",
      "Improves friend XP.",
      "Improves friend rewards.",
      "Improves friend streaks.",
      "Improves friend discoveries.",
      "Improves friend events.",
      "Improves social mastery."
    ]
  },

  {
    name:"🏰 Clans",
    icon:"🏰",
    descriptions:[
      "Increases clan capacity.",
      "Improves clan XP.",
      "Improves clan levels.",
      "Improves clan upgrades.",
      "Improves clan challenges.",
      "Improves clan rewards.",
      "Improves clan donations.",
      "Improves clan quests.",
      "Improves clan events.",
      "Improves clan mastery."
    ]
  },

  {
    name:"🏆 Achievements",
    icon:"🏆",
    descriptions:[
      "Increases achievement rewards.",
      "Improves achievement gems.",
      "Improves achievement XP.",
      "Improves achievement bonuses.",
      "Improves hidden achievements.",
      "Improves rare achievements.",
      "Improves streak achievements.",
      "Improves collection achievements.",
      "Improves combat achievements.",
      "Improves achievement mastery."
    ]
  },

  {
    name:"📜 Quests",
    icon:"📜",
    descriptions:[
      "Increases quest rewards.",
      "Improves quest XP.",
      "Improves quest coins.",
      "Improves quest gems.",
      "Improves daily quests.",
      "Improves weekly quests.",
      "Improves secret quests.",
      "Improves chain quests.",
      "Improves boss quests.",
      "Improves quest mastery."
    ]
  },

  {
    name:"⭐ Levels",
    icon:"⭐",
    descriptions:[
      "Increases XP gain.",
      "Reduces XP requirements.",
      "Improves level rewards.",
      "Improves level-up gems.",
      "Improves level-up coins.",
      "Improves level milestones.",
      "Improves level streaks.",
      "Improves level bonuses.",
      "Improves high-level rewards.",
      "Improves level mastery."
    ]
  },

  {
    name:"🔥 Combos",
    icon:"🔥",
    descriptions:[
      "Increases combo growth.",
      "Slows combo decay.",
      "Increases maximum combo.",
      "Improves combo rewards.",
      "Improves combo criticals.",
      "Improves combo chains.",
      "Improves combo streaks.",
      "Improves combo milestones.",
      "Improves combo events.",
      "Improves combo mastery."
    ]
  },

  {
    name:"💎 Gems",
    icon:"💎",
    descriptions:[
      "Increases gem drops.",
      "Improves gem criticals.",
      "Improves gem treasures.",
      "Improves gem events.",
      "Improves gem streaks.",
      "Improves gem quests.",
      "Improves gem achievements.",
      "Improves gem shop value.",
      "Improves gem conversion.",
      "Improves gem mastery."
    ]
  },

  {
    name:"🎁 Rewards",
    icon:"🎁",
    descriptions:[
      "Increases random rewards.",
      "Improves reward rarity.",
      "Improves reward size.",
      "Improves reward streaks.",
      "Improves reward chests.",
      "Improves reward rolls.",
      "Improves reward luck.",
      "Improves reward doubling.",
      "Improves reward events.",
      "Improves reward mastery."
    ]
  },

  {
    name:"🎲 Random Events",
    icon:"🎲",
    descriptions:[
      "Increases event frequency.",
      "Increases event duration.",
      "Improves event multipliers.",
      "Improves event rewards.",
      "Improves rare events.",
      "Improves secret events.",
      "Improves event luck.",
      "Improves event chains.",
      "Improves event streaks.",
      "Improves event mastery."
    ]
  },

  {
    name:"🗺️ Exploration",
    icon:"🗺️",
    descriptions:[
      "Improves exploration speed.",
      "Improves exploration rewards.",
      "Improves exploration luck.",
      "Improves hidden discoveries.",
      "Improves map treasures.",
      "Improves rare locations.",
      "Improves exploration events.",
      "Improves exploration quests.",
      "Improves exploration collectibles.",
      "Improves exploration mastery."
    ]
  },

  {
    name:"🏪 Shops",
    icon:"🏪",
    descriptions:[
      "Reduces shop prices.",
      "Improves shop stock.",
      "Improves rare stock.",
      "Improves shop refreshes.",
      "Improves shop discounts.",
      "Improves secret items.",
      "Improves shop luck.",
      "Improves shop events.",
      "Improves shop rewards.",
      "Improves shop mastery."
    ]
  },

  {
    name:"📈 Upgrades",
    icon:"📈",
    descriptions:[
      "Improves upgrade power.",
      "Reduces upgrade costs.",
      "Improves upgrade scaling.",
      "Improves critical upgrades.",
      "Improves free upgrades.",
      "Improves rare upgrades.",
      "Improves upgrade streaks.",
      "Improves upgrade resets.",
      "Improves upgrade rewards.",
      "Improves upgrade mastery."
    ]
  },

  {
    name:"♻️ Prestige",
    icon:"♻️",
    descriptions:[
      "Improves prestige gain.",
      "Reduces prestige requirements.",
      "Improves prestige multipliers.",
      "Improves prestige rewards.",
      "Improves prestige gems.",
      "Improves prestige XP.",
      "Improves prestige streaks.",
      "Improves prestige upgrades.",
      "Improves prestige events.",
      "Improves prestige mastery."
    ]
  },

  {
    name:"🌌 Ascension",
    icon:"🌌",
    descriptions:[
      "Improves ascension gain.",
      "Reduces ascension requirements.",
      "Improves ascension multipliers.",
      "Improves ascension rewards.",
      "Improves ascension gems.",
      "Improves ascension XP.",
      "Improves ascension streaks.",
      "Improves ascension upgrades.",
      "Improves ascension events.",
      "Improves ascension mastery."
    ]
  },

  {
    name:"♾️ Rebirth",
    icon:"♾️",
    descriptions:[
      "Improves rebirth gain.",
      "Reduces rebirth requirements.",
      "Improves rebirth multipliers.",
      "Improves rebirth rewards.",
      "Improves rebirth gems.",
      "Improves rebirth XP.",
      "Improves rebirth streaks.",
      "Improves rebirth upgrades.",
      "Improves rebirth events.",
      "Improves rebirth mastery."
    ]
  },

  {
    name:"🧪 Potions",
    icon:"🧪",
    descriptions:[
      "Improves potion duration.",
      "Improves potion strength.",
      "Reduces potion costs.",
      "Improves rare potions.",
      "Improves potion drops.",
      "Improves potion stacking.",
      "Improves potion crafting.",
      "Improves potion discovery.",
      "Improves potion events.",
      "Improves potion mastery."
    ]
  },

  {
    name:"🪄 Magic",
    icon:"🪄",
    descriptions:[
      "Increases magic power.",
      "Improves spell duration.",
      "Reduces spell cooldowns.",
      "Improves spell criticals.",
      "Improves rare spells.",
      "Improves magic drops.",
      "Improves magic crafting.",
      "Improves magic events.",
      "Improves magic combos.",
      "Improves magic mastery."
    ]
  },

  {
    name:"🏠 Frog Houses",
    icon:"🏠",
    descriptions:[
      "Increases house capacity.",
      "Improves house income.",
      "Improves house upgrades.",
      "Improves house decorations.",
      "Improves house bonuses.",
      "Improves house storage.",
      "Improves house pets.",
      "Improves house events.",
      "Improves house rewards.",
      "Improves house mastery."
    ]
  },

  {
    name:"🌳 Farming",
    icon:"🌳",
    descriptions:[
      "Improves crop growth.",
      "Improves crop yield.",
      "Improves rare crops.",
      "Improves seed drops.",
      "Improves farming speed.",
      "Improves farming luck.",
      "Improves farm upgrades.",
      "Improves farm events.",
      "Improves farm quests.",
      "Improves farming mastery."
    ]
  },

  {
    name:"🌱 Gardening",
    icon:"🌱",
    descriptions:[
      "Improves plant growth.",
      "Improves plant value.",
      "Improves rare plants.",
      "Improves seed quality.",
      "Improves watering.",
      "Improves fertilizer.",
      "Improves garden upgrades.",
      "Improves garden events.",
      "Improves garden discoveries.",
      "Improves garden mastery."
    ]
  },

  {
    name:"🎣 Fishing",
    icon:"🎣",
    descriptions:[
      "Improves fishing speed.",
      "Improves fish value.",
      "Improves rare fish.",
      "Improves treasure catches.",
      "Improves fishing luck.",
      "Improves fishing gear.",
      "Improves fishing streaks.",
      "Improves fishing events.",
      "Improves fishing quests.",
      "Improves fishing mastery."
    ]
  },

  {
    name:"🏗️ Building",
    icon:"🏗️",
    descriptions:[
      "Reduces building costs.",
      "Improves building speed.",
      "Improves building health.",
      "Improves building income.",
      "Improves rare buildings.",
      "Improves building upgrades.",
      "Improves construction rewards.",
      "Improves building events.",
      "Improves building storage.",
      "Improves building mastery."
    ]
  },

  {
    name:"🚂 Transportation",
    icon:"🚂",
    descriptions:[
      "Improves travel speed.",
      "Reduces travel costs.",
      "Improves vehicle capacity.",
      "Improves vehicle income.",
      "Improves rare vehicles.",
      "Improves vehicle upgrades.",
      "Improves travel discoveries.",
      "Improves travel events.",
      "Improves travel rewards.",
      "Improves transportation mastery."
    ]
  },

  {
    name:"🏝️ Islands",
    icon:"🏝️",
    descriptions:[
      "Improves island income.",
      "Improves island exploration.",
      "Improves island resources.",
      "Improves island treasures.",
      "Improves island discoveries.",
      "Improves island upgrades.",
      "Improves island events.",
      "Improves island quests.",
      "Improves island collectibles.",
      "Improves island mastery."
    ]
  },

  {
    name:"🌋 Dungeons",
    icon:"🌋",
    descriptions:[
      "Improves dungeon damage.",
      "Improves dungeon rewards.",
      "Improves dungeon treasure.",
      "Improves dungeon luck.",
      "Improves dungeon rooms.",
      "Improves dungeon bosses.",
      "Improves dungeon keys.",
      "Improves dungeon events.",
      "Improves dungeon streaks.",
      "Improves dungeon mastery."
    ]
  },

  {
    name:"🏟️ Challenges",
    icon:"🏟️",
    descriptions:[
      "Improves challenge rewards.",
      "Improves challenge XP.",
      "Improves challenge coins.",
      "Improves challenge gems.",
      "Improves challenge streaks.",
      "Improves challenge difficulty rewards.",
      "Improves challenge luck.",
      "Improves challenge events.",
      "Improves secret challenges.",
      "Improves challenge mastery."
    ]
  },

  {
    name:"🏁 Races",
    icon:"🏁",
    descriptions:[
      "Improves race speed.",
      "Improves race rewards.",
      "Improves race boosts.",
      "Improves race luck.",
      "Improves race streaks.",
      "Improves race prizes.",
      "Improves race events.",
      "Improves race shortcuts.",
      "Improves race collectibles.",
      "Improves race mastery."
    ]
  },

  {
    name:"🥇 Tournaments",
    icon:"🥇",
    descriptions:[
      "Improves tournament points.",
      "Improves tournament rewards.",
      "Improves tournament streaks.",
      "Improves tournament bonuses.",
      "Improves tournament luck.",
      "Improves tournament prizes.",
      "Improves tournament events.",
      "Improves tournament quests.",
      "Improves tournament achievements.",
      "Improves tournament mastery."
    ]
  },

  {
    name:"🎰 Minigames",
    icon:"🎰",
    descriptions:[
      "Improves minigame rewards.",
      "Improves minigame luck.",
      "Improves minigame scores.",
      "Improves minigame streaks.",
      "Improves minigame prizes.",
      "Improves minigame tickets.",
      "Improves minigame events.",
      "Improves minigame bonuses.",
      "Improves secret minigames.",
      "Improves minigame mastery."
    ]
  },

  {
    name:"🎵 Music",
    icon:"🎵",
    descriptions:[
      "Improves music bonuses.",
      "Improves rhythm rewards.",
      "Improves song streaks.",
      "Improves music XP.",
      "Improves music coins.",
      "Improves music gems.",
      "Improves rare songs.",
      "Improves music events.",
      "Improves music combos.",
      "Improves music mastery."
    ]
  },

  {
    name:"🐸 Frog Collection",
    icon:"🐸",
    descriptions:[
      "Improves collection capacity.",
      "Improves collection rarity.",
      "Improves collection rewards.",
      "Improves collection luck.",
      "Improves collection bonuses.",
      "Improves rare frog discovery.",
      "Improves collection quests.",
      "Improves collection events.",
      "Improves collection sets.",
      "Improves collection mastery."
    ]
  },

  {
    name:"🥚 Eggs",
    icon:"🥚",
    descriptions:[
      "Improves egg hatch speed.",
      "Improves egg luck.",
      "Improves egg rarity.",
      "Improves egg rewards.",
      "Improves egg discounts.",
      "Improves shiny eggs.",
      "Improves secret eggs.",
      "Improves egg events.",
      "Improves egg streaks.",
      "Improves egg mastery."
    ]
  },

  {
    name:"💍 Equipment",
    icon:"💍",
    descriptions:[
      "Improves equipment power.",
      "Improves equipment rarity.",
      "Improves equipment upgrades.",
      "Improves equipment durability.",
      "Improves equipment bonuses.",
      "Improves equipment drops.",
      "Improves equipment crafting.",
      "Improves equipment sets.",
      "Improves legendary equipment.",
      "Improves equipment mastery."
    ]
  },

  {
    name:"🛡️ Gear",
    icon:"🛡️",
    descriptions:[
      "Improves gear power.",
      "Improves gear defense.",
      "Improves gear rarity.",
      "Improves gear upgrades.",
      "Improves gear bonuses.",
      "Improves gear drops.",
      "Improves gear crafting.",
      "Improves gear sets.",
      "Improves legendary gear.",
      "Improves gear mastery."
    ]
  },

  {
    name:"🔮 Artifacts",
    icon:"🔮",
    descriptions:[
      "Improves artifact power.",
      "Improves artifact rarity.",
      "Improves artifact bonuses.",
      "Improves artifact discovery.",
      "Improves artifact drops.",
      "Improves artifact upgrades.",
      "Improves artifact sets.",
      "Improves ancient artifacts.",
      "Improves artifact events.",
      "Improves artifact mastery."
    ]
  },

  {
    name:"🌦️ Weather",
    icon:"🌦️",
    descriptions:[
      "Improves sunny-weather bonuses.",
      "Improves rain bonuses.",
      "Improves storm rewards.",
      "Improves snow rewards.",
      "Improves fog discoveries.",
      "Improves rainbow events.",
      "Improves weather duration.",
      "Improves weather luck.",
      "Improves rare weather.",
      "Improves weather mastery."
    ]
  },

  {
    name:"🕐 Time Events",
    icon:"🕐",
    descriptions:[
      "Improves hourly rewards.",
      "Improves timed bonuses.",
      "Improves time-event duration.",
      "Improves time-event luck.",
      "Improves countdown rewards.",
      "Improves speed events.",
      "Improves slow-time bonuses.",
      "Improves time treasures.",
      "Improves rare time events.",
      "Improves time mastery."
    ]
  },

  {
    name:"📅 Seasons",
    icon:"📅",
    descriptions:[
      "Improves seasonal XP.",
      "Improves seasonal coins.",
      "Improves seasonal gems.",
      "Improves seasonal quests.",
      "Improves seasonal rewards.",
      "Improves seasonal skins.",
      "Improves seasonal events.",
      "Improves seasonal collectibles.",
      "Improves seasonal milestones.",
      "Improves seasonal mastery."
    ]
  },

  {
    name:"🎃 Festivals",
    icon:"🎃",
    descriptions:[
      "Improves festival rewards.",
      "Improves festival coins.",
      "Improves festival gems.",
      "Improves festival tickets.",
      "Improves festival luck.",
      "Improves festival skins.",
      "Improves festival quests.",
      "Improves festival events.",
      "Improves festival collectibles.",
      "Improves festival mastery."
    ]
  },

  {
    name:"🏅 Mastery",
    icon:"🏅",
    descriptions:[
      "Improves overall mastery gain.",
      "Improves mastered-mechanic bonuses.",
      "Improves mastery XP.",
      "Improves mastery coins.",
      "Improves mastery gems.",
      "Improves mastery streaks.",
      "Improves mastery rewards.",
      "Improves mastery milestones.",
      "Improves mastery challenges.",
      "Improves ultimate mastery."
    ]
  },

  {
    name:"🌟 Secrets",
    icon:"🌟",
    descriptions:[
      "Improves secret discovery.",
      "Improves hidden rewards.",
      "Improves secret luck.",
      "Improves secret events.",
      "Improves secret quests.",
      "Improves secret skins.",
      "Improves secret pets.",
      "Improves secret worlds.",
      "Improves secret bosses.",
      "Improves secret mastery."
    ]
  }

];


/*
  Give every mechanic a unique ID.

  50 categories × 10 mechanics = 500.
*/
const MECHANICS = [];

let mechanicID = 0;

for(const category of MECHANIC_CATEGORIES){

  for(let slot=0;slot<10;slot++){

    MECHANICS.push({
      id:mechanicID,
      number:mechanicID+1,
      category:category.name,
      categoryIcon:category.icon,
      slot,
      name:category.descriptions[slot],
      level:0,
      maxLevel:100,
      power:1 + slot * 0.25
    });

    mechanicID++;

  }

}


/*
  Sanity check.
*/
if(MECHANICS.length !== 500){

  throw new Error(
    "Frog Frenzy requires exactly 500 mechanics."
  );

}


/*
  Each mechanic contributes a lightweight numerical modifier.
  No 500 individual intervals are used.
*/
function mechanicLevel(id){

  if(!window.game || !Array.isArray(window.game.mechanics)){
    return 0;
  }

  return window.game.mechanics[id] || 0;
}


function mechanicBonus(id){

  const level=mechanicLevel(id);

  return 1 + level * 0.01;
}


/*
  Returns the combined bonus of a category.
*/
function categoryBonus(categoryIndex){

  const start=categoryIndex*10;

  let total=1;

  for(let i=0;i<10;i++){

    total*=mechanicBonus(start+i);

  }

  return total;
}


/*
  Returns total mastery progress.
*/
function totalMechanicLevels(){

  if(!window.game)
    return 0;

  return window.game.mechanics.reduce(
    (sum,value)=>sum+value,
    0
  );

}


/*
  Count mechanics that have been used/unlocked.
*/
function unlockedMechanics(){

  if(!window.game)
    return 0;

  return window.game.mechanics.filter(
    value=>value>0
  ).length;

}
