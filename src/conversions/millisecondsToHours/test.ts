import millisecondsToHours from '.';

describe('Convert milliseconds to hours', () => {
  test('3600000 milliseconds to hours', () => {
    expect(millisecondsToHours(3600000)).toBe(1);
  });

  test('7200000 milliseconds to hours', () => {
    expect(millisecondsToHours(7200000)).toBe(2);
  });

  test('18000000 milliseconds to hours', () => {
    expect(millisecondsToHours(18000000)).toBe(5);
  });
});
