/**
 * @name addDays
 *
 * @description Add days to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of days to add
 * @returns {Date} Returns the date with days added
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * addDays(date, 3) //2023-03-08T00:00:00
 */

export default function addDays(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setDate(date.getDate() + qty);
    return date;
}
