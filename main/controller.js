import Controller from '../core/controller.js';
import errors from './errors';

import dice from './commands/dice.js';
import lick from './commands/lick.js';
import aggression from './commands/aggression.js';
import voice from './commands/voice.js';
import caress from './commands/caress.js';
import song from './commands/song.js';

export default new Controller(errors, [
  ['к', dice],
  ['лизни', lick],
  ['атакуй', aggression],
  ['голос', voice],
  ['гладить', caress],
  ['песня', song],
]);
