/**
 * @name daysToWeek
 * @description Convert days to week.
 *
 * @param {number} days quantity of days for convert
 * @returns {number} weeks refer the days quantity
 *
 * @example
 * daysToWeek(14) //2
 * daysToWeek(12) //2 //Returns only integer part
 */

export default function daysToWeek(days: number): number {
  return Math.floor(days / 7);
}
