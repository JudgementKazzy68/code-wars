"use strict";

var countBits = function (n) {
  let bits = 0;
  while (Math.floor(n) >= 1) {
    if (Math.floor(n) % 2 === 0) {
      //if the remainder of n without decimals is 0,
      n /= 2; //divide by 2 and move to next iteration
    } else {
      bits += 1; //otherwise add 1 bit and divide by 2
      n /= 2;
    }
  }
  return bits;
};
