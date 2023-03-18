import millisecondsToSeconds from ".";

describe("Convert milliseconds to seconds", () => {
    test("2000 milliseconds to seconds", () => {
        expect(millisecondsToSeconds(2000)).toBe(2);
    });

    test("10000 milliseconds to seconds", () => {
        expect(millisecondsToSeconds(10000)).toBe(10);
    });

    test("18000 milliseconds to seconds", () => {
        expect(millisecondsToSeconds(18000)).toBe(18);
    });
});
