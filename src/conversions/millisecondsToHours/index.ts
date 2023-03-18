/**
 * @name millisecondsToHours
 * @description Convert milliseconds to hours.
 *
 * @param {number} milliseconds quantity of milliseconds for convert
 * @returns {number} hours refer the milliseconds quantity
 *
 * @example
 * millisecondsToHours(3600000) //1
 */

export default function millisecondsToHours(milliseconds: number): number {
    return Math.floor(milliseconds / 3600000);
}
