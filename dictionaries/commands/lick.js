const ReplyList = require('../../classes/controllers/ReplyList');

const list = new ReplyList([
  (id) => `*Уверенно лизнул <@${id}> в щеку*`,
  (id) => `*Подкрался, и стремительно лизнул <@${id}> в шею*`,
  (id) => `*Уселся на голове <@${id}> и зализывает прическу языком*`,
  (id) => `*Обхватил <@${id}> щупальцами и вылизывает лицо*`,
  (id) => `*Присосался к ноге <@${id}> и лижет её*`,
  (id) => `*Стеснительно лизнул <@${id}> в щёку*`,
  (id) => `*Делает ментальный лизь разума <@${id}>*`,
]);

module.exports = (data) => {
  const taboo = ['491192557167050752'];

  return data.users
    .map((user) => list.reply(taboo.includes(user) ? data.author : user))
    .join('\n');
};
