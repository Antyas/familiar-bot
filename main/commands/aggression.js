import Phrases from '../../core/phrases.js'

const phrases = new Phrases([
  (id) => `*Нассал <@${id}> в тапки*`,
  (id) => `*Наводит на <@${id}> порчу*`,
  (id) => `*Грызет ботинок <@${id}>*`,
  (id) => `*Шипит на <@${id}>*`,
  (id) => `*Рассыпает горох в постель <@${id}>*`,
  (id) => `*Подложил кнопку на стул <@${id}>*`,
  (id) => `*Пилит крепление люстры над <@${id}>*`,
  (id) => `*Подсыпает слабительное в стакан <@${id}>*`,
  (id) => `*Душит щупальцами куклу вуду <@${id}>*`,
  (id) => `*Пытаесться скастовать файербол в <@${id}>*`,
  (id) => `*Жалуется ктулху на <@${id}>*`,
  (id) => `*Чешется над тарелкой <@${id}>*`,
  (id) => `*Двусмысленно угрожает щупальцами <@${id}>*`,
  (id) => `*Громко мяучит на ухо <@${id}>*`,
]);

export default (data) => {
  if (!data.users.length) throw new Error('Нет цели для агрессии');

  const taboo = [process.env.BOT_ID, process.env.BOT_FATHER_ID];

  return data.users
    .map((user) => list.reply(taboo.includes(user) ? data.author : user))
    .join('\n');
};
