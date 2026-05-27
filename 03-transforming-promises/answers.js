/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        try {
          const transformedValue = transformer(value)
          resolve(transformedValue)
        } catch (error) {
          reject(error)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then((value) => {
    const num = Number(value)
    if (isNaN(num)) {
      throw `Cannot convert '${value}' to a number!`
    }
    return num * num
  })
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(/* IMPLEMENT ME! */)
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    (value) => {
      throw value
    },
    (error) => error,
  )
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
}
