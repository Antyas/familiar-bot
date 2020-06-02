const Discord = require('discord.js');
const CommandsController = require('./controllers/CommandsController');
const TalkController = require('./controllers/TalkController');

module.exports = class extends Discord.Client {
  constructor(botToken) {
    super();
    this.botToken = botToken;
  }

  start() {
    this.login(this.botToken);
    this.on('ready', () => console.log('Бот запущен'));

    this.on('message', (m) => {
      if (m.author.bot || m.content === '?') return;
      // || m.author.id !== '348195205943656459' || m.channel.type !== 'dm'


      try {
        const controller = m.content.trim().startsWith('?')
          ? new CommandsController(m)
          : new TalkController(m);
        controller.reply();
      } catch (e) {
        m.channel
          .send('Мне плохо >.<')
          .then(() => { throw e; });
      }
    });
  }
};
