const readline = require("readline-sync");

module.exports = class CoordinatorFramework {
  #displayResult() {}
  #getInput() {}

  // This is like the listen() method in Express, except we're just interacting
  // locally.
  start() {
    let input;
    while (input !== "exit") {
      this.#displayResult();
      input = this.#getInput();
    }
  }
  use(configCallback) {}
  defineStep(operator, operationCallback) {}
};
