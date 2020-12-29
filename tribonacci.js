"use strict";

function tribonacci(signature, n) {
  if (n <= 0) return [];

  for (let i = 0; i < n - 3; i++) {
    signature.push(returnSum(signature));
  }

  return signature.slice(0, n);
}

function returnSum(array) {
  return (
    array[array.length - 1] + array[array.length - 2] + array[array.length - 3]
  );
}

console.log(tribonacci([1, 1, 1], 1), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
