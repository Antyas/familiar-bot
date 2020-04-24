const errors = require('../../dictionaries/errors');

module.exports = class {
  constructor(message) {
    this.message = message;
    this.data = {};
    this.parse();
  }

  sendError(e) {
    console.log(e);
    const error = errors[this.getRandom(0, errors.length - 1)];
    this.message.channel.send(error);
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  parse() {
    const str = this.message.content
      .replace('?', '')
      .toLowerCase();

    const userLinks = str.match(/<@!?\d+>/g) || [];
    const users = userLinks.map((item) => item.replace(/<|>|@|!/g, ''));
    const words = str.replace(/<@!?\d+>/g).match(/[а-яё0-9]+/g);

    console.log(users);

    this.data = {
      users,
      words,
      author: this.message.author.id,
    };
  }
};
