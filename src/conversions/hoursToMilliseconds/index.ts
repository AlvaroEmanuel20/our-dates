/**
 * @name hoursToMilliseconds
 * @description Convert hours to milliseconds.
 *
 * @param {number} hours quantity of hours for convert
 * @returns {number} milliseconds refer the hours quantity
 *
 * @example
 * hoursToMilliseconds(2) //7200000
 */

export default function hoursToMilliseconds(hours: number): number {
    return hours * 3600000;
}
