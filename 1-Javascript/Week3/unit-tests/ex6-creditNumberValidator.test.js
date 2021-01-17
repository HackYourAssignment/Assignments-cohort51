"use strict";
const path = require("path");
const {
  beforeAllHelper,
} = require("../../../test-automation/unit-test-helpers");

const exercisePath = path.join(
  __dirname,
  "../homework/ex6-creditNumberValidator.js"
);

describe("validateCreditNumber", () => {
  let logSpy;
  let validateCreditNumber;

  beforeAll(() => {
    const { exports } = beforeAllHelper(exercisePath);
    validateCreditNumber = exports;
  });

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should reject a92332119c011112 (invalid characters)", () => {
    validateCreditNumber("a92332119c011112");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toBe(
      "Invalid! The input a92332119c011112 should contain only numbers!"
    );
  });

  it("should reject 4444444444444444 (all digits the same)", () => {
    validateCreditNumber("4444444444444444");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toBe(
      "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!"
    );
  });

  it("should accept 6666666666661666 (valid)", () => {
    validateCreditNumber("6666666666661666");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toBe(
      "Success! The input 6666666666661666 is a valid credit card number!"
    );
  });

  it("should reject 1111111111111110 (sum < 16)", () => {
    validateCreditNumber("1111111111111110");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toEqual(
      expect.not.stringContaining("Success")
    );
  });

  it("should reject 6666666666666661 (final odd number)", () => {
    validateCreditNumber("6666666666666661");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toEqual(
      expect.not.stringContaining("Success")
    );
  });

  it("should reject 6666666666666 (length !== 16)", () => {
    validateCreditNumber("6666666666666");
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.mock.calls[0][0]).toEqual(
      expect.not.stringContaining("Success")
    );
  });
});