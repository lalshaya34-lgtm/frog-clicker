"use strict";

/* =========================================================
STATE
========================================================= */

function createGame(){

  return {

    coins:new BigNum(0),
    gems:new BigNum(25),

    xp:new BigNum(0),

    level:1,

    clicks:0,
    criticals:0,

    combo:1,
    bestCombo:1,

    energy:100,
    maxEnergy:100,

    world:0,
    skin:0,

    pets:{},
    petXP:{},

    ownedSkins:[0],

    evolution:0,
    mutations:0,

    friends:[],

    clan:null,

    prestige:0,
    rebirth:0,

    dailyDay:-1,
    dailyStreak:0,

    eventUntil:0,
    eventMultiplier:1,
    eventName:"",

    lastSave:Date.now(),

    mechanics:Array(500).fill(0),

    totalCoins:new BigNum(0)

  };

}

let game=createGame();

let lastClick=0;
let lastUI=0;
let lastSaveTime=0;
let currentTab="home";


/* =========================================================
HELPERS
========================================================= */

function mechanicLevel(id){

  return game.mechanics[id-1]||0;

}

function addMechanic(id,amount=1){

  if(id<1 || id>500)
    return;

  game.mechanics[id-1]=
    Math.min(
      100,
      game.mechanics[id-1]+amount
    );

}

function effect(type){

  let total=0;

  for(const mechanic of MECHANICS){

    if(mechanic.type===type){

      total+=
        mechanic.value*
        mechanicLevel(mechanic.id);

    }

  }

  return total;

}

function has(type){

  return effect(type)>0;

}

function random(min,max){

  return min+
    Math.random()*(max-min);

}

function powerOfTen(power){

  const e=Math.floor(power);

  return new BigNum(
    10**(power-e),
    e
  );

}


/* =========================================================
MULTIPLIERS
========================================================= */

function petMultiplier(){

  let result=1;

  for(const key in game.pets){

    const index=Number(key);
    const level=game.pets[key];

    if(PETS[index]){

      result*=
        PETS[index][3]+
        level*.04+
        effect("petBonus");

    }

  }

  return result;
}

function clickPower(){

  let result=1;

  result+=game.level*.2;

  result+=game.prestige*2;

  result+=game.rebirth*25;

  result+=effect("coinGeneration");

  result*=
    1+
    effect("upgradePower")+
    effect("clickMastery");

  result*=
    1+
    effect("prestigePower")+
    effect("ascensionPower")+
    effect("rebirthPower")+
    effect("cosmicPower");

  result*=
    1+
    game.world*0.2;

  result*=
    SKINS[game.skin][2];

  result*=
    petMultiplier();

  result*=
    1+effect("coinMult");

  result*=
    1+effect("worldMult");

  result*=
    1+effect("grandMastery");

  if(Date.now()<game.eventUntil)
    result*=game.eventMultiplier;

  return new BigNum(result);

}

function critChance(){

  return Math.min(
    .8,
    .05+
    effect("crit")+
    effect("upgradeCrit")+
    effect("comboCrit")+
    effect("equipCrit")
  );

}

function shopCost(value){

  const discount=
    Math.min(
      .75,
      effect("discount")+
      effect("shopDiscount")+
      effect("upgradeCost")*-1
    );

  return new BigNum(value)
    .mul(1-discount);

}


/* =========================================================
EARNING
========================================================= */

function earn(value){

  const amount=
    toBig(value);

  game.coins=
    game.coins.add(amount);

  game.totalCoins=
    game.totalCoins.add(amount);

  game.xp=
    game.xp.add(
      amount.mul(
        .02+
        effect("levelXP")
      )
    );

  checkLevel();

}


/* =========================================================
CLICKING
========================================================= */

function clickFrog(){

  if(game.energy<=0){

    toast("⚡ No energy!");

    return;

  }

  game.energy=
    Math.max(
      0,
      game.energy-.3
    );

  const now=
    performance.now();

  const rapid=
    now-lastClick<750;

  if(rapid){

    game.combo=
      Math.min(
        1000,
        game.combo+
        .1+
        effect("combo")
      );

    addMechanic(1);

  }else{

    game.combo=
      Math.max(
        1,
        game.combo*.75
      );

  }

  lastClick=now;

  game.bestCombo=
    Math.max(
      game.bestCombo,
      game.combo
    );

  let reward=
    clickPower()
      .mul(game.combo);

  /* Critical */
  if(
    Math.random()<
    critChance()
  ){

    reward=
      reward.mul(
        10+
        effect("criticalDamage")*10
      );

    game.criticals++;

    addMechanic(2);

    floatText("💥 CRITICAL!");

  }

  /* Perfect */
  if(
    rapid &&
    Math.random()<
    .1+
    effect("perfect")
  ){

    reward=
      reward.mul(2);

    addMechanic(3);

    floatText("✨ PERFECT!");

  }

  /* Charged */
  if(
    game.clicks>0 &&
    game.clicks%25===0
  ){

    reward=
      reward.mul(
        3+
        effect("charged")*10
      );

    addMechanic(4);

  }

  /* Golden */
  if(
    Math.random()<
    .006+
    effect("golden")
  ){

    reward=
      reward.mul(20);

    addMechanic(5);

    floatText("🟡 GOLDEN!");

  }

  /* Jump */
  if(
    game.clicks>0 &&
    game.clicks%50===0
  ){

    reward=
      reward.mul(4);

    addMechanic(6);

  }

  /* Rapid */
  if(rapid){

    reward=
      reward.mul(
        1+
        effect("rapid")
      );

    addMechanic(7);

  }

  /* Chain */
  if(
    game.clicks>0 &&
    game.clicks%10===0
  ){

    reward=
      reward.mul(
        1.5+
        effect("chain")
      );

    addMechanic(8);

  }

  /* Lucky */
  if(
    Math.random()<
    .03+
    effect("lucky")+
    effect("luck")
  ){

    reward=
      reward.mul(3);

    addMechanic(9);

  }

  /* Mega */
  if(
    Math.random()<
    .0007+
    effect("mega")
  ){

    reward=
      reward.mul(100);

    addMechanic(10);

    floatText("🐸 MEGA RIBBIT!");

  }

  game.clicks++;

  earn(reward);

  /* Give progress to mechanics related to clicks */
  addMechanic(31);
  addMechanic(33);

  if(game.clicks%100===0)
    addMechanic(92);

  animateFrog();

  updateFast();

}


