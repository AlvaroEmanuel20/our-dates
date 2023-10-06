import differenceInSeconds from '.';

describe('Test diff in seconds between two dates', () => {
  test('diff between 2023-03-02T15:40:50 and 2023-03-02T15:40:30', () => {
    expect(
      differenceInSeconds(
        new Date(2023, 4, 2, 15, 40, 50),
        new Date(2023, 4, 2, 15, 40, 30)
      )
    ).toBe(20);
  });

  test('diff between 2023-03-03T15:40:50 and 2023-03-02T15:40:50', () => {
    expect(
      differenceInSeconds(
        new Date(2023, 4, 3, 15, 40, 50),
        new Date(2023, 4, 2, 15, 40, 50)
      )
    ).toBe(86400);
  });
});
