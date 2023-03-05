import addYears from ".";

describe("Add years to a date", () => {
    const date = new Date(2023, 2, 5);

    test(`Add 3 years to date ${date}`, () => {
        expect(addYears(date, 3)).toStrictEqual(new Date(2026, 2, 5));
    });
});
