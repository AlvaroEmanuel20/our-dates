/**
 * @name subYears
 *
 * @description Sub years to a date
 *
 * @param {Date} date date to execute the operation
 * @param {number} qty quantity of years to sub
 * @returns {Date} Returns the date with years subtracted
 *
 * @example
 * const date = new Date(2023, 2, 5) //2023-03-05T00:00:00
 * subYears(date, 3) //2020-03-05T00:00:00
 */

export default function subYears(date: Date, qty: number): Date {
    if (!qty) return date;

    date.setFullYear(date.getFullYear() - qty);
    return date;
}
