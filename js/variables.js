//game-config variables

let player1Name = "Player 1";
let player2Name = "Player 2";
let configForPlayer = "";

const editButtonPlayer1 = document.getElementById("edit-button-player1");
const editButtonPlayer2 = document.getElementById("edit-button-player2");
const configOverlayElement = document.getElementById("config-overlay");
const configCancelButton = document.getElementById("cancel-button");
const configSubmitButton = document.getElementById("submit-button");
const backDropElement = document.getElementById("backdrop");
const playerNameInputElement = document.getElementById("playername");
const player1NameLabelElement = document.getElementById("player1-name-label");
const player2NameLabelElement = document.getElementById("player2-name-label");
const actualGameElement = document.getElementById("actual-game");

// const player1 = "pl1";
// const player2 = "pl2";
const gameBoard = document.getElementById("game-board");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");
const startButton = document.getElementById("start-button");
const endGameTextElement = document.querySelector("#game-over h2");
const gameDrawElement = document.getElementById("draw");
const haveAWinnerElement = document.getElementById("winner");
const allCellsOnBoard = document.querySelectorAll("#game-board li");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("errorOutput");

let selectedPlayerId = "";
let totalSelectedCellsCount = 0;
let weHaveAWinner = false;

let player1Turn = true;
let activePlayer = { name: player1Name, symbol: "X" };

//a better alternative for selecting active player
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

let boardCells = ["", "", "", "", "", "", "", "", ""];

const winnerCellCombinationArray = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

startButton.addEventListener("click", startANewGame);
editButtonPlayer1.addEventListener("click", playerEditButtonClick);
editButtonPlayer2.addEventListener("click", playerEditButtonClick);
configCancelButton.addEventListener("click", cancelConfig);
// configSubmitButton.addEventListener("click", submitConfig);
formElement.addEventListener("submit", submitConfig);
