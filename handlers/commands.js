const commands = require('../dictionaries/commands');
const { getCommand, getArguments, getErrorText } = require('../helpers');

module.exports = async (m) => {
  try {
    const command = getCommand(m.content);

    const data = {
      author: m.channel.type === 'dm'
        ? m.author.username
        : m.guild.members.cache.get(m.author.id).nickname,
      args: getArguments(m.content),
    };

    const answer = commands.get(command)(data);
    m.channel.send(getErrorText());
    m.channel.send(answer);
  } catch (e) {
    console.log(e);
    m.channel.send(getErrorText());
  }
};
