"use strict";

/*
  Main Frog Frenzy engine.
  The game deliberately avoids running 500 separate loops.
*/

window.game=loadGame();

let lastClickTime=0;
let lastRender=0;
let lastSave=Date.now();
let animationFrame=0;


/* =========================================================
   BASIC HELPERS
========================================================= */

function fmt(value){

  return BN(value).toString();

}


function toast(message){

  const element=
    document.getElementById("toast");

  element.textContent=message;
  element.style.display="block";

  clearTimeout(toast.timer);

  toast.timer=setTimeout(
    ()=>{
      element.style.display="none";
    },
    1800
  );

}


function activity(message){

  const container=
    document.getElementById("activity");

  if(!container)
    return;

  const row=
    document.createElement("div");

  row.className="activity-item";
  row.textContent=message;

  container.prepend(row);

  while(container.children.length>8)
    container.lastElementChild.remove();

}


function floating(message,critical=false){

  const element=
    document.createElement("div");

  element.className=
    "float-number"+
    (critical?" float-critical":"");

  element.textContent=message;

  element.style.left=
    (35+Math.random()*30)+"%";

  element.style.top=
    (35+Math.random()*20)+"%";

  document
    .getElementById("floatingNumbers")
    .appendChild(element);

  setTimeout(
    ()=>element.remove(),
    800
  );

}


function spendCoins(cost){

  cost=BN(cost);

  if(game.coins.lessThan(cost)){

    toast(
      "❌ Need "+fmt(cost)+" 🪙"
    );

    return false;

  }

  game.coins=
    game.coins.sub(cost);

  return true;

}


function earnCoins(amount){

  amount=BN(amount);

  game.coins=
    game.coins.add(amount);

  game.totalCoins=
    game.totalCoins.add(amount);

  addXP(
    amount.div(100)
  );

}


function addXP(amount){

  game.xp=
    game.xp.add(amount);

  checkLevels();

}


function checkLevels(){

  let safety=0;

  while(
    game.level<1000000 &&
    game.xp.greaterOrEqual(
      new BigNumber(
        100*game.level
      )
    ) &&
    safety<100
  ){

    game.xp=
      game.xp.sub(
        new BigNumber(
          100*game.level
        )
      );

    game.level++;

    game.gems=
      game.gems.add(
        new BigNumber(
          2+Math.floor(game.level/10)
        )
      );

    improveMechanic(
      130,
      1
    );

    if(game.level%10===0){

      activity(
        "⭐ Reached level "+
        game.level+"!"
      );

    }

    safety++;

  }

}


/* =========================================================
   MECHANIC SYSTEM
========================================================= */

function improveMechanic(id,amount=1){

  if(id<0 || id>=500)
    return;

  game.mechanics[id]=Math.min(
    100,
    (game.mechanics[id]||0)+amount
  );

}


function mechanicPower(id){

  return 1+
    (game.mechanics[id]||0)*0.01;

}


function categoryPower(category){

  let result=1;

  const start=category*10;

  for(let i=0;i<10;i++){

    result*=
      mechanicPower(start+i);

  }

  return result;

}


/*
  Category indices:
  0 clicking
  1 economy
  2 pets
  3 skins
  4 evolution
  5 worlds
  6 bosses
  7 combat
  8 crafting
  9 friends
  10 clans
  ...
*/


/* =========================================================
   CLICK POWER
========================================================= */

function skinMultiplier(){

  return SKINS[game.skin]?.multiplier || 1;

}


function petMultiplier(){

  let total=1;

  for(const key in game.pets){

    const index=Number(key);

    const pet=PETS[index];

    if(!pet)
      continue;

    const level=
      game.pets[key]||0;

    total*=
      1+
      (pet.multiplier-1)*
      Math.min(
        10,
        1+level*.05
      );

  }

  return total;

}


function worldMultiplier(){

  return WORLDS[game.world]?.multiplier || 1;

}


function permanentMultiplier(){

  return (
    1+
    game.prestige*.75+
    game.ascension*5+
    game.rebirth*30
  );

}


function clickPower(){

  let power=1;

  power+=game.level*.2;

  power*=
    skinMultiplier();

  power*=
    petMultiplier();

  power*=
    worldMultiplier();

  power*=
    permanentMultiplier();

  power*=
    categoryPower(0);

  power*=
    categoryPower(1);

  power*=
    categoryPower(13);

  power*=
    categoryPower(14);

  power*=
    categoryPower(21);

  power*=
    categoryPower(24);

  power*=
    categoryPower(42);

  power*=
    categoryPower(47);

  power*=
    categoryPower(48);

  if(
    Date.now()<game.eventUntil
  ){

    power*=
      game.eventMultiplier;

  }

  return new BigNumber(power);

}


/* =========================================================
   CLICKING
========================================================= */

