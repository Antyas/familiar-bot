const { getRandom } = require('../../helpers');

/*
const dictionary = [
  (id, max) => `*Наблюдает как <@${id}> выбрасывает ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Удивлен как <@${id}> выбрасывает ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Бросил щупальцем дайс <@${id}> с результатом ${getRandom(1, max)} из ${max}*`,
  (id, max) =>
    `*Достает из астрала дайс для <@${id}> и бросает с результатом ${getRandom(1, max)} из ${max}*`,
  (id, max) => `*Показывает <@${id}> ${getRandom(1, max)} присосок на щупальце из ${max}*`,
  (id, max) => `*Выплюнул дайс <@${id}> с результатом ${getRandom(1, max)} из ${max}*`,
];
*/

module.exports = (data) => {
  const dice = +data.args[0];
  if (!Number.isInteger(dice) || dice < 0 || dice > 1000) {
    throw new Error(`Выход за пределы допустимых значений: ${dice}`);
  }
  // const say = dictionary[getRandom(0, dictionary.length - 1)];
  // return say(data.author, dice);

  return `<@${data.author}> ${getRandom(1, dice)} из ${dice}`;
};
