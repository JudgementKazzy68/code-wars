function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));
