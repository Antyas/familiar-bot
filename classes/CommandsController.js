const Controller = require('./Controller');
const commands = require('../dictionaries/commands');

module.exports = class extends Controller {
  getCommand(str) {
    return str.replace('!', '').toLowerCase().match(/^[А-Яа-яЁё]+/)[0];
  }

  getArguments(str) {
    str.match(/\(.+\)/)[0].replace(/\(|\)/g, '').split(',');
  }

  handle(m) {
    try {
      const command = this.getCommand(m.content);

      const data = {
        author: m.channel.type === 'dm'
          ? m.author.username
          : m.guild.members.cache.get(m.author.id).nickname,
        args: this.getArguments(m.content),
      };

      const answer = commands.get(command)(data);
      m.channel.send(answer);
    } catch (e) {
      console.log(e);
      m.channel.send(this.getErrorText());
    }
  }
};
