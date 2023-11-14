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
  let upperNames = []
  let lowerNames = []
  for(const name of names){
    if(name.toUpperCase() === name){
      upperNames.push(name);
    }else{
      lowerNames.push(name);
    }
  }
  const allButLast1 = lowerNames.slice(0, -1).join(', ')
  const last1 = lowerNames[lowerNames.length - 1]

  if(upperNames.length === 1){
    return `Hello, ${allButLast1} and ${last1}. AND HELLO ${upperNames[0]}!`
  }else if(upperNames.length === 0){
    return `Hello, ${allButLast1} and ${last1}.`
  }else{
    const allButLast2 = upperNames.slice(0, -1).join(', ')
    const last2 = upperNames[upperNames.length - 1]
    return `Hello, ${allButLast1} and ${last1}. AND HELLO ${allButLast2} AND ${last2}!`
  }

}


module.exports = greet
