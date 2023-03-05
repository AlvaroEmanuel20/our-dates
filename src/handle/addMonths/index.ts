/**
 * @name addMonths
 *
 * @description Add months to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of months to add
 * @returns {Date} Returns the date with months added
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * addMonths(date, 3) //2023-06-05T00:00:00
 */

export default function addMonths(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setMonth(date.getMonth() + qty);
    return date;
}
