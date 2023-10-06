import hoursToSeconds from '.';

describe('Convert hours to seconds', () => {
  test('2 hours to seconds', () => {
    expect(hoursToSeconds(2)).toBe(7200);
  });

  test('1 hour to seconds', () => {
    expect(hoursToSeconds(1)).toBe(3600);
  });

  test('5 hours to seconds', () => {
    expect(hoursToSeconds(5)).toBe(18000);
  });
});
