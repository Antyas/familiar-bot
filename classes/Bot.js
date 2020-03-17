const Discord = require('discord.js');
const mainHandler = require('../handlers/main');

module.exports = class extends Discord.Client {
  constructor(botToken) {
    super();
    this.botToken = botToken;
  }

  start() {
    this.login(this.botToken);
    this.on('ready', () => console.log('Бот запущен'));
    this.on('message', mainHandler);
  }
};
