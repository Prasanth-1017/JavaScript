import { describe, expect, test } from "vitest";

import findTarget from "../Scripts/Targeted Sum.js";

describe("Testing Targeted Sum", () => {
    test("Testing Positive Cases", () => {
        expect(findTarget([2, 7, 11, 15], 9)).toBeDefined();
        expect(findTarget([2, 7, 11, 15], 9)).toHaveLength(2);
        expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test("Checking For Array, Expecting Array", () => {
        expect(Array.isArray(findTarget([2, 7, 11, 15], 9))).toBe(true);
    });

    test("Testing Negative Cases", () => {
        expect(findTarget([1, 3, 5, 7], 14)).toBe("Target Not Found");
        expect(findTarget([1, 3, 5, 6, 7, 8], 2)).toBe("Target Not Found");
    });
});
