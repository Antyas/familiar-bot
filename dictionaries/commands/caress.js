const ReplyList = require('../../classes/controllers/ReplyList');

const list = new ReplyList([
  () => '*Довольно урчит*',
  () => '*Дает почесать пузико*',
  () => '*Гладит в ответ щупальцами*',
  () => '*Радостно всхрапнул*',
  () => '*Подставляет ушко*',
  () => '*Довольно перебирает щупальцами*',
]);

module.exports = () => list.reply();
