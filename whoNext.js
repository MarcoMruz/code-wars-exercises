"use strict";

let nameson = "Yano,Pazu,Rajesh,Penny,Azuma,Togusa,Howard,Motoko Kusanagi,Sheldon,Daisuke Aramaki,Borma,Batou".split(
  ","
);

function whoIsNext(names, r) {
  r = r - 1;

  while (r >= names.length) {
    r = Math.floor((r - names.length) / 2);
  }
  return names[r];
}

console.log(whoIsNext(nameson, 780));
