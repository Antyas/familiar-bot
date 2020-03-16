const talk = require('./talk');
const commands = require('./commands');

module.exports = (m) => {
  if (m.author.bot || m.author.id !== '348195205943656459' || m.channel.type !== 'dm') return;
  return m.content.startsWith('!') ? commands(m) : talk(m);
};
