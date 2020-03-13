let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate target that will compare with humanGuess and computerGuess
const generateTarget = () => Math.floor(Math.random() * 9);

// Will check the distance between each guess and target
const getAbsoluteDistance = (firstNumber, secondNumber) => Math.abs(firstNumber - secondNumber);

// Will check human or computer win the round
const compareGuesses = (humanGuess, computerGuess, target) => {

    if (humanGuess < 0 || humanGuess > 9) {
        window.alert('Your number must be between 0 - 9!');

    } else {
        const humanRange = getAbsoluteDistance(humanGuess, target);
        const computerRange = getAbsoluteDistance(computerGuess, target);

        let decision;

        if (humanRange <= computerRange) {
            decision = true;
        } else {
            decision = false;
        }

        return decision;
    }
}

// Will update human or computer score, depends who wins the round
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }

};

// Will incerement current round to next round
const advanceRound = () => currentRoundNumber++;