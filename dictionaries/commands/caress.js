const { getRandom } = require('../../helpers');

const dictionary = [
  () => '*Довольно урчит*',
  () => '*Дает почесать пузико*',
  () => '*Гладит в ответ щупальцами*',
  () => '*Всхрапнул*',
  () => '*Подставляет ушко*',
  () => '*Довольно перебирает щупальцами*',
];

module.exports = () => {
  const say = dictionary[getRandom(0, dictionary.length - 1)];
  return say();
};
