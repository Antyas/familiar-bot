const { getRandom } = require('../../helpers');

module.exports = (data) => {
  if (data.args.length === 1) {
    return `*Наблюдает как ${data.author} выбрасывает ${getRandom(1, data.args[0])} из ${data.args[0]}*`;
  }
  throw new Error();
};
