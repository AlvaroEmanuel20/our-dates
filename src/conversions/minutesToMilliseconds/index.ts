/**
 * @name minutesToMilliseconds
 * @description Convert minutes to milliseconds.
 *
 * @param {number} minutes quantity of minutes for convert
 * @returns {number} milliseconds refer the minutes quantity
 *
 * @example
 * minutesToMilliseconds(2) //120000
 */

export default function minutesToMilliseconds(minutes: number): number {
    return Math.floor(minutes * 60000);
}
