import daysToWeek from '.';

describe('Convert days to week', () => {
  test('14 days to week', () => {
    expect(daysToWeek(14)).toBe(2);
  });

  test('30 days to week', () => {
    expect(daysToWeek(30)).toBe(4);
  });

  test('5 days to week', () => {
    expect(daysToWeek(12)).toBe(1);
  });
});
