// tests/example.test.js

import add from "../src/add.js";
import at from "../src/at.js";
import camelCase from "../src/camelCase.js";
import capitalize from "../src/capitalize.js";
import get from "../src/get.js";
import upperFirst from "../src/upperFirst.js";
import toString from "../src/toString.js";

describe("add.js", () => {
  test("add(2, 3) should return 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("add with negative numbers", () => {
    expect(add(-1, 2)).toBe(1);
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

  test('camelCase("--foo-bar--") returns "fooBar"', () => {
    expect(camelCase("--foo-bar--")).toBe("fooBar");
  });
});

describe("capitalize.js", () => {
  test('capitalize("hello") returns "Hello"', () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

describe("get.js", () => {
  test("get({a:1}, 'a') returns 1", () => {
    expect(get({ a: 1 }, "a")).toBe(1);
  });

  test("get nested object", () => {
    expect(get({ a: { b: 2 } }, "a.b")).toBe(2);
  });
});

describe("upperFirst.js", () => {
  test('upperFirst("hello") returns "Hello"', () => {
    expect(upperFirst("hello")).toBe("Hello");
  });
});

describe("toString.js", () => {
  test("toString(123) returns '123'", () => {
    expect(toString(123)).toBe("123");
  });

  test('toString(null) returns "null"', () => {
    expect(toString(null)).toBe("null");
  });
});
