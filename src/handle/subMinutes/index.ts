/**
 * @name subMinutes
 *
 * @description Sub minutes to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of minutes to sub
 * @returns {Date} Returns the date with minutes subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 45, 0) //2023-03-05T12:45:00.000Z
 * subMinutes(date, 3) //2023-03-05T12:42:00.000Z
 */

export default function subMinutes(date: Date, qty: number): Date {
  if (!qty) return date;

  date.setMinutes(date.getMinutes() - qty);
  return date;
}
