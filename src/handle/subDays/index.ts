/**
 * @name subDays
 *
 * @description Sub days to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of days to sub
 * @returns {Date} Returns the date with days subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * subDays(date, 3) //2023-03-02T00:00:00
 */

export default function subDays(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setDate(date.getDate() - qty);
    return date;
}
