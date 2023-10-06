/**
 * @name hoursToSeconds
 * @description Convert hours to seconds.
 *
 * @param {number} hours quantity of hours for convert
 * @returns {number} seconds refer the hours quantity
 *
 * @example
 * hoursToSeconds(2) //7200
 */

export default function hoursToSeconds(hours: number): number {
  return Math.floor(hours * 3600);
}
