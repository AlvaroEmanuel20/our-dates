import millisecondsToMinutes from '.';

describe('Convert milliseconds to minutes', () => {
  test('60000 milliseconds to minutes', () => {
    expect(millisecondsToMinutes(60000)).toBe(1);
  });

  test('65000 milliseconds to minutes', () => {
    expect(millisecondsToMinutes(65000)).toBe(1);
  });

  test('300000 milliseconds to minutes', () => {
    expect(millisecondsToMinutes(300000)).toBe(5);
  });
});
