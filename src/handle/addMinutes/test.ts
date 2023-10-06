import addMinutes from '.';

describe('Add minutes to a date', () => {
  const date = new Date(2023, 2, 5, 12, 45, 0);

  test(`Add 3 minutes to date ${date}`, () => {
    expect(addMinutes(date, 3)).toStrictEqual(new Date(2023, 2, 5, 12, 48, 0));
  });
});
