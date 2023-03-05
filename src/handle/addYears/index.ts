/**
 * @name addYears
 *
 * @description Add years to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of years to add
 * @returns {Date} Returns the date with years added
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * addYears(date, 3) //2026-03-05T00:00:00
 */

export default function addYears(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setFullYear(date.getFullYear() + qty);
    return date;
}
