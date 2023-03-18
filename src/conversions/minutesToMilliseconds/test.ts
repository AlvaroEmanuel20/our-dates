import minutesToMilliseconds from ".";

describe("Convert minutes to milliseconds", () => {
    test("2 minutes to milliseconds", () => {
        expect(minutesToMilliseconds(2)).toBe(120000);
    });

    test("1 minute to milliseconds", () => {
        expect(minutesToMilliseconds(1)).toBe(60000);
    });

    test("5 minutes to milliseconds", () => {
        expect(minutesToMilliseconds(5)).toBe(300000);
    });
});
