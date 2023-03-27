import differenceInHours from ".";

describe("Test diff in hours of two dates", () => {
    test("diff between 2023-03-02T15:40:00 and 2023-03-02T12:40:00", () => {
        expect(
            differenceInHours(
                new Date(2023, 4, 2, 15, 40),
                new Date(2023, 4, 2, 12, 40)
            )
        ).toBe(3);
    });

    test("diff between 2023-03-03T15:40:00 and 2023-03-02T12:40:00", () => {
        expect(
            differenceInHours(
                new Date(2023, 4, 3, 15, 40),
                new Date(2023, 4, 2, 12, 40)
            )
        ).toBe(27);
    });
});
