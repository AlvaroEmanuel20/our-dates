/**
 *
 * @name isDate
 * @description Return true if value passed is a valid date.
 *
 * @param {unknown} value any value for check
 * @returns {boolean} returns true if is valid a date
 *
 * @example
 * isDate(new Date()) //true
 *
 * @example
 * isDate("2014-02-31") false
 *
 */

export default function isDate(value: unknown): boolean {
    return value instanceof Date;
}
