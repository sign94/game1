let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
 else if(randomNumber == 2){
    computerMove = 'papier';
  }
  else if(randomNumber == 3){
    computerMove = 'nozyce';
  }

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nozyce';
  }

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }
  if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('przegrywasz!');
  }
  if( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('przegrywasz!');
  }
  if( computerMove == 'kamień' && playerMove == 'kamien'){
    printMessage('Remis!');
  }
  if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('remis!');
  }
  if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'nozyceń' && playerMove == 'kamien'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('przegrywasz!');
  }