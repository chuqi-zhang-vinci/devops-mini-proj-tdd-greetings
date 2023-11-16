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
  let language = findLanguage(names)
  let upperNames = []
  let lowerNames = []
  for(const name of names){
    if(name.toUpperCase() === name && name.toUpperCase() != language){
      upperNames.push(name);
    }else if(name.toUpperCase() != language){
      lowerNames.push(name);
    }
  }
  const allButLast1 = lowerNames.slice(0, -1).join(', ')
  const last1 = lowerNames[lowerNames.length - 1]

  let greetingWord, andWord; 

  switch(language){
    case "FR" :
      greetingWord = "Bonjour";
      andWord = "et";
      break;
    
    case "NL" :
      greetingWord = "Goeiedag";
      andWord = "en";
      break; 
    
    default :
      greetingWord = "Hello";
      andWord = "and";
  }

  if(upperNames.length === 1){
    return `${greetingWord}, ${allButLast1} ${andWord} ${last1}. ${andWord.toUpperCase()} ${greetingWord.toUpperCase()} ${upperNames[0]}!`
  }else if(upperNames.length === 0){
    return `${greetingWord}, ${allButLast1} ${andWord} ${last1}.`
  }else{
    const allButLast2 = upperNames.slice(0, -1).join(', ')
    const last2 = upperNames[upperNames.length - 1]
    return `${greetingWord}, ${allButLast1} ${andWord} ${last1}. ${andWord.toUpperCase()} ${greetingWord.toUpperCase()} ${allButLast2} ${andWord.toUpperCase()} ${last2}!`
  }
}

function findLanguage(array){
  for(const element of array){
    if(element.toUpperCase() === "FR"){
      return "FR"
    }else if(element.toUpperCase() === "NL"){
      return "NL"
    }else if(element.toUpperCase === "EN"){
      return "EN"
    }
  }

  return "EN"
}


module.exports = greet
