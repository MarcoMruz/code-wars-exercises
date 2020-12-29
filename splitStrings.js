"use strict";

function solution(str) {
  let strArray = Array.from(str);
  let result = [];

  let arrayLength = strArray.length;

  for (let i = 0; i < arrayLength; i += 2) {
    result.push(strArray[i] + (strArray[i + 1] || "_"));
  }

  return result;
}

console.log(solution("abc"));
