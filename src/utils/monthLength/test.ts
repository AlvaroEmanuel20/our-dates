import monthLength from '.';

describe('Get the last day of month', () => {
  test('Get the last day of february(2023)', () => {
    expect(monthLength(1, 2023)).toBe(28);
  });

  test('Get the last day of december(2023)', () => {
    expect(monthLength(11, 2023)).toBe(31);
  });
});
