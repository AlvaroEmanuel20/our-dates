import format from "./index";

describe("format a date with differents formats", () => {
    const date = new Date(2023, 2, 5);

    test("format based in MM-dd-yyyy", () => {
        expect(format(date, "MM-dd-yyyy")).toBe("03-05-2023");
    });

    test("format based in dd-MM-yyyy", () => {
        expect(format(date, "dd-MM-yyyy")).toBe("05-03-2023");
    });

    test("format based in MM/dd/yyyy", () => {
        expect(format(date, "MM/dd/yyyy")).toBe("03/05/2023");
    });

    test("format based in dd/MM/yyyy", () => {
        expect(format(date, "dd/MM/yyyy")).toBe("05/03/2023");
    });
});
