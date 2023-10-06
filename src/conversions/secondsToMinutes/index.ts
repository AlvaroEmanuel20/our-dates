/**
 * @name secondsToMinutes
 * @description Convert seconds to minutes.
 *
 * @param {number} seconds quantity of seconds for convert
 * @returns {number} minutes refer the seconds quantity
 *
 * @example
 * secondsToMinutes(120) //2
 * secondsToMinutes(389) //6 //Returns only integer part
 */

export default function secondsToMinutes(seconds: number): number {
  return Math.floor(seconds / 60);
}
