import subMonths from ".";

describe("Sub months to a date", () => {
    const date = new Date(2023, 2, 5);

    test(`Sub 3 months to date ${date}`, () => {
        expect(subMonths(date, 2)).toStrictEqual(new Date(2023, 0, 5));
    });
});
