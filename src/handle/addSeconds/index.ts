/**
 * @name addSeconds
 *
 * @description Add seconds to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of seconds to add
 * @returns {Date} Returns the date with seconds added
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 40, 0) //2023-03-05T12:40:00.000Z
 * addSeconds(date, 30) //2023-03-05T12:40:30.000Z
 */

export default function addSeconds(date: Date, qty: number): Date {
  if (!qty) return date;

  date.setSeconds(date.getSeconds() + qty);
  return date;
}
