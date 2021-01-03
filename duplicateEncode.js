"use strict";

function duplicateEncode(word) {
  let wordArray = word.toLowerCase().split("");
  let wordArrayEntries = wordArray.entries();
  let result = [];
  let helper = [];

  for (const [index, element] of wordArrayEntries) {
    helper = wordArray.slice();

    helper.splice(index, 1);

    result.push(helper.includes(element) ? ")" : "(");
  }

  return result.join("");
}
