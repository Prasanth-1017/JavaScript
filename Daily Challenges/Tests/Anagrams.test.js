import { test, expect, describe } from "vitest";

import Anagrams from "../Scripts/Anagrams.js";

describe("Testing Anagrams", () => {
    test("Testing Positive Cases", () => {
        expect(Anagrams("listen", "silent")).toBe(true);
        expect(Anagrams("School master", "The classroom")).toBe(true);
        expect(Anagrams("A gentleman", "Elegant man")).toBe(true);
    });

    test("Testing Negative Cases", () => {
        expect(Anagrams("Hello", "World")).toBe(false);
        expect(Anagrams("apple", "banana")).toBe(false);
        expect(Anagrams("cat", "dog")).toBe(false);
    });
});
