/**
 * @name monthLength
 * @description
 * Get the last day (month length) of a month.
 *
 * @param {number} month month do you need get the last day (0(January) - 11(December))
 * @param {number} year year do you want use in the method
 * @returns {(number | undefined)}
 * returns the last day or undefined if month or year be not passed
 *
 * @example
 * monthLength(1, 2023); //28
 * monthLength(1, 2024); //29
 */

export default function monthLength(
  month: number,
  year: number
): number | undefined {
  if (!month || !year) return undefined;
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}
