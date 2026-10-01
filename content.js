"use strict";

/* =========================
   PETS
========================= */

const PETS=[

  {
    icon:"🪰",
    name:"Tiny Fly",
    rarity:"Common",
    multiplier:1.1,
    cost:500
  },

  {
    icon:"🐛",
    name:"Happy Worm",
    rarity:"Common",
    multiplier:1.25,
    cost:2500
  },

  {
    icon:"🐌",
    name:"Mega Snail",
    rarity:"Uncommon",
    multiplier:1.5,
    cost:15000
  },

  {
    icon:"🦋",
    name:"Rainbow Butterfly",
    rarity:"Rare",
    multiplier:2,
    cost:100000
  },

  {
    icon:"🐢",
    name:"Swamp Turtle",
    rarity:"Rare",
    multiplier:3,
    cost:750000
  },

  {
    icon:"🦆",
    name:"Golden Duck",
    rarity:"Epic",
    multiplier:5,
    cost:5000000
  },

  {
    icon:"🐍",
    name:"Crystal Snake",
    rarity:"Legendary",
    multiplier:9,
    cost:50000000
  },

  {
    icon:"🐲",
    name:"Baby Dragon",
    rarity:"Mythic",
    multiplier:18,
    cost:1000000000
  }

];


/* =========================
   SKINS
========================= */

const SKINS=[

  {icon:"🐸",name:"Classic",multiplier:1,cost:0},
  {icon:"🟡",name:"Golden Frog",multiplier:2,cost:1000},
  {icon:"🔵",name:"Ocean Frog",multiplier:3,cost:5000},
  {icon:"🔴",name:"Ruby Frog",multiplier:5,cost:25000},
  {icon:"🟣",name:"Mystic Frog",multiplier:8,cost:100000},
  {icon:"⚫",name:"Shadow Frog",multiplier:12,cost:500000},
  {icon:"🤖",name:"Robot Frog",multiplier:20,cost:2500000},
  {icon:"👻",name:"Ghost Frog",multiplier:35,cost:15000000},
  {icon:"👽",name:"Alien Frog",multiplier:60,cost:100000000},
  {icon:"🌈",name:"Rainbow Frog",multiplier:100,cost:1000000000},
  {icon:"🐲",name:"Dragon Frog",multiplier:250,cost:10000000000},
  {icon:"👑",name:"Frog King",multiplier:750,cost:100000000000}
];


/* =========================
   WORLDS
========================= */

const WORLDS=[

  {icon:"🌿",name:"Lily Pond",multiplier:1,cost:0,level:1},
  {icon:"🌲",name:"Moss Forest",multiplier:2,cost:10000,level:10},
  {icon:"🏔️",name:"Frog Mountain",multiplier:5,cost:100000,level:20},
  {icon:"🏜️",name:"Desert Oasis",multiplier:10,cost:1000000,level:30},
  {icon:"🌊",name:"Coral Marsh",multiplier:25,cost:10000000,level:40},
  {icon:"🌋",name:"Volcano Bog",multiplier:60,cost:100000000,level:50},
  {icon:"🌙",name:"Moon Pond",multiplier:150,cost:1000000000,level:65},
  {icon:"☁️",name:"Sky Swamp",multiplier:400,cost:10000000000,level:80},
  {icon:"🪐",name:"Frog Planet",multiplier:1000,cost:1000000000000,level:100},
  {icon:"🌈",name:"Rainbow Dimension",multiplier:5000,cost:100000000000000,level:150}
];


/* =========================
   BOSSES
========================= */

const BOSSES=[

  {
    icon:"🟢",
    name:"Slime Toad",
    health:100000,
    reward:5000
  },

  {
    icon:"👹",
    name:"Swamp Monster",
    health:10000000,
    reward:100000
  },

  {
    icon:"🐲",
    name:"Dragon Toad",
    health:1000000000,
    reward:5000000
  },

  {
    icon:"👽",
    name:"Alien Frog",
    health:100000000000,
    reward:100000000
  },

  {
    icon:"🌌",
    name:"Galaxy Beast",
    health:100000000000000,
    reward:10000000000
  },

  {
    icon:"♾️",
    name:"Infinity Frog",
    health:1e20,
    reward:1e15
  }

];


/* =========================
   CRAFTING
========================= */

const RECIPES=[

  {
    icon:"🍀",
    name:"Lucky Potion",
    cost:100000,
    effect:"Temporary luck boost"
  },

  {
    icon:"🔥",
    name:"Frenzy Potion",
    cost:1000000,
    effect:"Temporary 5× income"
  },

  {
    icon:"💎",
    name:"Gem Potion",
    cost:10000000,
    effect:"Gain bonus gems"
  },

  {
    icon:"🧬",
    name:"Mutation Serum",
    cost:100000000,
    effect:"Gain mutation progress"
  },

  {
    icon:"👑",
    name:"Royal Crown",
    cost:1000000000,
    effect:"Permanent power bonus"
  },

  {
    icon:"♾️",
    name:"Infinity Elixir",
    cost:1e15,
    effect:"Gain prestige"
  }

];


/* =========================
   RANDOM EVENTS
========================= */

const EVENTS=[

  {
    name:"🪰 Fly Swarm",
    multiplier:2,
    duration:20
  },

  {
    name:"🌧️ Golden Rain",
    multiplier:4,
    duration:25
  },

  {
    name:"🌈 Rainbow Storm",
    multiplier:8,
    duration:30
  },

  {
    name:"👽 Alien Invasion",
    multiplier:15,
    duration:40
  },

  {
    name:"💎 Gem Meteor",
    multiplier:25,
    duration:45
  },

  {
    name:"🔥 Lava Festival",
    multiplier:50,
    duration:60
  }

];
