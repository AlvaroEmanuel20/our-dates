import differenceInMinutes from '.';

describe('Test diff in minutes between two dates', () => {
  test('diff between 2023-03-02T15:40:00 and 2023-03-02T15:20:00', () => {
    expect(
      differenceInMinutes(
        new Date(2023, 4, 2, 15, 40),
        new Date(2023, 4, 2, 15, 20)
      )
    ).toBe(20);
  });

  test('diff between 2023-03-03T15:40:00 and 2023-03-02T15:40:00', () => {
    expect(
      differenceInMinutes(
        new Date(2023, 4, 3, 15, 40),
        new Date(2023, 4, 2, 15, 40)
      )
    ).toBe(1440);
  });
});
