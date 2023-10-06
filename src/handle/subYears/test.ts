import subYears from '.';

describe('Sub years to a date', () => {
  const date = new Date(2023, 2, 5);

  test(`Sub 3 years to date ${date}`, () => {
    expect(subYears(date, 3)).toStrictEqual(new Date(2020, 2, 5));
  });
});
