import secondsToMinutes from '.';

describe('Convert seconds to minutes', () => {
  test('120 seconds to minutes', () => {
    expect(secondsToMinutes(120)).toBe(2);
  });

  test('300 seconds to minutes', () => {
    expect(secondsToMinutes(300)).toBe(5);
  });

  test('60 seconds to minutes', () => {
    expect(secondsToMinutes(60)).toBe(1);
  });

  test('389 seconds to minutes', () => {
    expect(secondsToMinutes(389)).toBe(6);
  });
});
