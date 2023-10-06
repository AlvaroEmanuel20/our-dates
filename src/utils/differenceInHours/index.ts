import millisecondsToHours from '../../conversions/millisecondsToHours';

/**
 *
 * @name differenceInHours
 * @description Returns the difference between two dates in hours.
 *
 * @param {Date} laterDate later date
 * @param {Date} earlierDate earlier date for operation
 * @returns {number} returns the difference in hours
 *
 * @example
 * const laterDate = new Date(2023, 4, 2, 15, 40);
 * const earlierDate = new Date(2023, 4, 2, 12, 40);
 * differenceInHours(laterDate, earlierDate) //3
 *
 */

export default function differenceInHours(
  laterDate: Date,
  earlierDate: Date
): number {
  const diffTime = laterDate.getTime() - earlierDate.getTime();
  return millisecondsToHours(diffTime);
}
