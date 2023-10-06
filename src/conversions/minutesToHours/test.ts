import minutesToHours from '.';

describe('Convert minutes to hours', () => {
  test('120 minutes to hours', () => {
    expect(minutesToHours(120)).toBe(2);
  });

  test('300 minute to hours', () => {
    expect(minutesToHours(300)).toBe(5);
  });

  test('60 minutes to hours', () => {
    expect(minutesToHours(60)).toBe(1);
  });

  test('389 minutes to hours', () => {
    expect(minutesToHours(389)).toBe(6);
  });
});
