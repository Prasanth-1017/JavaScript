import { describe, expect, test } from "vitest";

import milePace from "../Scripts/Mile Pace";

describe("Possible Test Cases", () => {
    test("Testing Return Type", () => {
        expect(typeof milePace(3, "24:00")).toBe("string");
    });

    test("Testcases", () => {
        expect(milePace(3, "24:00")).toBe("08:00");
        expect(milePace(1, "06:45")).toBe("06:45");
        expect(milePace(2, "07:00")).toBe("03:30");
        expect(milePace(26.2, "120:35")).toBe("04:36");
    });
});
