


  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  let playerMove = getMoveName(playerInput)


  function getMoveName (argMoveId){
    if (argMoveId == 1){
      return 'kamien';
  }
    else if(argMoveId == 2){
      return 'papier';
  }
    else if(argMoveId == 3){
      return 'nozyce';
    }
  }
  function displayResult (argComputerMove,argPlayerMove){
    printMessage('zagrłem '+ argComputerMove + ' a Ty '+ argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }
  else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
    printMessage('przegrywasz!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
    printMessage('przegrywasz!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'kamien'){
    printMessage('Remis!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('remis!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'nozyceń' && argPlayerMove == 'kamien'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
    printMessage('przegrywasz!');
  } 

  }
  displayResult(computerMove, playerMove);

