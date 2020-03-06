// FIXME: change to board state
const boardData = [1, 0, 2, 0, 1, 2, 0, 2, 0];

const winMatrixData = [
  // lines
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

function checkRepetitions(array) {
  const repetitions = array.reduce(
    (acc, cur) => {
      if (cur !== 0) {
        if (cur === acc.last) {
          acc.total += 1;
        }
        acc.last = cur;
      }
      return acc;
    },
    { total: 1, last: 0 }
  );
  return repetitions;
}

function checkGreaterRepetition(winMatrix, board, callback) {
  let greaterRepetition = {
    total: 0,
    index: -1,
    value: 0,
  };

  winMatrix.forEach((combination, index) => {
    const [first, second, third] = combination;

    const { total: repetitions, last: value } = checkRepetitions([
      board[first],
      board[second],
      board[third],
    ]);
    if (repetitions > greaterRepetition.total) {
      greaterRepetition = {
        total: repetitions,
        index,
        value,
      };
    }
  });
  // console.log(greaterRepetition)
  return callback(
    greaterRepetition.total,
    greaterRepetition.index,
    greaterRepetition.value
  );
}

function checkWin(winMatrix, board) {
  return checkGreaterRepetition(
    winMatrix,
    board,
    (repetition, index, value) => {
      if (repetition === 3) {
        console.log('O jogador', value, 'venceu');
        return value;
      }

      return 0;
      // console.log({repetition, index, value})
    }
  );
}

function checkBestPlay(winMatrix, board) {
  return checkGreaterRepetition(winMatrix, board, (repetition, index) => {
    if (repetition === 2) {
      const bestPlay = winMatrix[index];
      if (
        board[bestPlay[0]] === 0 ||
        board[bestPlay[1]] === 0 ||
        board[bestPlay[2]] === 0
      ) {
        console.log('Best play:', bestPlay);

        return bestPlay;
      }
    }

    return winMatrix[Math.floor(Math.random() * 7 + 1)];
  });
}

module.exports = {
  winMatrixData,
  checkRepetitions,
  checkGreaterRepetition,
  checkWin,
  checkBestPlay,
};
