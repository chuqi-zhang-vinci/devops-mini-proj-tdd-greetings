function greet (name) {
  if (Array.isArray(name)) {
    return 'Hello, ' + name[0] + ' and ' + name[1] + '.'
  }
  if (name === null || name === undefined || name.trim() === '') {
    return 'Hello, my friend.'
  }
  if (name.toUpperCase() === name) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

module.exports = greet
