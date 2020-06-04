const Controller = require('./Controller');
const dict = require('../../dictionaries/commands/song/dict');

module.exports = class extends Controller {
  triggers = [
    'мяу', 'фыр', 'кря', 'хрю',
  ];

  getSentence(word) {
    return dict.builder.sentence(word);
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
      if (this.data.original.includes('расскажи про')) {
        const answer = `<@${this.data.author}>, ${this.getSentence(this.data.words.pop())}`;
        if (!answer) return `<@${this.data.author}>, Не знаю про это ничего`;
        return answer;
      }

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
