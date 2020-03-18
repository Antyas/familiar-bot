const { getUsers, getRandom } = require('../../helpers');

const dictionary = [
  (id) => `*Лизнул <@${id}> в щеку*`,
  (id) => `*Подкрался, и стремительно лизнул <@${id}> в шею*`,
  (id) => `*Уселся на голове <@${id}> и зализывает прическу языком*`,
  (id) => `*Обхватил <@${id}> щупальцами и вылизывает лицо*`,
  (id) => `*Присосался к ноге <@${id}> и лижет её*`,
];

module.exports = (data) => {
  if (data.args.length !== 1) {
    throw new Error();
  }
  const say = dictionary[getRandom(0, dictionary.length - 1)];
  return say(getUsers(data.args[0])[0]);
};
