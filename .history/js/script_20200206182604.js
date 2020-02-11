let computerMove = `kamień`;
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = `papier`;
    printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

    let randomFraction = Math.random();

    let calculation = randomFraction * 19 + 8;
    
    let roundNumber = Math.floor(calculation);

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
    