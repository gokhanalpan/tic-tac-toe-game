function initilizeGameVariables() {
  console.log("New game init started");
  gameBoard.style.display = "grid";
  gameDrawElement.style.display = "none";
  actualGameElement.style.display = "block";

  weHaveAWinner = false;
  totalSelectedCellsCount = 0;
  player1Turn = true;
  activePlayer.name = player1Name;
  activePlayer.symbol = "X";
  activePlayerName.textContent = activePlayer.name;
  initBoardCells();
  clearTheBoard();
  addClickHandlersToGameBoardCells();
  disableGameOverElement();
  console.log("Game Init finished");
}

function clearTheBoard() {
  // const allCellsOnBoard = document.querySelectorAll("#game-board li");
  for (const cell of allCellsOnBoard) {
    cell.classList.remove("disabled");
    cell.textContent = "";
  }
  console.log("Board cleared");
}

function initBoardCells() {
  for (let i = 0; i <= 8; i++) {
    boardCells[i] = "empty";
  }
  console.log("Board cells Inited");
}

function returnClickedCellNo(clickedCell) {
  return clickedCell[4];
}

function CellIsEmpty(cellNo) {
  if (boardCells[cellNo] == "empty") {
    return true;
  }
  return false;
}

function switchActivePlayer() {
  player1Turn = !player1Turn;
  if (player1Turn) {
    activePlayer.name = player1Name;
    activePlayer.symbol = "X";
  } else {
    activePlayer.name = player2Name;
    activePlayer.symbol = "O";
  }
  activePlayerName.textContent = activePlayer.name;
}

function disableGameOverElement() {
  gameOverElement.style.display = "none";
  // gameOverElement.firstElementChild.innerHTML =
  //   '<h2>You won! <span id="winner-name">PLAYER NAME</span></h2>';
}

function cellClicked(event) {
  // const selectedColumn = event.target.dateset.column;
  // const selectedRow = event.target.dateset.row;

  const clickedCell = event.target;
  const clickedCellId = clickedCell.id;
  const clickedCellNo = returnClickedCellNo(clickedCellId);
  if (CellIsEmpty(clickedCellNo)) {
    boardCells[clickedCellNo] = activePlayer.name;
    clickedCell.textContent = activePlayer.symbol;
    clickedCell.classList.add("disabled");
    totalSelectedCellsCount++;
    checkAnybodyWonTheGame();
    checkIfGameIsDraw();
    // console.log(boardCells);
    switchActivePlayer();
  }
}

function addClickHandlersToGameBoardCells() {
  for (const cell of allCellsOnBoard) {
    cell.addEventListener("click", cellClicked);
  }
  console.log("cell events added");
}

function checkIfGameIsDraw() {
  if (totalSelectedCellsCount === 9 && !weHaveAWinner) {
    console.log("DRAW!!!");
    gameIsDraw();
  }
}

function gameIsDraw() {
  haveAWinnerElement.style.display = "none";
  gameOverElement.style.display = "block";
  gameDrawElement.style.display = "block";
}

function somebodyWonTheGame() {
  winnerNameElement.textContent = activePlayer.name;
  gameOverElement.style.display = "block";
  haveAWinnerElement.style.display = "block";
  gameDrawElement.style.display = "none";
  weHaveAWinner = true;
}

function checkAnybodyWonTheGame() {
  for (const array of winnerCellCombinationArray) {
    if (
      boardCells[array[0]] == activePlayer.name &&
      boardCells[array[1]] == activePlayer.name &&
      boardCells[array[2]] == activePlayer.name
    ) {
      console.log("WINNER!!");

      somebodyWonTheGame();
      // weHaveAWinner = true;
    }
  }
}

function startANewGame() {
  initilizeGameVariables();
}

// startButton.addEventListener("click", startANewGame);
