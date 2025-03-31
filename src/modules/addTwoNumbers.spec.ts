import { addTwoNumbers, addTwoNumbersFunc } from "./addTwoNumbers";

const addTwoNumbersTestCases: [number, number, number][] = [
  [3, 1, 2],
  [1, -1, 2],
  [-2, -1, -1],
];

describe("addTwoNumbers Tests", () => {
  it.each(addTwoNumbersTestCases)(
    "should return '%s' when firstNumber = '%s', secondNumber = '%s'",
    (expectedResult, firstNumber, secondNumber) => {
      const result = addTwoNumbers(firstNumber, secondNumber);
      expect(result).toBe(expectedResult);
    }
  );

  //it("should combine two strings together, even though the TS compiler/linter is not happy (static testing)", () => {
  //  const result = addTwoNumbers("Fred", "die");
  //
  //  expect(result).toBe("Freddie");
  //});
});

describe("addTwoNumbersFunc Tests", () => {
  it.each(addTwoNumbersTestCases)(
    "should return '%s' when firstNumber = '%s', secondNumber = '%s'",
    (expectedResult, firstNumber, secondNumber) => {
      const result = addTwoNumbersFunc(firstNumber, secondNumber);
      expect(result).toBe(expectedResult);
    }
  );

  // it("should combine two strings together, even though the TS compiler/linter is not happy (static testing)", () => {
  //   const result = addTwoNumbersFunc("Fred", "die");
  //
  //   expect(result).toBe("Freddie");
  // });
});
