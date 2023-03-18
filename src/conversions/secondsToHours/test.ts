import secondsToHours from ".";

describe("Convert seconds to hours", () => {
    test("7200 seconds to hours", () => {
        expect(secondsToHours(7200)).toBe(2);
    });

    test("3600 seconds to hours", () => {
        expect(secondsToHours(3600)).toBe(1);
    });

    test("18000 seconds to hours", () => {
        expect(secondsToHours(18000)).toBe(5);
    });
});