/* =========================================================
MEGA JUMP
========================================================= */

function megaJump(){

  if(game.gems.cmp(5)<0){

    toast("Need 5 💎");

    return;

  }

  game.gems=
    game.gems.sub(5);

  earn(
    clickPower().mul(50)
  );

  addMechanic(6,5);

  toast("💥 MEGA JUMP!");

}


/* =========================================================
FRENZY
========================================================= */

function activateFrenzy(){

  if(game.gems.cmp(10)<0){

    toast("Need 10 💎");

    return;

  }

  game.gems=
    game.gems.sub(10);

  game.eventUntil=
    Date.now()+30000;

  game.eventMultiplier=
    3+
    effect("eventPower");

  game.eventName=
    "🔥 Frog Frenzy";

  addMechanic(157);

  toast("🔥 3× FRENZY!");

}


/* =========================================================
ENERGY
========================================================= */

function restoreEnergy(){

  if(game.gems.cmp(2)<0){

    toast("Need 2 💎");

    return;

  }

  game.gems=
    game.gems.sub(2);

  game.energy=
    game.maxEnergy+
    effect("houseEnergy")*10;

  toast("⚡ Energy restored!");

}


/* =========================================================
RANDOM EVENTS
========================================================= */

function randomEvent(){

  const event=
    EVENTS[
      Math.floor(
        Math.random()*EVENTS.length
      )
    ];

  game.eventName=event[0];

  game.eventMultiplier=
    event[1]+
    effect("eventPower");

  game.eventUntil=
    Date.now()+
    event[2]*1000+
    effect("eventDuration")*1000;

  addMechanic(161);

  toast(
    event[0]+
    " ×"+
    game.eventMultiplier
  );

}


/* =========================================================
PETS
========================================================= */

function buyPet(index){

  const pet=PETS[index];

  if(!pet)
    return;

  const level=
    game.pets[index]||0;

  const cost=
    shopCost(
      pet[4]*(level+1)
    );

  if(!spend(cost)){

    toast("Not enough coins!");

    return;

  }

  game.pets[index]=
    level+1;

  game.petXP[index]=
    (game.petXP[index]||0)+100;

  addMechanic(21);
  addMechanic(22);
  addMechanic(23);

  if(level===0)
    addMechanic(24);

  if(level>=5)
    addMechanic(26);

  if(level>=10)
    addMechanic(27);

  addMechanic(28);
  addMechanic(29);
  addMechanic(30);

  toast(
    "🐾 "+pet[1]+
    " level "+(level+1)
  );

  renderPets();

}


/* =========================================================
SKINS
========================================================= */

function selectSkin(index){

  const skin=SKINS[index];

  if(!skin)
    return;

  if(game.ownedSkins.includes(index)){

    game.skin=index;

    renderSkins();
    updateFast();

    return;

  }

  const cost=
    shopCost(skin[3]);

  if(!spend(cost)){

    toast(
      "Need "+cost.string()+" 🪙"
    );

    return;

  }

  game.ownedSkins.push(index);

  game.skin=index;

  addMechanic(31);
  addMechanic(32);
  addMechanic(33);
  addMechanic(34);
  addMechanic(35);

  if(index>=8)
    addMechanic(36);

  if(index>=10)
    addMechanic(37);

  if(game.ownedSkins.length>=3)
    addMechanic(39);

  addMechanic(40);

  toast(
    "🎨 "+skin[1]+" unlocked!"
  );

  renderSkins();
  updateFast();

}


/* =========================================================
WORLDS
========================================================= */

function travelWorld(index){

  const world=WORLDS[index];

  if(!world)
    return;

  if(game.level<index*10+1){

    toast(
      "Need level "+
      (index*10+1)
    );

    return;

  }

  const cost=
    shopCost(world[3]);

  if(!spend(cost)){

    toast(
      "Need "+
      cost.string()+
      " 🪙"
    );

    return;

  }

  game.world=index;

  for(let id=51;id<=60;id++)
    addMechanic(id);

  toast(
    world[0]+" "+
    world[1]
  );

  renderWorlds();
  updateFast();

}


/* =========================================================
BOSSES
========================================================= */

function bossDamage(){

  let damage=
    clickPower()
      .mul(100)
      .mul(
        1+
        effect("bossDamage")+
        effect("dungeonDamage")+
        effect("gearDamage")
      );

  if(
    Math.random()<
    .05+
    effect("bossCrit")
  ){

    damage=
      damage.mul(5);

  }

  return damage;

}

function fightBoss(index){

  const boss=BOSSES[index];

  if(!boss)
    return;

  const health=
    new BigNum(boss[2]);

  const damage=
    bossDamage();

  if(damage.cmp(health)<0){

    toast(
      "Need "+
      health
