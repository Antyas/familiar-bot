const Controller = require('./Controller');
const commands = require('../../dictionaries/commands');

module.exports = class extends Controller {
  reply() {
    try {
      const command = this.data.words.shift();
      const answer = commands.get(command)(this.data);
      this.message.channel.send(answer);
    } catch (e) {
      this.sendError(e);
    }
  }
};
