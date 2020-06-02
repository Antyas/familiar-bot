/* eslint-disable no-param-reassign */
const Controller = require('./Controller');
const song = require('../../dictionaries/commands/song');

const triggers = [
  'мяу', 'фыр', 'кря', 'хрю',
];

module.exports = class extends Controller {
  reply() {
    const say = this.data.words && this.data.words.length < 15 && this.data.words.reduce((s, w) => {
      if (triggers.includes(w)) s += 'мяу ';
      return s;
    }, '');

    if (say) {
      this.message.channel.send(say);
    } else if (this.data.users && this.data.users.includes('491192557167050752')) {
      const answer = `<@${this.data.author}> ${song({ words: [1] })}`;
      this.message.channel.send(answer);
    } else {
      const n = this.getRandom(0, 8);
      if (!n) {
        const answer = song({ words: [1] });
        this.message.channel.send(answer);
      }
    }
  }
};
