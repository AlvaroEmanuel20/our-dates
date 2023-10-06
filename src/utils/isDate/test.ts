import isDate from '.';

describe('Test if value is a Date instance', () => {
  const date = new Date();

  test('formatted date is not Date instance', () => {
    expect(isDate('03-05-2023')).toBe(false);
  });

  test('string with a date inside is not Date instance', () => {
    expect(isDate(`${date}`)).toBe(false);
  });

  test('Date instance is a date', () => {
    expect(isDate(date)).toBe(true);
  });
});
