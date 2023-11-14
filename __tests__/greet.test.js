const greet = require('../utils/greet')

test('Jean-Kevin equals Hello, Jean-Kevin.', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})

// test('should be Jill and Jade.', () => {
//     expect(greet['Jill', 'Jane']).toBe('Hello, Jill and Jane.')

test("'' equals Hello, my friend.", () => {
    expect(greet('')).toBe('Hello, my friend.')
})

test('null equals Hello, my friend.', () => {
    expect(greet(null)).toBe('Hello, my friend.')
})

test('undefined equals Hello, my friend.', () => {
    expect(greet(undefined)).toBe('Hello, my friend.')
})

test("'     ' equals Hello, my friend.", () => {
    expect(greet('     ')).toBe('Hello, my friend.')
})

test("JERRY equals HELLO, JERRY!", () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
})