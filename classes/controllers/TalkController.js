const Controller = require('./Controller');
const song = require('../../dictionaries/commands/song');

module.exports = class extends Controller {
  triggers = [
    'мяу', 'фыр', 'кря', 'хрю',
  ];

  getSentence() {
    return song({ words: [1] });
  }

  isMeow() {
    const { words } = this.data;
    return words?.length < 15 && words.reduce((str, word) => {
      if (this.triggers.includes(word)) str += 'мяу ';
      return str;
    }, '');
  }

  isCall() {
    if (this.data.users?.includes(process.env.BOT_ID)) {
      return `<@${this.data.author}>, ${this.getSentence()}`;
    }
  }

  isRandom() {
    if (!this.getRandom(0, 8)) return this.getSentence();
  }

  reply() {
    const answer = this.isMeow() || this.isCall() || this.isRandom();
    if (answer) this.message.channel.send(answer);
  }
};
