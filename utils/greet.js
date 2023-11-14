function greet (name) {
  if (Array.isArray(name)) {
    return greetWithArray(name)
  }
  if (name === null || name === undefined || name.trim() === '') {
    return 'Hello, my friend.'
  }
  if (name.toUpperCase() === name) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

function greetWithArray (names) {
  const allButLast = names.slice(0, -1).join(', ')
  const last = names[names.length - 1]
  return `Hello, ${allButLast} and ${last}.`
}

module.exports = greet
