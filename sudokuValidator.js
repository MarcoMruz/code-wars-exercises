"use strict";

function validSolution(board) {
  return !controlColumn(board) && !controlRow(board) && !controlSquare(board);
}

function ifIncludes(board) {
  let copyBoard = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      copyBoard = board[i].slice(0, board.length - 1);
      copyBoard.splice(j, 1);
      if (copyBoard.includes(board[i][j])) return true;
    }
  }
  return false;
}

function controlRow(board) {
  return ifIncludes(board);
}

function controlColumn(board) {
  let copyBoard = fromRowColumn(board);

  return ifIncludes(copyBoard);
}

function fromRowColumn(board) {
  let convertedBoard = [];
  for (let i = 0; i < board.length; i++) {
    convertedBoard[i] = [board.length];
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      convertedBoard[j][i] = board[i][j];
    }
  }
  return convertedBoard;
}

function controlSquare(board) {
  let copyBoard = [],
    x = 0,
    y = 3,
    z = 0,
    helpBoard = [];
  for (let i = 0; i < board.length; i++) {
    copyBoard = [];
    copyBoard.push(board[z].slice(x, y));
    copyBoard.push(board[z + 1].slice(x, y));
    copyBoard.push(board[z + 2].slice(x, y));

    copyBoard = [].concat(...copyBoard);

    for (let j = 0; j < copyBoard.length; j++) {
      helpBoard = copyBoard.slice(0, copyBoard.length);
      helpBoard.splice(j, 1);
      if (helpBoard.includes(copyBoard[j])) return true;
    }

    z += 3;
    if (i === 2 || i === 5) {
      x += 3;
      y += 3;
      z = 0;
    }
  }
  return false;
}

console.log(
  controlSquare([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
