const Discord = require('discord.js');
const CommandsController = require('./controllers/CommandsController');
const TalkController = require('./controllers/TalkController');

module.exports = class extends Discord.Client {
  constructor(botToken) {
    super();
    this.botToken = botToken;
  }

  onMessage(m) {
    // режим тестирования
    // if (m.author.id !== process.env.BOT_FATHER_ID || m.channel.type !== 'dm') return;

    if (m.author.bot || m.content === '?') return;

    try {
      const controller = m.content.trim().startsWith('?')
        ? new CommandsController(m)
        : new TalkController(m);

      controller.reply();
    } catch (e) {
      m.channel
        .send('Мне плохо >.<')
        .then(() => console.log(e));
    }
  }

  start() {
    this.login(this.botToken);
    this.on('ready', () => console.log('Бот запущен'));
    this.on('message', this.onMessage);
  }
};
