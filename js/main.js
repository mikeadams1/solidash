import { initSolid } from './modules/solid-auth.js';
import { initEve } from './modules/eve.js';
import { slog } from './helpers/system-messages.js';
//import { initTripledoc } from './modules/tripledoc.js'

async function init(){

  slog("init main")
  initSolid();
  initEve();
  //initTripledoc();

}

init();
