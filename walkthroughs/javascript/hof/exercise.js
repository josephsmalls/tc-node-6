console.log("JS HOF Exercise");

let plus = (initialNum) => {
  return (number) => {
    return initialNum + number;
  };
};

let plus15 = plus(15);

console.log(plus15(15)); // 30
console.log(plus15(45)); // 60
console.log(plus15(-10)); // 5

let position = {
  x: 0,
  y: 0,
  updateXPosition: function (unit) {
    this.x += unit;
    this.displayPosition();
  },
  updateYPosition: function (unit) {
    this.y += unit;
    this.displayPosition();
  },
  displayPosition: function () {
    console.log(`Position is ${this.x},${this.y}`);
  },
};

position.updateXPosition(5);
position.updateYPosition(-4);
position.updateXPosition(5);
position.updateYPosition(2);

let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

// Accessing an array index from an array index
board[0][0] = "X"
board[1][1] = "O"

printedBoard = board.map((row) => row.join("\t"));

printedBoardStr = board.join("\n");

alert(printedBoardStr);
