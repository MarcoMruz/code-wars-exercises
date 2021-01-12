"use strict";

// param rankOfActivity is self decriptive
// rank of activity is lower than actual rank is worth 1
// rank of activity is same as an actual rank is worth 3
// rank of activity lower by 2 levels than actual rank is ignored

// user cannot have higher rank than 8
// when level 8 cannot improve in progress points

// formula to calculate progress gained when going from lower lvl to higher
// progress = 10 * d * d (d = difference in ranking between the activity and the user)

// calculate next rank using actual rank and progress
// plus 100 progress points needed to go level higher 0-99 => -8, 100-199 => -7

function User() {
  this.rank = -8;
  this.progress = 0;
  this.incProgress = function (rankOfActivity) {
    console.log(this.rank, this.progress);
    if (rankOfActivity < -8 || rankOfActivity > 8 || rankOfActivity === 0)
      throw "";

    if (rankOfActivity > this.rank) {
      this.progress += calculateProgress(rankOfActivity, this.rank);
    } else if (rankOfActivity === this.rank) {
      this.progress += 3;
    } else if (
      rankOfActivity > this.rank - 2 ||
      (rankOfActivity === -1 && this.rank === 1)
    ) {
      this.progress += 1;
    }

    let stats = calculateRank(this.rank, this.progress);
    this.rank = stats.rank;
    if (this.rank != 8) {
      this.progress = stats.progress;
    } else {
      this.progress = 0;
    }
  };
}

function calculateProgress(rankOfActivity, rank) {
  let diff = 0,
    remainder = 0;

  if (rank < 0 && rankOfActivity > 0) remainder = 1;

  diff =
    rankOfActivity < 0
      ? -rank + rankOfActivity - remainder
      : -rank + rankOfActivity - remainder;

  return 10 * Math.pow(diff, 2);
}

function calculateRank(rank, progress) {
  let levelUp = (progress - (progress % 100)) / 100;
  let rankLimit = rank + levelUp > 8 ? 8 : rank + levelUp;
  rankLimit = rankLimit === 0 ? 1 : rankLimit;
  return {
    rank: rankLimit,
    progress: progress % 100,
  };
}
const user = new User();

user.incProgress(-7);
console.log(user.rank);
console.log(user.progress);
