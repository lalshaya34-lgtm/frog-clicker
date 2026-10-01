"use strict";

/*
  Big-number representation.

  Numbers are stored as:
  mantissa × 10^exponent

  This avoids the game breaking when the player reaches
  extremely large values.
*/

class BigNumber{

  constructor(value=0,exponent=null){

    if(value instanceof BigNumber){

      this.m=value.m;
      this.e=value.e;

      return;
    }

    if(
      typeof value==="object" &&
      value &&
      typeof value.m==="number"
    ){

      this.m=value.m;
      this.e=value.e||0;

      this.normalize();

      return;
    }

    if(exponent!==null){

      this.m=Number(value)||0;
      this.e=Number(exponent)||0;

      this.normalize();

      return;
    }

    value=Number(value)||0;

    if(value===0){

      this.m=0;
      this.e=0;

      return;
    }

    this.m=value;
    this.e=0;

    this.normalize();

  }


  normalize(){

    if(!Number.isFinite(this.m)){

      this.m=9.99;
      this.e=9999;

      return this;
    }

    if(this.m===0){

      this.e=0;

      return this;
    }

    const power=Math.floor(
      Math.log10(Math.abs(this.m))
    );

    this.m/=10**power;
    this.e+=power;

    return this;
  }


  add(other){

    other=BN(other);

    if(this.m===0)
      return new BigNumber(other);

    if(other.m===0)
      return new BigNumber(this);

    const difference=this.e-other.e;

    if(difference>16)
      return new BigNumber(this);

    if(difference<-16)
      return new BigNumber(other);

    if(difference>=0){

      return new BigNumber(
        this.m+
        other.m*10**(-difference),
        this.e
      );

    }

    return new BigNumber(
      other.m+
      this.m*10**difference,
      other.e
    );

  }


  sub(other){

    other=BN(other);

    if(this.compare(other)<0)
      return new BigNumber(0);

    return this.add(
      new BigNumber(-other.m,other.e)
    );

  }


  mul(other){

    other=BN(other);

    return new BigNumber(
      this.m*other.m,
      this.e+other.e
    );

  }


  div(other){

    other=BN(other);

    if(other.m===0)
      return new BigNumber(0);

    return new BigNumber(
      this.m/other.m,
      this.e-other.e
    );

  }


  compare(other){

    other=BN(other);

    if(this.m===0 && other.m===0)
      return 0;

    if(this.e!==other.e)
      return this.e>other.e?1:-1;

    if(this.m===other.m)
      return 0;

    return this.m>other.m?1:-1;

  }


  greaterOrEqual(other){

    return this.compare(other)>=0;

  }


  lessThan(other){

    return this.compare(other)<0;

  }


  toNumber(){

    if(this.e>308)
      return Infinity;

    return this.m*10**this.e;

  }


  toString(){

    if(this.m===0)
      return "0";

    if(this.e<6){

      const n=this.toNumber();

      if(Number.isFinite(n))
        return Math.floor(n).toLocaleString();

    }

    return this.m.toFixed(2)+"e"+this.e;

  }

}


function BN(value){

  return value instanceof BigNumber
    ?new BigNumber(value)
    :new BigNumber(value);

}


function serialize(value){

  if(value instanceof BigNumber){

    return{
      __bigNumber:true,
      m:value.m,
      e:value.e
    };

  }

  if(Array.isArray(value))
    return value.map(serialize);

  if(value && typeof value==="object"){

    const result={};

    for(const key in value)
      result[key]=serialize(value[key]);

    return result;

  }

  return value;

}


function deserialize(value){

  if(
    value &&
    value.__bigNumber===true
  ){

    return new BigNumber(
      value.m,
      value.e
    );

  }

  if(Array.isArray(value))
    return value.map(deserialize);

  if(value && typeof value==="object"){

    for(const key in value)
      value[key]=deserialize(value[key]);

  }

  return value;

}


function createDefaultState(){

  return{

    coins:new BigNumber(0),

    gems:new BigNumber(50),

    xp:new BigNumber(0),

    level:1,

    clicks:0,

    criticals:0,

    combo:1,

    bestCombo:1,

    energy:100,

    maxEnergy:100,

    world:0,

    skin:0,

    ownedSkins:[0],

    pets:{},

    friends:[],

    clan:null,

    prestige:0,

    ascension:0,

    rebirth:0,

    mutations:0,

    crafts:0,

    bossKills:0,

    exploration:0,

    eventUntil:0,

    eventMultiplier:1,

    eventName:"",

    dailyDay:-1,

    dailyStreak:0,

    totalCoins:new BigNumber(0),

    mechanics:Array(500).fill(0),

    lastSaved:Date.now()

  };

}


function saveGame(){

  if(!window.game)
    return;

  game.lastSaved=Date.now();

  try{

    localStorage.setItem(
      "frog-frenzy-500",
      JSON.stringify(
        serialize(game)
      )
    );

  }catch(error){

    console.error(
      "Could not save game:",
      error
    );

  }

}


function loadGame(){

  const raw=
    localStorage.getItem(
      "frog-frenzy-500"
    );

  if(!raw)
    return createDefaultState();

  try{

    const loaded=
      deserialize(
        JSON.parse(raw)
      );

    const fresh=
      createDefaultState();

    const result=
      Object.assign(
        fresh,
        loaded
      );

    if(
      !Array.isArray(result.mechanics) ||
      result.mechanics.length!==500
    ){

      result.mechanics=
        Array(500).fill(0);

    }

    return result;

  }catch(error){

    console.error(
      "Save was corrupted:",
      error
    );

    return createDefaultState();

  }

}


function offlineReward(){

  if(!window.game)
    return null;

  const elapsed=
    Math.min(
      86400,
      Math.max(
        0,
        (Date.now()-game.lastSaved)/1000
      )
    );

  if(elapsed<30)
    return null;

  return elapsed;

}
