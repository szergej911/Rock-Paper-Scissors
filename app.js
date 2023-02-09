const buttons = document.querySelectorAll('input');
let pScore= 0;
let cScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const playerSelection = this.value;

    const options = ['Rock', 'Paper', 'Scissors']
    const computerSelection = options[Math.floor(Math.random() * 3)];

  
  playRound(playerSelection, computerSelection);
  updateScore();
  if (chechWinner()) {
    pScore = cScore = 0;
  updateScore();
  }
  });
});





//The conditional statements
function playRound(playerSelection, computerSelection) {
  const picks = `${playerSelection} vs ${computerSelection}`


  if(playerSelection === computerSelection) {
      alert(`${picks} = Tie!`);
  }
  else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
      alert(`${picks} = Computer Win!`);
      cScore++;
  }
  else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
    alert(`${picks} = You Win!`);
    pScore++;
  }
  else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert(`${picks} = You Win!`);
    pScore++;
  }
  else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    alert(`${picks} = Computer Win!`);
    cScore++;
  }
  else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
    alert(`${picks} = Computer Win!`);
    cScore++;
  }
  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    alert(`${picks} = You Win!`);
    pScore++;
  }
}



function updateScore () {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}

function chechWinner () {
  if (pScore === 5 || cScore ===5) {
    const winner = pScore === 5
    ? "You win the game! Congratulations!"
    : "Computer wins the game! Try again next time!"
    alert(winner);
    return true;
  }
  return false;
  }

  

