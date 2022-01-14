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

// Run all functions needed to generate and position a new question on the page.
// Need an 'if === null' condition in this one.
generateQuestionButton.addEventListener("click", generateQuestion);
function generateQuestion() {
    console.log("A question is being generated.");
    const nextQuestion = findQuestion();
    writeQuestionTitle(nextQuestion);

};

// Select a new question from the pool; make sure it hasn't already been used. 
let usedQuestions = [];
function selectNewQuestion() {
    if (usedQuestions.length < questionPool.length) {
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

function findQuestion() {
    const nextQuestion = selectNewQuestion();
    return questionPool[nextQuestion];
};

function writeQuestionTitle(nextQuestion) {
    console.log(`The question is ${nextQuestion.question}`)
}

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

// Questions, stored as objects. The answer1 pair is always 'true'.
const question1 = { 
    question: "What is a boolean?",
    answer1: "A data type that is either true or false.",
    answer2: "A type of error, caused by ghosts.",
    answer3: "A string that contains both letter and number characters.",
    answer4: "A type of shoe traditionally worn by small Norwegian men.",
};

const question2 = { 
    question: "What is a string?",
    answer1: "Zero or more characters written with quotes, which can be stored in a variable.",
    answer2: "Several different variables, connected together in a row, like knots in a rope.",
    answer3: "Something used to lace up traditional shoes worn by small Norwegian men.",
    answer4: "A mathematical sum that is automatically calculated in the console.",
};

const question3 = { 
    question: "What command would you need to put in your code to display something in the console?",
    answer1: "console.log('Your Text Here')",
    answer2: "log.this('Your Text Here')",
    answer3: "speak('Your Text Here')",
    answer4: "help me little norwegian man, write this text('Your Text Here')",
};

const question4 = {
    question: "Which of these could you use to start a conditional statement?",
    answer1: "if",
    answer2: "can",
    answer3: "conditional-statement",
    answer4: "clip-clap.the-magic-shoes",
};

const question5 = {
    question: "Why would you want to create a loop?",
    answer1: "To repeat several lines of code multiple times.",
    answer2: "To disrupt the time space continuum.",
    answer3: "To lace up your traditional wooden shoes.",
    answer4: "Its fun to annoy the computer.",
};

const questionPool = [question1, question2, question3, question4, question5];