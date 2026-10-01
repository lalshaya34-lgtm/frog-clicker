"use strict";

/*
  Big-number representation.
  This prevents numbers from turning into Infinity as quickly
  and avoids expensive giant-number calculations.
*/

class BigNum{

  constructor(m=0,e=0){

    if(m instanceof BigNum){
      this.m=m.m;
      this.e=m.e;
      return;
    }

    if(typeof m === "object" && m !== null){
      this.m=Number(m.m)||0;
      this.e=Number(m.e)||0;
      this.normalize();
      return;
    }

    this.m=Number(m)||0;
    this.e=Number(e)||0;

    this.normalize();
  }

  normalize(){

    if(this.m===0){
      this.e=0;
      return this;
    }

    const p=Math.floor(
      Math.log10(Math.abs(this.m))
    );

    if(Number.isFinite(p)){
      this.m/=10**p;
      this.e+=p;
    }

    return this;
  }

  add(value){

    const x=toBig(value);

    if(!x.m)return new BigNum(this);
    if(!this.m)return new BigNum(x);

    const difference=this.e-x.e;

    if(difference>15)
      return new BigNum(this);

    if(difference<-15)
      return new BigNum(x);

    if(difference>=0){

      this.m+=x.m*10**(-difference);

    }else{

      this.m=x.m+this.m*10**difference;
      this.e=x.e;

    }

    return this.normalize();
  }

  sub(value){

    const x=toBig(value);

    if(this.cmp(x)<0)
      return new BigNum(0);

    return this.add(
      new BigNum(-x.m,x.e)
    );
  }

  mul(value){

    const x=toBig(value);

    this.m*=x.m;
    this.e+=x.e;

    return this.normalize();
  }

  div(value){

    const x=toBig(value);

    if(!x.m)
      return new BigNum(0);

    this.m/=x.m;
    this.e-=x.e;

    return this.normalize();
  }

  cmp(value){

    const x=toBig(value);

    if(!this.m && !x.m)
      return 0;

    if(this.e!==x.e)
      return this.e>x.e?1:-1;

    if(this.m===x.m)
      return 0;

    return this.m>x.m?1:-1;
  }

  number(){

    if(this.e>308)
      return Infinity;

    return this.m*10**this.e;
  }

  string(){

    if(!this.m)
      return "0";

    if(this.e<6)
      return Math.floor(
        this.number()
      ).toLocaleString();

    return this.m.toFixed(2)+"e"+this.e;
  }

}

function toBig(value){
  return value instanceof BigNum
    ? new BigNum(value)
    : new BigNum(value);
}

function saveGame(){

  try{

    localStorage.setItem(
      "frog-frenzy-500",
      JSON.stringify(gameToJSON(game))
    );

  }catch(error){

    console.error(
      "Save failed:",
      error
    );

  }

}

function gameToJSON(value){

  if(value instanceof BigNum){

    return {
      __big:true,
      m:value.m,
      e:value.e
    };

  }

  if(Array.isArray(value))
    return value.map(gameToJSON);

  if(value && typeof value==="object"){

    const result={};

    for(const key in value)
      result[key]=gameToJSON(value[key]);

    return result;
  }

  return value;
}

function restoreJSON(value){

  if(
    value &&
    value.__big
  ){

    return new BigNum(
      value.m,
      value.e
    );

  }

  if(Array.isArray(value))
    return value.map(restoreJSON);

  if(value && typeof value==="object"){

    for(const key in value)
      value[key]=restoreJSON(value[key]);

  }

  return value;
}

function loadGame(){

  const raw=
    localStorage.getItem(
      "frog-frenzy-500"
    );

  if(!raw)
    return;

  try{

    const loaded=
      restoreJSON(
        JSON.parse(raw)
      );

    Object.assign(
      game,
      loaded
    );

    if(
      !Array.isArray(game.mechanics) ||
      game.mechanics.length!==500
    ){

      game.mechanics=
        Array(500).fill(0);

    }

  }catch(error){

    console.error(
      "Save load failed:",
      error
    );

  }

}

function offlineReward(){

  if(!game.lastSave)
    return;

  const seconds=
    Math.min(
      86400,
      Math.max(
        0,
        (Date.now()-game.lastSave)/1000
      )
    );

  if(seconds<30)
    return;

  const reward=
    game.clickPower
      ? game.clickPower()
      : new BigNum(1);

  const earned=
    reward
      .mul(seconds)
      .mul(.15);

  if(earned.cmp(0)>0){

    game.coins=
      game.coins.add(earned);

    setTimeout(
      ()=>{
        toast(
          "🌙 Offline reward: +"+
          earned.string()+" 🪙"
        );
      },
      500
    );

  }

}
