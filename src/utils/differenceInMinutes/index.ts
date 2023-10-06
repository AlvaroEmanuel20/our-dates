import millisecondsToMinutes from '../../conversions/millisecondsToMinutes';

/**
 *
 * @name differenceInMinutes
 * @description Returns the difference between two dates in minutes.
 *
 * @param {Date} laterDate later date
 * @param {Date} earlierDate earlier date for operation
 * @returns {number} returns the difference in minutes
 *
 * @example
 * const laterDate = new Date(2023, 4, 2, 15, 40);
 * const earlierDate = new Date(2023, 4, 2, 15, 20);
 * differenceInMinutes(laterDate, earlierDate) //20
 *
 */

export default function differenceInMinutes(
  laterDate: Date,
  earlierDate: Date
): number {
  const diffTime = laterDate.getTime() - earlierDate.getTime();
  return millisecondsToMinutes(diffTime);
}
