"use strict";

function isValidWalk(walk) {
  let result = 0;

  if (walk.length > 10 || walk.length < 10) return false;

  walk.forEach((step) => {
    switch (step) {
      case "n":
        result += 1;
        break;
      case "e":
        result += 2;
        break;
      case "s":
        result -= 1;
        break;
      case "w":
        result -= 2;
        break;
      default:
        break;
    }
  });

  if (result === 0) return true;

  return false;
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
