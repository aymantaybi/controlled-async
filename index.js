const Controller = require('./controller');

function createControlledAsync(asyncFunction) {
    let controller = new Controller();
    let controlledAsync = (...params) => new Promise((resolve, reject) => {
        asyncFunction(...params).then(value => {
            resolve(value);
        });
        controller.on('resolve', (value) => {
            resolve(value);
        });
        controller.on('reject', (value) => {
            resolve(value);
        });
    });
    return [controlledAsync, controller];
};

module.exports = createControlledAsync;