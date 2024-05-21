const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Please enter rock, paper, or scissors.');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You win! (Cheater!)';
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
  }
  if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
  }
  if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
  }
};

const playGame = () => {
  rl.question('Enter your choice: rock, paper, or scissors.', (userChoice) => {
    const userChoiceNormalized = getUserChoice(userChoice);
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoiceNormalized}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoiceNormalized, computerChoice));
    rl.close();
  });
};

playGame();
