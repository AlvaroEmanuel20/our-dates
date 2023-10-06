import hoursToMilliseconds from '.';

describe('Convert hours to milliseconds', () => {
  test('2 hours to milliseconds', () => {
    expect(hoursToMilliseconds(2)).toBe(7200000);
  });

  test('1 hour to milliseconds', () => {
    expect(hoursToMilliseconds(1)).toBe(3600000);
  });

  test('5 hours to milliseconds', () => {
    expect(hoursToMilliseconds(5)).toBe(18000000);
  });
});
