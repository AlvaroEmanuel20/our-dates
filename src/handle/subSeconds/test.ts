import subSeconds from ".";

describe("Sub seconds to a date", () => {
    const date = new Date(2023, 2, 5, 12, 40, 30);

    test(`Sub 30 seconds to date ${date}`, () => {
        expect(subSeconds(date, 30)).toStrictEqual(new Date(2023, 2, 5, 12, 40, 0));
    });
});
