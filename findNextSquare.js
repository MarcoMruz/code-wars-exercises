"use strict";

function findNextSquare(sq) {
  let afterSqrt = 0;

  if (Number.isInteger(Math.sqrt(sq))) {
    afterSqrt = Math.sqrt(sq);

    return (afterSqrt + 1) ** 2;
  }

  return -1;
}

console.log(findNextSquare(121));
