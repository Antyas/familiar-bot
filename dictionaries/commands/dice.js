const { getRandom } = require('../../helpers');

const dictionary = [
  (id, max) => `*Наблюдает как <@${id}> выбрасывает ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Удивлен как <@${id}> выбрасывает ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Бросил щупальцем дайс <@${id}> с результатом ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Достает из астрала дайс для <@${id}> и бросает с результатом ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Показывает <@${id}> ${getRandom(1, max)} присосок на щупальце из ${max}*`,
  (id, max) => `*Выплюнул дайс <@${id}> с результатом ${getRandom(1, max)} из ${max}*`,
];

module.exports = (data) => {
  if (data.args.length !== 1) {
    throw new Error();
  }
  const say = dictionary[getRandom(0, dictionary.length - 1)];
  return say(data.author, data.args[0]);
};