function clickFrog(){

  if(game.energy<=0){

    toast("⚡ Out of energy!");

    return;

  }

  game.energy=
    Math.max(
      0,
      game.energy-.35
    );

  const now=performance.now();

  const rapid=
    now-lastClickTime<700;

  if(rapid){

    game.combo=
      Math.min(
        1000,
        game.combo+
        .15*
        categoryPower(14)
      );

    improveMechanic(140);

  }else{

    game.combo=
      Math.max(
        1,
        game.combo*.85
      );

  }

  lastClickTime=now;

  game.bestCombo=
    Math.max(
      game.bestCombo,
      game.combo
    );

  let reward=
    clickPower().mul(
      game.combo
    );


  /* Critical */
  const criticalChance=
    Math.min(
      .8,
      .05+
      (game.mechanics[1]||0)*.003+
      game.prestige*.01
    );

  if(Math.random()<criticalChance){

    reward=
      reward.mul(
        10*
        mechanicPower(1)
      );

    game.criticals++;

    improveMechanic(1);

    floating(
      "💥 CRITICAL!",
      true
    );

  }


  /* Perfect */
  if(
    rapid &&
    Math.random()<
    .08+
    (game.mechanics[2]||0)*.002
  ){

    reward=
      reward.mul(
        2*
        mechanicPower(2)
      );

    improveMechanic(2);

    floating("✨ PERFECT!");

  }


  /* Charged */
  if(
    game.clicks>0 &&
    game.clicks%25===0
  ){

    reward=
      reward.mul(
        5*
        mechanicPower(3)
      );

    improveMechanic(3);

    floating("⚡ CHARGED!");

  }


  /* Golden */
  if(
    Math.random()<
    .004+
    (game.mechanics[4]||0)*.001
  ){

    reward=
      reward.mul(
        20*
        mechanicPower(4)
      );

    improveMechanic(4);

    floating("🟡 GOLDEN!");

  }


  /* Jump */
  if(
    game.clicks>0 &&
    game.clicks%50===0
  ){

    reward=
      reward.mul(
        3*
        mechanicPower(5)
      );

    improveMechanic(5);

  }


  /* Rapid */
  if(rapid){

    reward=
      reward.mul(
        1+
        game.combo*.01
      );

    improveMechanic(6);

  }


  /* Chain */
  if(
    game.clicks>0 &&
    game.clicks%10===0
  ){

    reward=
      reward.mul(
        1.5*
        mechanicPower(7)
      );

    improveMechanic(7);

  }


  /* Lucky */
  if(Math.random()<.03){

    reward=
      reward.mul(
        3*
        mechanicPower(8)
      );

    improveMechanic(8);

    floating("🍀 LUCKY!");

  }


  /* Mega Ribbit */
  if(
    Math.random()<
    .0005+
    game.level*.000002
  ){

    reward=
      reward.mul(
        100*
        mechanicPower(9)
      );

    improveMechanic(9);

    floating(
      "🐸 MEGA RIBBIT!",
      true
    );

  }


  game.clicks++;

  earnCoins(reward);

  improveMechanic(
    0,
    .1
  );

  if(
    game.clicks%100===0
  ){

    improveMechanic(
      10+
      Math.min(
        9,
        Math.floor(
          game.clicks/1000
        )
      ),
      1
    );

  }

  animateFrog();

  renderFast();

}


/* =========================================================
   ANIMATION
========================================================= */

function animateFrog(){

  const frog=
    document.getElementById("frog");

  frog.classList.remove("frog-hit");

  void frog.offsetWidth;

  frog.classList.add("frog-hit");

}


/* =========================================================
   MEGA JUMP
========================================================= */

function megaJump(){

  const cost=
    new BigNumber(5);

  if(game.gems.lessThan(cost)){

    toast("Need 5 💎");

    return;

  }

  game.gems=
    game.gems.sub(cost);

  const reward=
    clickPower().mul(50);

  earnCoins(reward);

  improveMechanic(5,5);

  floating(
    "💥 +"+fmt(reward)
  );

}


/* =========================================================
   FRENZY
========================================================= */

function activateFrenzy(){

  const cost=
    new BigNumber(10);

  if(game.gems.lessThan(cost)){

    toast("Need 10 💎");

    return;

  }

  game.gems=
    game.gems.sub(cost);

  game.eventUntil=
    Date.now()+30000;

  game.eventMultiplier=3;
  game.eventName="🔥 Frog Frenzy";

  improveMechanic(16,2);

  toast("🔥 3× FRENZY!");

}


/* =========================================================
   ENERGY
========================================================= */

function restoreEnergy(){

  if(
    game.gems.lessThan(
      new BigNumber(2)
    )
  ){

    toast("Need 2 💎");

    return;

  }

  game.gems=
    game.gems.sub(
      new BigNumber(2)
    );

  game.energy=
    game.maxEnergy;

  toast("⚡ Energy restored!");

}


