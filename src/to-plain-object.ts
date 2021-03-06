import copy from 'fast-copy'

/**
 * Mixes in a method to return just a plain object with no additional methods
 * @private
 * @param data - Any plain JSON response returned from the API
 * @return Enhanced object with toPlainObject method
 */
export default function toPlainObject<T = object, R = T>(
  data: T
): T & {
  /**
   * Returns this entity as a plain JS object
   */
  toPlainObject(): R
} {
  return Object.defineProperty(data, 'toPlainObject', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      return copy(this)
    },
  })
}
