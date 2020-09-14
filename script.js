const array = ['rock', 'paper', 'scissors']

let playerSelection = prompt('please type: rock, paper, or scissors')
playerSelection = playerSelection.toLowerCase()

let computerSelection = array[Math.floor(Math.random() * array.length)]

const playRound = () => {
  console.log('computer chose: ' + computerSelection)

  if (playerSelection == computerSelection) {
    console.log('tie')
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('sorry you lost')
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('sorry you lost')
  } else {
    console.log('you won')
  }
}
