/**
 * @name subHours
 *
 * @description Sub hours to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of hours to sub
 * @returns {Date} Returns the date with hours subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5, 13, 0, 0) //2023-03-05T13:00:00.000Z
 * subHours(date, 3) //2023-03-05T10:00:00.000Z
 */

export default function subHours(date: Date, qty: number): Date {
  if (!qty) return date;

  date.setHours(date.getHours() - qty);
  return date;
}
