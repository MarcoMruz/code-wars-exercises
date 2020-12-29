"use strict";

function growthOfPopulation(p0, percent, aug, p) {
  let neededYears = 0;

  while (p0 < p) {
    p0 = p0 + (percent / 100) * p0 + aug;

    neededYears++;
  }

  return neededYears;
}

console.log(growthOfPopulation(1500, 5, 100, 5000));
