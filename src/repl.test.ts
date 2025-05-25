import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    }, {
        input: " big cheese ",
        expected: ["big", "cheese"],
    }, {
        input: " specsavers ",
        expected: ["specsavers"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        // TODO: call cleanInput with the input here
        let actual = cleanInput(input);

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);

        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    })
})