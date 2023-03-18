/**
 * @name millisecondsToSeconds
 * @description Convert milliseconds to seconds.
 *
 * @param {number} milliseconds quantity of milliseconds for convert
 * @returns {number} seconds refer the milliseconds quantity
 *
 * @example
 * millisecondsToSeconds(2000) //2
 */

export default function millisecondsToSeconds(milliseconds: number): number {
    return Math.floor(milliseconds / 1000);
}
