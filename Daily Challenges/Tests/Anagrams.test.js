import { test, expect, describe } from "vitest";

import checkAnagrams from "../Scripts/Anagrams.js";

describe("Testing Anagrams", () => {
    test("Testing Positive Cases", () => {
        expect(checkAnagrams("listen", "silent")).toBe(true);
        expect(checkAnagrams("School master", "The classroom")).toBe(true);
        expect(checkAnagrams("A gentleman", "Elegant man")).toBe(true);
    });

    test("Testing Negative Cases", () => {
        expect(checkAnagrams("Hello", "World")).toBe(false);
        expect(checkAnagrams("apple", "banana")).toBe(false);
        expect(checkAnagrams("cat", "dog")).toBe(false);
    });
});
