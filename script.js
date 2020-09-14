const array = ['rock', 'paper', 'scissors']

let playerSelection = prompt('please type: rock, paper, or scissors')
playerSelection = playerSelection.toLowerCase()
console.log('you chose: ' + playerSelection)

let computerSelection = array[Math.floor(Math.random() * array.length)]
console.log('computer chose: ' + computerSelection)

const playRound = () => {
  if (playerSelection == computerSelection) {
    alert('tie')
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    alert('sorry you lost :(')
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    alert('sorry, you lost :(')
  } else {
    alert('You Win!')
  }
}
playRound()
