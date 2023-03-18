import hoursToMinutes from ".";

describe("Convert hours to minutes", () => {
    test("2 hours to minutes", () => {
        expect(hoursToMinutes(2)).toBe(120);
    });

    test("1 hour to minutes", () => {
        expect(hoursToMinutes(1)).toBe(60);
    });

    test("5 hours to minutes", () => {
        expect(hoursToMinutes(5)).toBe(300);
    });
});
