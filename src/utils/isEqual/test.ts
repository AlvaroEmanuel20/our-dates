import isEqual from "./index";

describe("Test if two dates are equals", () => {
    const date = new Date(2023, 2, 20);

    test(`${date} is equals to ${new Date(2023, 2, 20)}`, () => {
        expect(isEqual(date, new Date(2023, 2, 20))).toBe(true);
    });

    test(`${date} is not equals to ${new Date(2023, 1, 20)}`, () => {
        expect(isEqual(date, new Date(2023, 1, 20))).toBe(false);
    });

    test(`${date} is not equals to ${new Date(2023, 2, 22)}`, () => {
        expect(isEqual(date, new Date(2023, 2, 22))).toBe(false);
    });
});
