import { describe, expect, it } from "vitest";
import { isEmptyList, isEmptyString } from "../utils"; // adjust the import path as needed

describe("isEmptyList", () => {
  it("returns true for an empty array", () => {
    expect(isEmptyList([])).toBe(true);
  });

  it("returns false for non-empty array", () => {
    expect(isEmptyList([1, 2, 3])).toBe(false);
  });

  it("returns false for non-array value", () => {
    expect(isEmptyList(null)).toBe(false);
    expect(isEmptyList(undefined)).toBe(false);
    expect(isEmptyList({})).toBe(false);
    expect(isEmptyList("")).toBe(false);
    expect(isEmptyList(123)).toBe(false);
  });
});

describe("isEmptyString", () => {
  it("returns true for empty string", () => {
    expect(isEmptyString("")).toBe(true);
  });

  it("returns false for non-empty string", () => {
    expect(isEmptyString("hello")).toBe(false);
  });

  it("returns false for non-string value", () => {
    expect(isEmptyString(null)).toBe(false);
    expect(isEmptyString(undefined)).toBe(false);
    expect(isEmptyString([])).toBe(false);
    expect(isEmptyString(0)).toBe(false);
  });
});
