import addDays from ".";

describe("Add days to a date", () => {
    const date = new Date(2023, 2, 5);

    test(`Add 3 days to date ${date}`, () => {
        expect(addDays(date, 3)).toStrictEqual(new Date(2023, 2, 8));
    });
});
