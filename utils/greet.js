function greet(name) {
  if (Array.isArray(name)) {
    return greetWithArray(name);
  }

  if (!name || name.trim() === '') {
    return 'Hello, my friend.';
  }

  if (name.toUpperCase() === name) {
    return `HELLO, ${name}!`;
  }

  return `Hello, ${name}.`;
}

function greetWithArray(names) {
  const language = findLanguage(names);
  const { greetingWord, andWord } = getLanguageWords(language);

  const upperNames = [];
  const lowerNames = [];

  for (const name of names) {
    if (name.toUpperCase() === name && name.toUpperCase() !== language) {
      upperNames.push(name);
    } else if (name.toUpperCase() !== language) {
      lowerNames.push(name);
    }
  }

  const allButLast = lowerNames.slice(0, -1).join(', ');
  const last = lowerNames[lowerNames.length - 1];

  if (upperNames.length === 1) {
    return `${greetingWord}, ${allButLast} ${andWord} ${last}. ${andWord.toUpperCase()} ${greetingWord.toUpperCase()} ${upperNames[0]}!`;
  } else if (upperNames.length === 0) {
    return `${greetingWord}, ${allButLast} ${andWord} ${last}.`;
  } else {
    const allButLastUpper = upperNames.slice(0, -1).join(', ');
    const lastUpper = upperNames[upperNames.length - 1];
    return `${greetingWord}, ${allButLast} ${andWord} ${last}. ${andWord.toUpperCase()} ${greetingWord.toUpperCase()} ${allButLastUpper} ${andWord.toUpperCase()} ${lastUpper}!`;
  }
}

function findLanguage(array) {
  for (const element of array) {
    const upperElement = element.toUpperCase();
    if (upperElement === "FR") {
      return "FR";
    } else if (upperElement === "NL") {
      return "NL";
    } else if (upperElement === "EN") {
      return "EN";
    }
  }

  return "EN";
}

function getLanguageWords(language) {
  switch (language) {
    case "FR":
      return { greetingWord: "Bonjour", andWord: "et" };
    case "NL":
      return { greetingWord: "Goeiedag", andWord: "en" };
    default:
      return { greetingWord: "Hello", andWord: "and" };
  }
}

module.exports = greet;
