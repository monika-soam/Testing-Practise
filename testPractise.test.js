const Str = require("./testPractise.js");

test('string length', () => {

  expect(Str.stringLength('mndcdcs')).toBe(7);

  expect(() => Str.stringLength('mndcdcsudkl')).toThrow(Error);

});
test('reverse string', () => {
  expect(Str.reverseString("monika")).toBe('akinom');

});

test("Capitalize string", () => {
  expect(Str.capitalize("vinita")).toBe('Vinita');

});

describe("Calculator", () => {
  const calculator = new Str.calculator(5, 5);
  test("add", () => {
    expect(calculator.add()).toBe(10);
  });

  test("subtract", () => {
    expect(calculator.subtract()).toBe(0);
  });

  test("multiply", () => {
    expect(calculator.multiply()).toBe(25);
  });

  test("divide", () => {
    expect(calculator.divide()).toBe(1);
  });

  test("capitalize", () => {
    expect(calculator.capitalize("bag")).toBe("BAG");
  });
});