function playerEditButtonClick(event) {
  // console.log(event.target.dataset);
  selectedPlayerId = event.target.dataset.clickedplayer;
  console.log(selectedPlayerId);
  displayConfigOverlay();
}

function displayConfigOverlay() {
  configOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
  if (selectedPlayerId == "1") {
    playerNameInputElement.value = player1Name;
  } else {
    playerNameInputElement.value = player2Name;
  }
}

function cancelConfig() {
  errorOutputElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");
  hideConfig();
}

function hideConfig() {
  configOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
}

function submitConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Doğru düzgün bişi gir!";
    return;
  }

  hideConfig();
  if (selectedPlayerId == "1") {
    const oldName = player1Name;
    // player1Name = playerNameInputElement.value;
    player1Name = enteredPlayerName;

    if (activePlayer.name == oldName) {
      activePlayer.name = player1Name;
      activePlayerName.textContent = activePlayer.name;
    }
    replaceElementsOfArray(boardCells, oldName, player1Name);
    player1NameLabelElement.textContent = player1Name;
  } else {
    const oldName = player2Name;
    player2Name = enteredPlayerName;
    if (activePlayer.name == oldName) {
      activePlayer.name = player2Name;
      activePlayerName.textContent = activePlayer.name;
    }
    replaceElementsOfArray(boardCells, oldName, player2Name);
    player2NameLabelElement.textContent = player2Name;
  }
  //   console.log(playerNameInputElement.value);
}

function replaceElementsOfArray(array, oldItem, newItem) {
  array.forEach(function (item, i) {
    if (item == oldItem) {
      array[i] = newItem;
    }
  });
}

// editButtonPlayer1.addEventListener("click", player1EditButtonClick);
// editButtonPlayer2.addEventListener("click", player2EditButtonClick);
// configCancelButton.addEventListener("click", cancelConfig);
// configSubmitButton.addEventListener("click", submitConfig);
