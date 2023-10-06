import addMilliseconds from '.';

describe('Add milliseconds to a date', () => {
  const date = new Date(2023, 2, 5, 12, 40, 30, 0);

  test(`Add 500 milliseconds to date ${date}`, () => {
    expect(addMilliseconds(date, 500)).toStrictEqual(
      new Date(2023, 2, 5, 12, 40, 30, 500)
    );
  });
});
