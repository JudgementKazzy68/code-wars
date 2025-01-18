"use strict";

function isValidWalk(walk) {
  const coordinates = {
    x: 0,
    y: 0,
  };
  if (walk.length > 10) {
    return false;
  } else {
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === "n") {
        coordinates.y += 1;
        console.log(coordinates.x, coordinates.y);
      } else if (walk[i] === "e") {
        coordinates.x += 1;
        console.log(coordinates.x, coordinates.y);
      } else if (walk[i] === "s") {
        coordinates.y -= 1;
        console.log(coordinates.x, coordinates.y);
      } else if (walk[i] === "w") {
        coordinates.x -= 1;
        console.log(coordinates.x, coordinates.y);
      }
    }
    if (coordinates.x === 0 && coordinates.y === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const walk = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

console.log(isValidWalk(walk));
