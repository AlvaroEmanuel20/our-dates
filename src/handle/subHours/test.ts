import subHours from ".";

describe("Sub hours to a date", () => {
    const date = new Date(2023, 2, 5, 13, 0, 0);

    test(`Sub 3 hours to date ${date}`, () => {
        expect(subHours(date, 3)).toStrictEqual(new Date(2023, 2, 5, 10, 0, 0));
    });
});
