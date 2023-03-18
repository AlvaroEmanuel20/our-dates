/**
 * @name minutesToHours
 * @description Convert minutes to hours.
 *
 * @param {number} minutes quantity of minutes for convert
 * @returns {number} hours refer the minutes quantity
 *
 * @example
 * minutesToHours(120) //2
 * minutesToHours(389) //6 //Returns only integer part
 */

export default function minutesToHours(minutes: number): number {
    return Math.floor(minutes / 60);
}
