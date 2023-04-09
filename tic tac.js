window.onload = function() {
const board = document.getElementById("board");
const resetButton = document.getElementById("reset");
let player = "X";


function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", handleClick);
  return cell;
}

function handleClick(event) {
  if (!event.target.textContent) {
    event.target.textContent = player;
    player = player === "X" ? "O" : "X";
  }
  if (checkWinner()) {
    alert(`Player ${player === "X" ? "O" : "X"} wins!`);
    resetBoard();
  } else if (checkDraw()) {
    alert("It's a draw!");
    resetBoard();
  }
}

function checkWinner() {
  const cells = Array.from(board.children);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return lines.some((line) =>
    line.every((index) => cells[index].textContent === player)
  );
}

function checkDraw() {
  return Array.from(board.children).every((cell) => cell.textContent);
}

function resetBoard() {
  board.childNodes.forEach((cell) => (cell.textContent = ""));
  player = "X";
}

function init() {
  for (let i = 0; i < 9; i++) {
    board.appendChild(createCell());
  }
  resetButton.addEventListener("click", resetBoard);
}

init();
}