const Controller = require("./controller");

function createControlledAsync(asyncFunction, options = { timeout: 0 }) {
  let controller = new Controller();
  let controlledAsync = (...params) =>
    new Promise((resolve, reject) => {
      var timeoutId = options?.timeout
        ? setTimeout(() => {
            resolve(false);
          }, options.timeout)
        : null;
      asyncFunction(...params).then((value) => {
        clearTimeout(timeoutId);
        resolve(value);
      });
      controller.once("resolve", (value) => {
        clearTimeout(timeoutId);
        resolve(value);
      });
      controller.once("reject", (value) => {
        clearTimeout(timeoutId);
        resolve(value);
      });
    });
  return [controlledAsync, controller];
}

module.exports = { createControlledAsync, Controller };
