const { getRandom } = require('../../helpers');

module.exports = class {
  constructor(list) {
    this.list = list;
  }

  reply(data) {
    const f = this.list[getRandom(0, this.list.length - 1)];
    return f(data);
  }
};
