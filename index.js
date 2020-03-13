const Discord = require('discord.js');
const mainHandler = require('./handlers/main');

const client = new Discord.Client();

client.login('NDkxMTkyNTU3MTY3MDUwNzUy.XmuKsA.z5eapyaTOondHVf24e5Adyj83ng');
client.on('ready', () => console.log('Бот запущен'));

client.on('message', mainHandler);
