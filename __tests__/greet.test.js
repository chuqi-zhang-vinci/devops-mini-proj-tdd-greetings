const greet = require('../utils/greet')

test('Jean-Kevin equals Hello, Jean-Kevin.', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})

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

test('JERRY equals HELLO, JERRY!', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!')
})

test("['Kratos', 'Thanathos'] equals Hello, Kratos and Thanathos.", () => {
    expect(greet(['Kratos', 'Thanathos'])).toBe('Hello, Kratos and Thanathos.')
})

test('[“Kratos”, “Thanathos”, “Hypnos”] equals Hello, Kratos, Thanathos and Hypnos.', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'])).toBe('Hello, Kratos, Thanathos and Hypnos.')
})

test('[“KRATOS”, “Thanathos”, “Hypnos”] equals Hello, Thanathos and Hypnos. AND HELLO KRATOS!', () => {
    expect(greet(['KRATOS', 'Thanathos', 'Hypnos'])).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!')
})

test('["Amy", "BRIAN", "Charlotte"] equals Hello, Amy and Charlotte. AND HELLO BRIAN!', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})

test('["Amy", "BRIAN", "Charlotte", "FR"] equals Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte", "FR"])).toBe('Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!')
})

test('["Amy", "BRIAN", "Charlotte", "nl"] equals Goeiedag, Amy en Charlotte. EN GOEIEDAG BRIAN!', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte", "nl"])).toBe('Goeiedag, Amy en Charlotte. EN GOEIEDAG BRIAN!')
})

test('["Amy", "BRIAN", "Charlotte", "En"] equals Hello, Amy and Charlotte. AND HELLO BRIAN!', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte", "En"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})