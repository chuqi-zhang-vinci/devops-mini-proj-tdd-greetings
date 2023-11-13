const greet = require('../utils/greet')

test('adds 1 + 2 to equal 3', () => {
    expect(greet(1, 2)).toBe(3)
})