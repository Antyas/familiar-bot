const Discord = require('discord.js');
const mainHandler = require('./handlers/main');

const client = new Discord.Client();

client.login('NDkxMTkyNTU3MTY3MDUwNzUy.Xm_vvQ.c-HR8RfphTS4gn2UI2eTnA24NDc');
client.on('ready', () => console.log('Бот запущен'));

client.on('message', mainHandler);
