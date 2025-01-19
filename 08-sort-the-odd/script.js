"use strict";

function sortArray(array) {
  let arrayOutput = []; //collecting output data
  let onlyOdd = []; //collecting only odd numbers
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayOutput.push(array[i]); //even numbers are pushed in output
    } else {
      arrayOutput.push("x"); //odd numbers get replaced by "x" in output (temporarily)
      onlyOdd.push(array[i]); //odd numbers are also added to a separate array
    }
  }
  onlyOdd.sort(function (a, b) {
    return a - b;
  }); //the array of the odd numbers is sorted in ascending order
  let oddCounter = 0;
  while (oddCounter < onlyOdd.length) {
    for (let i = 0; i < arrayOutput.length; i++) {
      if (arrayOutput[i] === "x") {
        //"x" values get replaced by the sorted odd numbers
        arrayOutput[i] = onlyOdd[oddCounter];
        oddCounter++; //keeping track of iterations vs the length of the "onlyOdds" array
      }
    }
  }
  return arrayOutput;
}
sortArray([5, 7, 2, 8, 1, 4]);
