const multiplication = require('../src/multiplication');

test("Multiplication of 2 numbers", () => {
    var result = multiplication(6, 2)
    expect(result).toBe(12);
});