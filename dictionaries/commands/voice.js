const { getRandom } = require('../../helpers');

const dictionary = [
  () => 'Мяу мазафака',
  () => 'Муррррр?',
  () => 'Мяу мяу миииааааууу',
  () => '*Всхрапнул*',
  () => 'Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн',
  () => '*Издаёт адские вопли*',
];

module.exports = () => {
  const say = dictionary[getRandom(0, dictionary.length - 1)];
  return say();
};
