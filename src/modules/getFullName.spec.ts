import { getFullName, getFullNameFromObject } from "./getFullName";

const fullNameTestCases: [string, string, string, null | string | undefined][] =
  [
    ["Frederick James", "Frederick", "James", undefined],
    ["Frederick James", "Frederick", "James", null],
    ["Frederick James", "Frederick", "James", ""],
    ["Frederick James", "Frederick", "James", " "],
    ["Frederick James", "Frederick", "James", "  "],
    ["Frederick William James", "Frederick", "James", "William"],
    ["Frederick William James", "Frederick", "James", " William "],
    ["Frederick William James", "  Frederick    ", "  James ", "   William "],
    ["William", "", "", "William"],
  ];

describe("getFullName", () => {
  it.each(fullNameTestCases)(
    "should return '%s' when firstName = '%s', lastName = '%s', and middleName = '%s'",
    (expectedResult, firstName, lastName, middleName) => {
      const result = getFullName(firstName, lastName, middleName);
      expect(result).toBe(expectedResult);
    }
  );
});

describe("getFullNameFromObject", () => {
  it.each(fullNameTestCases)(
    "should return '%s' when firstName = '%s', lastName = '%s', and middleName = '%s'",
    (expectedResult, firstName, lastName, middleName) => {
      const result = getFullNameFromObject({ firstName, lastName, middleName });
      expect(result).toBe(expectedResult);
    }
  );
});
