"use strict";

function validBraces(braces) {
  let bracesArray = Array.from(braces);
  let result = [];

  for (let i = 0; i < bracesArray.length; i++) {
    result.push(bracesArray[i]);
    for (let j = 0; j < result.length; j++) {
      if (result[j] == ")" && result[j - 1] == "(") {
        result.pop();
        result.pop();
      } else if (result[j] == "}" && result[j - 1] == "{") {
        result.pop();
        result.pop();
      } else if (result[j] == "]" && result[j - 1] == "[") {
        result.pop();
        result.pop();
      }
    }
  }
  return result.length == 0;
}

console.log(validBraces("()")); // true
console.log(validBraces("{}({})[]")); // false
