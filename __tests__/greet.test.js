const greet = require('../utils/greet')

test('Jean-Kevin equals Hello, Jean-Kevin.', () => {
    expect(greet("Jean-Kevin")).toBe("Hello, Jean-Kevin.");
})

test('should be Jill and Jade.', () => {
    expect(greet['Jill', 'Jane']).toBe('Hello, Jill and Jane.')
})