import { HelloAgent } from '../agents/HelloAgent.js';
import { slog } from '../helpers/system-messages.js';

function initEve() {
  // create two agents
  slog("init eve")
  var agent1 = new HelloAgent('agent1');
  var agent2 = new HelloAgent('agent2');

  // send a message to agent1
  agent2.send('agent1', 'Hello agent1!');
}


export {initEve};
