/**
 * @name addMinutes
 *
 * @description Add minutes to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of minutes to add
 * @returns {Date} Returns the date with minutes added
 *
 * @example
 * const date = new Date(2023, 2, 5, 12, 45, 0) //2023-03-05T12:45:00.000Z
 * addMinutes(date, 3) //2023-03-05T12:48:00.000Z
 */

export default function addMinutes(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setMinutes(date.getMinutes() + qty);
    return date;
}
