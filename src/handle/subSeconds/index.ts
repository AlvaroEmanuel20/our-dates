/**
 * @name subSeconds
 *
 * @description Sub seconds to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of seconds to sub
 * @returns {Date} Returns the date with seconds subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 40, 30) //2023-03-05T12:40:30.000Z
 * subSeconds(date, 30) //2023-03-05T12:40:00.000Z
 */

export default function subSeconds(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setSeconds(date.getSeconds() - qty);
    return date;
}
