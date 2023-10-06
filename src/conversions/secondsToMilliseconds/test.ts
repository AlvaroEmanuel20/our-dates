import secondsToMilliseconds from '.';

describe('Convert seconds to milliseconds', () => {
  test('2 seconds to milliseconds', () => {
    expect(secondsToMilliseconds(2)).toBe(2000);
  });

  test('1 second to milliseconds', () => {
    expect(secondsToMilliseconds(1)).toBe(1000);
  });

  test('5 seconds to milliseconds', () => {
    expect(secondsToMilliseconds(5)).toBe(5000);
  });
});
