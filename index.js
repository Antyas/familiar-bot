console.time('start');
import Bot from './core/bot.js';
import controller from './main/controller.js';

const config = {
  prefix: '+',
  controller,
};

const bot = new Bot(config);
bot.start();

console.timeEnd('start');



