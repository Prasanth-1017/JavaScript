import { describe, expect, test } from "vitest";

import squaresWithThree from "../Scripts/Three Strikes.js";

describe("Squares With Three", () => {
    test("When Input 1", () => {
        expect(squaresWithThree(1)).toBe(0);
    });

    test("When Input 10", () => {
        expect(squaresWithThree(10)).toBe(1);
    });

    test("When Input 30", () => {
        expect(squaresWithThree(30)).toBe(3);
    });

    test("When Input 100", () => {
        expect(squaresWithThree(100)).toBe(19);
    });

    test("When Input 1000", () => {
        expect(squaresWithThree(1000)).toBe(326);
    });
});
