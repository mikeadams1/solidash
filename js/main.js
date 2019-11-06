import { initSolid } from './modules/solid-auth.js';
import { initEve } from './modules/eve.js';

async function init(){

  console.log("init main")
  initSolid();
  initEve();

}

init();
