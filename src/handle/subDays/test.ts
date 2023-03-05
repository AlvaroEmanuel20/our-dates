import subDays from ".";

describe("Sub days to a date", () => {
    const date = new Date(2023, 2, 5);

    test(`Sub 3 days to date ${date}`, () => {
        expect(subDays(date, 3)).toStrictEqual(new Date(2023, 2, 2));
    });
});
