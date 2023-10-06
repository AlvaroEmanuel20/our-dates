import millisecondsToSeconds from '../../conversions/millisecondsToSeconds';

/**
 *
 * @name differenceInSeconds
 * @description Returns the difference between two dates in seconds.
 *
 * @param {Date} laterDate later date
 * @param {Date} earlierDate earlier date for operation
 * @returns {number} returns the difference in seconds
 *
 * @example
 * const laterDate = new Date(2023, 4, 2, 15, 40, 50);
 * const earlierDate = new Date(2023, 4, 2, 15, 40, 30);
 * differenceInSeconds(laterDate, earlierDate) //20
 *
 */

export default function differenceInSeconds(
  laterDate: Date,
  earlierDate: Date
): number {
  const diffTime = laterDate.getTime() - earlierDate.getTime();
  return millisecondsToSeconds(diffTime);
}
