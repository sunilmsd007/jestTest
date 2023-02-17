const difference = require('../src/difference');

test("Difference of 2 numbers", () => {
    var result = difference(5, 2)
    expect(result).toBe(3);
});