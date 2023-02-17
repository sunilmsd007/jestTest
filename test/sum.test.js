const sum = require('../src/sum');

test("Sum of 2 numbers", () => {
    var result = sum(1, 2)
    expect(result).toBe(3);
});