// const Bot = require('./classes/Bot');

// const bot = new Bot('NDkxMTkyNTU3MTY3MDUwNzUy.Xm_vvQ.c-HR8RfphTS4gn2UI2eTnA24NDc');
// bot.start();

const Parser = require('./classes/Parser');
const Builder = require('./classes/Builder');
const text = require('./materials/text');

const parser = new Parser(text);
const builder = new Builder(parser.getDict());

console.log(builder.build());
