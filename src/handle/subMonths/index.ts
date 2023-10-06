/**
 * @name subMonths
 *
 * @description Sub months to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of months to sub
 * @returns {Date} Returns the date with months subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * subMonths(date, 2) //2023-01-05T00:00:00
 */

export default function subMonths(date: Date, qty: number): Date {
  if (!qty) return date;

  date.setMonth(date.getMonth() - qty);
  return date;
}
