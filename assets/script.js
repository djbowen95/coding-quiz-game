const displayCountdown = document.querySelector("#countdown-clock");
const startGameButton = document.querySelector('#start-game-button');
const wrongAnswerButton = document.querySelector('#wrong-answer-button');
const generateQuestionButton = document.querySelector('#generate-question-button')

// When START GAME BUTTON clicked: Start timer, change display, run first question.
startGameButton.addEventListener("click", startGame);
function startGame() {
    generateQuestion();
    startTimer();
    changeDisplay();
};

// Hide START GAME BUTTON; display TIMER, QUESTIONS, SCORES.
function changeDisplay() {
    startGameButton.hidden = true;
    startGameButton.innerHTML = "Try again?";
    displayCountdown.hidden = false;
};

// Display COUNTDOWN TIMER; have it count down from 60.
let secondsLeft = 60;
function startTimer() {
    const timerInterval = setInterval(function() {
        displayCountdown.innerHTML = secondsLeft + " seconds remaining.";
        secondsLeft--;
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            displayCountdown.innerHTML = "Time's up!";
            endGameDisplay();
        }
    }, 1000);
};

// A function to run all the commands needed to generate a question.
generateQuestionButton.addEventListener("click", generateQuestion);
function generateQuestion() {
    console.log("A question is being generated.");
    const nextQuestion = selectNewQuestion();
    console.log(nextQuestion);
};

let usedQuestions = [];
function selectNewQuestion() {
    if (usedQuestions.length < 5) {
        let isUsed = true;
        let randomChoice = "";
        while (isUsed === true) {
            randomChoice = Math.floor(Math.random() * 5);
            isUsed = usedQuestions.includes(randomChoice);
        }
        usedQuestions.push(randomChoice);
        return randomChoice;
    } else {
        console.log("All the questions have been used.")
        return null;
    };
};

// Wrong answer button - this is to test code.
wrongAnswerButton.addEventListener("click", wrongAnswer);
function wrongAnswer() {
    secondsLeft = secondsLeft - 5;
    console.log("A wrong answer has been entered.");
};

// Change page layout to show GAME IS OVER.
function endGameDisplay() {
    console.log("The game is now over.")
}