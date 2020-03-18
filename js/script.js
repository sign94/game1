{
  function playGame() {
    clearMessages();
    playerInput = 1;
    playerInput = 2;
    playerInput = 3;

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nozyce";
      }
    }
    function displayResult(argComputerMove, argPlayerMove) {
      printMessage("zagrłem " + argComputerMove + " a Ty " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("przegrywasz!");
      } else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
        printMessage("przegrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nozyce") {
        printMessage("przegrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nozyceń" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nozyce" && argPlayerMove == "nozyce") {
        printMessage("przegrywasz!");
      }
    }
    displayResult(computerMove, playerMove);
  }
  document.getElementById("play-scissors").addEventListener("click", playGame);
  document.getElementById("play-rock").addEventListener("click", playGame);
  document.getElementById("play-paper").addEventListener("click", playGame);
}
