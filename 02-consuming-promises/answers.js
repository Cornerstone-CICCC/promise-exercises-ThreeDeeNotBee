/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
async function waitForPromise(promise, action) {
  const value = await promise
  action(value)
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */
async function consumePromise(promise, consumer, handler) {
  return promise
    .then((result) => {
      consumer(result)
    })
    .catch((error) => {
      handler(error)
    })
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
}
