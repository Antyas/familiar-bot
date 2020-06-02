console.time('start');
require('dotenv').config();
const Bot = require('./classes/Bot');

const bot = new Bot(process.env.BOT_TOKEN);
bot.start();

console.timeEnd('start');
