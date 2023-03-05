import addSeconds from ".";

describe("Add seconds to a date", () => {
    const date = new Date(2023, 2, 5, 12, 40, 0);

    test(`Add 30 seconds to date ${date}`, () => {
        expect(addSeconds(date, 30)).toStrictEqual(new Date(2023, 2, 5, 12, 40, 30));
    });
});
