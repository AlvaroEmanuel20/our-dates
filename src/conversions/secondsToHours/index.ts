/**
 * @name secondsToHours
 * @description Convert seconds to hours.
 *
 * @param {number} seconds quantity of seconds for convert
 * @returns {number} hours refer the seconds quantity
 *
 * @example
 * secondsToHours(7200) //2
 */

export default function secondsToHours(seconds: number): number {
    return Math.floor(seconds / 3600);
}
