const Discord = require('discord.js');
const CommandsController = require('./CommandsController');
const TalkController = require('./TalkController');

const command = new CommandsController();
const talk = new TalkController();

module.exports = class extends Discord.Client {
  constructor(botToken) {
    super();
    this.botToken = botToken;
  }

  start() {
    this.login(this.botToken);
    this.on('ready', () => console.log('Бот запущен'));
    this.on('message', (m) => {
      if (m.author.bot) return;
      // || m.author.id !== '348195205943656459' || m.channel.type !== 'dm'
      return m.content.startsWith('!') ? command(m) : talk(m);
    });
  }
};
