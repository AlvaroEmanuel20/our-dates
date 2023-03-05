import subMinutes from ".";

describe("Sub minutes to a date", () => {
    const date = new Date(2023, 2, 5, 12, 45, 0);

    test(`Sub 3 minutes to date ${date}`, () => {
        expect(subMinutes(date, 3)).toStrictEqual(new Date(2023, 2, 5, 12, 42, 0));
    });
});
