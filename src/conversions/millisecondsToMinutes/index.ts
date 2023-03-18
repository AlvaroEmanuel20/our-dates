/**
 * @name millisecondsToMinutes
 * @description Convert milliseconds to minutes.
 *
 * @param {number} milliseconds quantity of milliseconds for convert
 * @returns {number} minutes refer the milliseconds quantity
 *
 * @example
 * millisecondsToMinutes(60000) //1
 * millisecondsToMinutes(65000) //1 //Returns only integer part
 */

export default function millisecondsToMinutes(milliseconds: number): number {
    return Math.floor(milliseconds / 60000);
}
