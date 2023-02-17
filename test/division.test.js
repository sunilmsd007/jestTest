const division = require('../src/division');

test("Division of 2 numbers", () => {
    var result = division(6, 2)
    expect(result).toBe(3);
});