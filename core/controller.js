export default class {
  #map = null;

  #errors = null;

  constructor(errors, commands) {
    this.#map = new Map(commands);
    this.#errors = errors;
  }

  answer(request) {
    if (!this.#map.has(request.command)) return this.#errors.random();

    const handle = this.#map.get(request.command);
    return handle(request);
  }
}
