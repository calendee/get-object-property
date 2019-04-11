import { getObjectProperty as gop } from "../dist/gop";

let testObject;

test("it returns undefined for null test object", () => {
  expect(gop(null, "a")).toBe(undefined);
});

test("it returns default for null test object", () => {
  expect(gop(null, "a", true)).toBe(true);
});

test("it returns undefined for string test object", () => {
  expect(gop("string", "a")).toBe(undefined);
});

test("it returns default for string test object", () => {
  expect(gop("string", "a", true)).toBe(true);
});

test("it returns undefined for numeric test object", () => {
  expect(gop(0, "a")).toBe(undefined);
});

test("it returns default for numeric test object", () => {
  expect(gop(0, "a", true)).toBe(true);
});

test("it returns undefined for a numeric path", () => {
  expect(gop({}, 0)).toBe(undefined);
});

test("it returns default for a numeric path", () => {
  expect(gop({}, 0, true)).toBe(true);
});

test("it returns undefined for a null path", () => {
  expect(gop({}, null)).toBe(undefined);
});

test("it returns default for a null path", () => {
  expect(gop({}, null, true)).toBe(true);
});

test("it returns undefined for missing property", () => {
  expect(gop({}, "a")).toBe(undefined);
});

test("it returns default value for missing property", () => {
  expect(gop({}, "a", true)).toBe(true);
});

test("it returns undefined for missing nested property", () => {
  expect(gop({}, "a.b")).toBe(undefined);
});

test("it returns default value for missing nested property", () => {
  expect(gop({}, "a.b", true)).toBe(true);
});

test("it returns undefined for missing triple nested property", () => {
  expect(gop({}, "a.b.c")).toBe(undefined);
});

test("it returns default value for missing triple nested property", () => {
  expect(gop({}, "a.b.c", true)).toBe(true);
});

test("it returns single property of object", () => {
  testObject = { a: 0 };
  expect(gop(testObject, "a")).toBe(0);
});

test("it returns nested property nested object", () => {
  testObject = { a: { b: 1 } };
  expect(gop(testObject, "a")).toEqual({ b: 1 });
});

test("it returns double nested property of object", () => {
  testObject = { a: { b: 1 } };
  expect(gop(testObject, "a.b")).toBe(1);
});

test("it returns triple nested property of object", () => {
  testObject = { a: { b: { c: 2 } } };
  expect(gop(testObject, "a.b.c")).toBe(2);
});

test("it returns quadruple nested property of object", () => {
  testObject = { a: { b: { c: { d: 3 } } } };
  expect(gop(testObject, "a.b.c.d")).toBe(3);
});
