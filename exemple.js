const createControlledAsync = require('./index');

(async () => {

    let [controlledSleep, sleepController] = createControlledAsync(sleep);

    setTimeout(() => {
        sleepController.resolve({ done: false });
    }, 2000);

    let result = await controlledSleep(5000);
    console.log(result);

})();

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}