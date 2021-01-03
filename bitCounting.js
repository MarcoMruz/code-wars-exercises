"use strict";

var countBits = function (n) {
  let nArray = Array.from(n.toString(2));
  let result = 0;

  nArray.forEach((number) => (number == "1" ? result++ : result));

  return result;
};

console.log(countBits(10));
