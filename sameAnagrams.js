"use strict";

// make from array entries
// sort every element in array
// filter those equal to word
// get their index
// return from words those equal to filtered

function anagrams(word, words) {
  let filteredArr = words.filter((elem) => sortWord(elem) === sortWord(word));

  return filteredArr;
}

function sortWord(word) {
  return word.split("").sort().join("");
}

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