/* =========================================================
   EVENTS
========================================================= */

function randomEvent(){

  const event=
    EVENTS[
      Math.floor(
        Math.random()*
        EVENTS.length
      )
    ];

  game.eventName=event.name;
  game.eventMultiplier=event.multiplier;

  game.eventUntil=
    Date.now()+
    event.duration*1000;

  improveMechanic(170,1);
  improveMechanic(171,1);
  improveMechanic(172,1);

  toast(
    event.name+
    " ×"+
    event.multiplier
  );

}


/* =========================================================
   DAILY
========================================================= */

function dayNumber(){

  return Math.floor(
    Date.now()/86400000
  );

}


function dailyReward(){

  const today=dayNumber();

  if(game.dailyDay===today){

    toast("Already collected!");

    return;

  }

  if(game.dailyDay===today-1){

    game.dailyStreak++;

  }else{

    game.dailyStreak=1;

  }

  game.dailyDay=today;

  const amount=
    new BigNumber(
      1000*
      game.dailyStreak*
      game.dailyStreak
    );

  earnCoins(amount);

  game.gems=
    game.gems.add(
      new BigNumber(
        game.dailyStreak*2
      )
    );

  improveMechanic(94,1);
  improveMechanic(95,1);

  toast(
    "🎁 +"+
    fmt(amount)+
    " 🪙"
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

  const discount=
    Math.max(
      .35,
      1-
      (game.mechanics[18]||0)*.005
    );

  const cost=
    new BigNumber(
      pet.cost*
      (level+1)*
      discount
    );

  if(!spendCoins(cost))
    return;

  game.pets[index]=
    level+1;

  improveMechanic(20);
  improveMechanic(21);
  improveMechanic(22);

  if(level===0)
    improveMechanic(23);

  improveMechanic(24);

  if(level>=4)
    improveMechanic(25);

  if(level>=9)
    improveMechanic(26);

  improveMechanic(27);
  improveMechanic(28);
  improveMechanic(29);

  toast(
    "🐾 "+pet.name+
    " is now level "+
    (level+1)
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

    improveMechanic(30);
    improveMechanic(33);

    renderSkins();
    renderFast();

    return;

  }

  const cost=
    new BigNumber(skin.cost);

  if(!spendCoins(cost))
    return;

  game.ownedSkins.push(index);
  game.skin=index;

  improveMechanic(30);
  improveMechanic(31);
  improveMechanic(32);
  improveMechanic(33);

  if(index>=6)
    improveMechanic(34);

  if(index>=8)
    improveMechanic(35);

  if(index>=10)
    improveMechanic(36);

  improveMechanic(37);

  if(game.ownedSkins.length>=3)
    improveMechanic(38);

  improveMechanic(39);

  toast(
    "🎨 Unlocked "+
    skin.name+"!"
  );

  renderSkins();

}


/* =========================================================
   WORLDS
========================================================= */

function travelWorld(index){

  const world=WORLDS[index];

  if(!world)
    return;

  if(game.level<world.level){

    toast(
      "Need level "+
      world.level
    );

    return;

  }

  const cost=
    new BigNumber(world.cost);

  if(!spendCoins(cost))
    return;

  game.world=index;

  for(let i=50;i<60;i++)
    improveMechanic(i);

  toast(
    world.icon+
    " "+world.name
  );

  renderWorlds();
  renderFast();

}


function explore(){

  const reward=
    clickPower().mul(
      10+
      Math.random()*100
    );

  earnCoins(reward);

  game.exploration++;

  improveMechanic(52);
  improveMechanic(58);

  if(Math.random()<.25){

    improveMechanic(53);

    earnCoins(
      reward.mul(5)
    );

  }

  if(Math.random()<.1){

    improveMechanic(55);

    game.gems=
      game.gems.add(5);

  }

  toast(
    "🗺️ +"+fmt(reward)
  );

}


/* =========================================================
   BOSSES
========================================================= */

function bossDamage(){

  let damage=
    clickPower()
    .mul(100);

  damage=
    damage.mul(
      categoryPower(6)
    );

  damage=
    damage.mul(
      categoryPower(7)
    );

  return damage;

}


function fightBoss(index){

  const boss=BOSSES[index];

  if(!boss)
    return;

  const health=
    new BigNumber(boss.health);

  const damage=
    bossDamage();

  if(damage.lessThan(health)){

    toast(
      "Need "+
      fmt(health)+
      " damage"
    );

    return;

  }

  let reward=
    new BigNumber(
      boss.reward
    );

  reward=
    reward.mul(
      1+
      (game.mechanics[66]||0)*.1
    );

  earnCoins(reward);

  game.gems=
    game.gems.add(
      new BigNumber(
        Math.max(
          1,
          boss.reward/10000
        )
      )
    );

  game.bossKills++;

  for(let i=60;i<70;i++)
    improve
