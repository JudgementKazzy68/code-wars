"use strict";

function bouncingBall(h, bounce, window) {
  let seenCounter = 0;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    while (h > window) {
      seenCounter++;
      h *= bounce;
      if (h > window) {
      }
      seenCounter++;
    }
    return seenCounter - 1;
  } else {
    return seenCounter;
  }
}
