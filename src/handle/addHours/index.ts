/**
 * @name addHours
 *
 * @description Add hours to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of hours to add
 * @returns {Date} Returns the date with hours added
 *
 * @example
 * const date = new Date(2023, 2, 5, 13, 0, 0) //2023-03-05T13:00:00.000Z
 * addHours(date, 3) //2023-03-05T16:00:00.000Z
 */

export default function addHours(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setHours(date.getHours() + qty);
    return date;
}
