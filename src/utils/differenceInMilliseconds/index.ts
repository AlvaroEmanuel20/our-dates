/**
 *
 * @name differenceInMilliseconds
 * @description Returns the difference between two dates in milliseconds.
 *
 * @param {Date} laterDate later date
 * @param {Date} earlierDate earlier date for operation
 * @returns {number} returns the difference in milliseconds
 *
 * @example
 * const laterDate = new Date(2023, 4, 2, 15, 40, 50, 500);
 * const earlierDate = new Date(2023, 4, 2, 15, 40, 50, 200);
 * differenceInMilliseconds(laterDate, earlierDate) //300
 *
 */

export default function differenceInMilliseconds(
    laterDate: Date,
    earlierDate: Date
): number {
    return laterDate.getTime() - earlierDate.getTime();
}
