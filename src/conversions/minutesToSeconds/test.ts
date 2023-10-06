import minutesToSeconds from '.';

describe('Convert minutes to seconds', () => {
  test('2 minutes to seconds', () => {
    expect(minutesToSeconds(2)).toBe(120);
  });

  test('1 minute to seconds', () => {
    expect(minutesToSeconds(1)).toBe(60);
  });

  test('5 minutes to seconds', () => {
    expect(minutesToSeconds(5)).toBe(300);
  });
});
