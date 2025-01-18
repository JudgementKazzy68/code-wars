"use strict";

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str) {
  const punctuationMarks = [".", "!", "?"];
  let outputString = "";
  let splitString = str.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    if (punctuationMarks.includes(splitString[i])) {
      continue;
    } else {
      splitString[i] = splitString[i] + splitString[i][0] + "ay";
      splitString[i] = splitString[i].slice(1, splitString[i].length);
      console.log(splitString[i]);
    }
  }
  let newString = splitString.toString();
  outputString = newString.replace(/,/g, " ");
  return outputString;
}

pigIt("Hello I am gabor !");
