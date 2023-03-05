import subMilliseconds from ".";

describe("Sub milliseconds to a date", () => {
    const date = new Date(2023, 2, 5, 12, 40, 30, 500);

    test(`Sub 500 milliseconds to date ${date}`, () => {
        expect(subMilliseconds(date, 500)).toStrictEqual(
            new Date(2023, 2, 5, 12, 40, 30, 0)
        );
    });
});
