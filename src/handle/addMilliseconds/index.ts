/**
 * @name addMilliseconds
 *
 * @description Add milliseconds to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of milliseconds to add
 * @returns {Date} Returns the date with milliseconds added
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 40, 30, 0) //2023-03-05T12:40:30.000Z
 * addMilliseconds(date, 500) //2023-03-05T12:40:30.500Z
 */

export default function addMilliseconds(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setMilliseconds(date.getMilliseconds() + qty);
    return date;
}
