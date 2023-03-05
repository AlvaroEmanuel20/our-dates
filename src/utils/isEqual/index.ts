/**
 * @name isEqual
 * @description Return true if two dates are equals
 *
 * @param {Date} date first date to compare
 * @param {Date} dateToCompare second date to compare
 * @returns {boolean} return true if two dates are equals
 *
 * @example
 * isEqual(new Date(2023, 2, 20), new Date(2023, 2, 20)) //true
 *
 * @example
 * isEqual(new Date(2023, 1, 20), new Date(2023, 2, 20)) //false
 */

export default function isEqual(date: Date, dateToCompare: Date): boolean {
    return date.getTime() === dateToCompare.getTime();
}
