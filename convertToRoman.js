"use strict";

const RomanNumerals = {
  latinRoman: new Map(),
  initArr: function () {
    this.latinRoman.set("M", 1000);
    this.latinRoman.set("CM", 900);
    this.latinRoman.set("D", 500);
    this.latinRoman.set("CD", 400);
    this.latinRoman.set("C", 100);
    this.latinRoman.set("XC", 90);
    this.latinRoman.set("L", 50);
    this.latinRoman.set("XL", 40);
    this.latinRoman.set("X", 10);
    this.latinRoman.set("IX", 9);
    this.latinRoman.set("V", 5);
    this.latinRoman.set("IV", 4);
    this.latinRoman.set("I", 1);
  },
  toRoman: function (number) {
    this.initArr();
    let result = "";
    let i = 0;

    while (number > 0) {
      for (const [key, value] of this.latinRoman) {
        if (number - value >= 0) {
          result += key;
          number -= value;
          break;
        }
      }
    }

    return result;
  },
  fromRoman: function (str) {
    let result = this.latinRoman.get(str.charAt(str.length - 1));
    for (let i = str.length - 2; i >= 0; i--) {
      if (
        this.latinRoman.get(str.charAt(i)) >=
        this.latinRoman.get(str.charAt(i + 1))
      ) {
        result += this.latinRoman.get(str.charAt(i));
      } else {
        result -= this.latinRoman.get(str.charAt(i));
      }
    }
    return result;
  },
};

console.log(RomanNumerals.toRoman(2006));
console.log(RomanNumerals.fromRoman("MXX"));
