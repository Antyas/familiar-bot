const { getUsers, getRandom } = require('../../helpers');

const dictionary = [
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
];

module.exports = (data) => {
  if (data.args.length !== 1) {
    throw new Error();
  }

  let target = getUsers(data.args[0])[0];
  if (target === '348195205943656459' || target === '491192557167050752') {
    target = data.author;
  }

  const say = dictionary[getRandom(0, dictionary.length - 1)];
  return say(target);
};
