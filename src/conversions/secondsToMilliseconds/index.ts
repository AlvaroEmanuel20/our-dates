/**
 * @name secondsToMilliseconds
 * @description Convert seconds to milliseconds.
 *
 * @param {number} seconds quantity of seconds for convert
 * @returns {number} milliseconds refer the seconds quantity
 *
 * @example
 * secondsToMilliseconds(2) //2000
 */

export default function secondsToMilliseconds(seconds: number): number {
    return Math.floor(seconds * 1000);
}
