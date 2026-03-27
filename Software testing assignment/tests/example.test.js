// tests/example.test.js

import add from "../src/add.js";
import at from "../src/at.js";
import camelCase from "../src/camelCase.js";
import capitalize from "../src/capitalize.js";

describe("add.js", () => {
  test("add(2, 3) should return 5", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("at.js", () => {
  test('at(["a", "b", "c"], [0,2]) returns ["a","c"]', () => {
    expect(at(["a", "b", "c"], [0, 2])).toEqual(["a", "c"]);
  });
});

describe("camelCase.js", () => {
  test('camelCase("Foo Bar") returns "fooBar"', () => {
    expect(camelCase("Foo Bar")).toBe("fooBar");
  });
});

describe("capitalize.js", () => {
  test('capitalize("hello") returns "Hello"', () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
