/**
 * @name subMilliseconds
 *
 * @description Sub milliseconds to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of milliseconds to sub
 * @returns {Date} Returns the date with milliseconds subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 40, 30, 500) //2023-03-05T12:40:30.500Z
 * subMilliseconds(date, 500) //2023-03-05T12:40:30.000Z
 */

export default function subMilliseconds(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setMilliseconds(date.getMilliseconds() - qty);
    return date;
}
