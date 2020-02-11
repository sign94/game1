let computerMove = `kamień`;
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = `papier`;
    printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

    let randomFraction = Math.random();

    printMessage('Wylosowany ułamek to: ' + randomFraction);
    
    let calculation = randomFraction * 19 + 1;
    
    printMessage('Ułamek pomnożony przez 10 i powiększony o 1: ' + calculation);
    
    let roundNumber = Math.floor(calculation);
    
    printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
    