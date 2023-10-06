import addMonths from '.';

describe('Add months to a date', () => {
  const date = new Date(2023, 2, 5);

  test(`Add 3 months to date ${date}`, () => {
    expect(addMonths(date, 3)).toStrictEqual(new Date(2023, 5, 5));
  });
});
