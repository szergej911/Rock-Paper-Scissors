//Setting up the computer's choice
function getComputerChoice() {
    const random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * random.length)];
}

//The conditional statements
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return 'Tie!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer Win!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player Win!'
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player Win!'
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player Win!'
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer Win!'
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player Win!'
    }
    else {
        return 'Pick something!'
    }
}

//Setting up the game
function game() {
    let computerWins = 0;
        let playerWins = 0;
        let tieWins = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        const something = playRound(playerSelection, computerSelection);
        if(something == 'Computer Win!') {
            computerWins++
        }
        else if(something == 'Player Win!') {
            playerWins++
        }
        else{
            tieWins++
        }

        console.log(playRound(playerSelection, computerSelection))
     }
     if(computerWins > playerWins) {
        alert('Computer won the Game!')
    }
    else if(playerWins > computerWins) {
        alert('You won the Game!')
    }
    else if(computerWins == playerWins) {
        alert('Its a Tie!')
    }
    else{
        alert('Dont waste my Time!')
    }
        
    
}


game();