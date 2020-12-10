import { Client } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

export default class extends Client {
  constructor({ controller, talk, prefix }) {
    super();
    this.prefix = prefix;
    this.controller = controller;
    this.talk = talk;
  }

  isInvalid(message) {
    return message.author.bot // is bot
    || message.content.length > 256 // or message is very long
    || message.content === this.prefix; // or is only prefix
  }

  parseCommand(message) {
    const [command, ...props] = message.content
      .replace(this.prefix, '')
      .replace('  ', ' ')
      .split(' ');

    return {
      message,
      command,
      props,
    };
  }

  runCommand(message) {
    const request = this.parseCommand(message);
    const response = this.controller.answer(request);
    message.channel.send(response);
  }

  runTalk(message) {
    if (this.isInvalid(message)) return;
    const response = this.talk.answer(message);
    message.channel.send(response);
  }

  onMessage(message) {
    if (this.isInvalid(message)) return;
    return message.content.startsWith(this.prefix)
      ? this.runCommand(message)
      : this.runTalk(message);
  }

  start() {
    this.login();
    this.on('ready', () => console.log('Ready...'));
    this.on('message', this.onMessage);
  }
}
