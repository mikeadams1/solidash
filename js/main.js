import { initSolid } from './modules/solid-auth.js';
import { initEve } from './modules/eve.js';
//import { initTripledoc } from './modules/tripledoc.js'

async function init(){

  console.log("init main")
  initSolid();
  initEve();
  //initTripledoc();

}

init();
