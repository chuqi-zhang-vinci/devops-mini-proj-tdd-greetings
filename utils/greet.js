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
  let finalDisplay = 'Hello'
  for (const name of names) {
    if (name === names[names.length - 1]) {
      finalDisplay += ` and ${name}.`
    } else {
      finalDisplay += `, ${name}`
    }
  }
  return finalDisplay
}

module.exports = greet
