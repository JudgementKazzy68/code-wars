// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

//1. separate words around spaces
//2. count characters of each word
//3. if word is 5 or more chars long, reverse
//4. restructure string

function spinWords(string) {
  const splitString = string.split(" ");
  let outputString = string;
  for (let word = 0; word < splitString.length; word++) {
    if (splitString[word].length < 5) {
      continue;
    } else {
      let newWord = "";
      for (let i = splitString[word].length - 1; i >= 0; i--) {
        newWord += splitString[word][i];
      }
      splitString[word] = newWord;
      let newString = splitString.toString();
      outputString = newString.replace(/,/g, " ");
    }
  }
  return outputString;
}

console.log(spinWords("this is a test"));

//notes to self

// The code only reversed the first word in the string that was longer at least 5 characters, because I used return too early.

// I should also triple check before complaining that the site is not working :)
