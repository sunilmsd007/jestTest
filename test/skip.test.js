const mathOperations = require('../src/calculator.js');

describe("Calculator Tests", () => {
    xtest("Addition of 2 numbers", () => {
        var result = mathOperations.sum(1, 2)
        expect(result).toBe(3);
    });

    test("Subtraction of 2 numbers", () => {
        var result = mathOperations.diff(10, 2)
        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        var result = mathOperations.product(2, 8)
        expect(result).toBe(16);
    });

    test.skip("Division of 2 numbers", () => {
        var result = mathOperations.divide(24, 8)
        expect(result).toBe(3);
    });
})