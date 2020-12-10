export default class {
  #list = [];

  constructor(list) {
    this.#list = list;
  }

  random(data) {
    const number = Math.floor(Math.random() * this.#list.length);
    return this.#list[number](data);
  }
}