const { EventEmitter } = require('events');

class Controller {

    constructor() {
        this.eventEmitter = new EventEmitter();
    }
    on(eventName, listener) {
        this.eventEmitter.on(eventName, listener)
    }
    resolve(value) {
        this.eventEmitter.emit('resolve', value);
    }
    reject(value) {
        this.eventEmitter.emit('reject', value);
    }
}

module.exports = Controller;