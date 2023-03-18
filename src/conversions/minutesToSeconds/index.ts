/**
 * @name minutesToSeconds
 * @description Convert minutes to seconds.
 *
 * @param {number} minutes quantity of minutes for convert
 * @returns {number} seconds refer the minutes quantity
 *
 * @example
 * minutesToSeconds(2) //120
 */

export default function minutesToSeconds(minutes: number): number {
    return Math.floor(minutes * 60);
}
