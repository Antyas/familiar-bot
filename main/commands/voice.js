const ReplyList = require('../../classes/controllers/ReplyList');

const list = new ReplyList([
  () => 'Мяу мазафака',
  () => 'Муррррр?',
  () => 'Мяу мяу миииааааууу',
  () => '*Всхрапнул*',
  () => 'Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн',
  () => '*Издаёт адские вопли*',
]);

module.exports = () => list.reply();
