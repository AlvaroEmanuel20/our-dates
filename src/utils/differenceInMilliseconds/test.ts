import differenceInMilliseconds from '.';

describe('Test diff in milliseconds between two dates', () => {
  test('diff between 2023-03-02T15:40:50:500 and 2023-03-02T15:40:50:200', () => {
    expect(
      differenceInMilliseconds(
        new Date(2023, 4, 2, 15, 40, 50, 500),
        new Date(2023, 4, 2, 15, 40, 50, 200)
      )
    ).toBe(300);
  });

  test('diff between 2023-03-03T15:40:50:200 and 2023-03-02T15:40:50:200', () => {
    expect(
      differenceInMilliseconds(
        new Date(2023, 4, 3, 15, 40, 50, 200),
        new Date(2023, 4, 2, 15, 40, 50, 200)
      )
    ).toBe(86400000);
  });
});
