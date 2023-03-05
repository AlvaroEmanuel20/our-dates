import addHours from ".";

describe("Add hours to a date", () => {
    const date = new Date(2023, 2, 5, 13, 0, 0);

    test(`Add 3 hours to date ${date}`, () => {
        expect(addHours(date, 3)).toStrictEqual(new Date(2023, 2, 5, 16, 0, 0));
    });
});
