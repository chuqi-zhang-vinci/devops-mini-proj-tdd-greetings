const greet = require('../utils/greet')

test('Jean-Kevin equals Hello, Jean-Kevin.', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})

test(("'' equals Hello, my friend."), () => {
    expect(greet("")).toBe("Hello, my friend.")
})