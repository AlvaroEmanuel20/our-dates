/**
 * @name hoursToMinutes
 * @description Convert hours to minutes.
 *
 * @param {number} hours quantity of hours for convert
 * @returns {number} minutes refer the hours quantity
 *
 * @example
 * hoursToMinutes(2) //120
 */

export default function hoursToMinutes(hours: number): number {
  return Math.floor(hours * 60);
}
