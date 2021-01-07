"use strict";

// n+1 je pocet stvorcov v obdlzniku
// vysledny stvorec je vysledkom fibonacciho rovnice
// vysledok je sucet obvodov vsetkych stvorcov v obdlzniku

function perimeter(n) {
  let squares = [1, 1];
  const reducer = (accumulator, value) => accumulator + value;

  if (n === 0) return 4;
  if (n === 1) return 8;

  for (let i = 2; i < n + 1; i++) {
    squares.push(fibonacci(squares));
  }

  return 4 * squares.reduce(reducer);
}

function fibonacci(arr) {
  return arr[arr.length - 1] + arr[arr.length - 2];
}

console.log(perimeter(5));
