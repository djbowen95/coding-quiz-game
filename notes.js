// Create event listeners once question has been generated.
function createEventListeners() {
    rightAnswer = document.querySelector('.right-answer');
    rightAnswer.addEventListener("click", rightAnswerGiven);
    wrongAnswers = document.querySelectorAll('.wrong-answer');
    wrongAnswers[0].addEventListener("click", wrongAnswer);
    wrongAnswers[1].addEventListener("click", wrongAnswer);
    wrongAnswers[2].addEventListener("click", wrongAnswer);
};

// Record when a right answer is input.
let rightAnswerTotal = 0;
function rightAnswerGiven() {
    console.log("Correct!");
    rightAnswerTotal++;
    generateQuestion();
};

// Record when a wrong answer is input.
let wrongAnswerTotal = 0;
function wrongAnswer() {
    secondsLeft = secondsLeft - 5;
    console.log("A wrong answer has been entered.");
    wrongAnswerTotal++;
    generateQuestion();
};

// ----------------------------

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
    }
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

// ---------------------------------------------------------------------

console.log("Script successfully linked.");
console.log(
  "Plan for tomorrow: \n - Arrays on Codecademy\n - CSS on Codecademy\n - Code for question generation\n - Work on README file for last week homework"
);
let startGameButton = document.querySelector("#start-game-button");

// When button is clicked: start the game; change the display; start he countdown timer.
let pressStart = document.getElementById("start-button");
pressStart.addEventListener("click", isClicked);
function isClicked() {
    generateQuestions();
    displayQuestions();
    startTimer();
    changeDisplay();
  }

// Hide start button; show questions, timer and scores.
function changeDisplay() {
    pressStart.hidden = true;
    pressStart.innerHTML = "Try again?";
    displayCountdown.hidden = false;
};

// Display a countdown timer, that counts down from 60. 


// Wrong answer button - to test code. 
let wrongAnswerButton = document.getElementById("wrong-answer-button");



// Code for a question, that is replaced with another question when answered.
// - Shuffle / randomly order the responses to present on the page(?).
// -

let usedQuestions = [];

function selectQuestion() {
    if (usedQuestions.length <=5) {
        while (isUsed = true) {
            const randomChoice = Math.floor(Math.random() * 5);
            console.log(`The random number ${randomChoice}`);
            isUsed = usedQuestions.includes(randomChoice);
            console.log(`This number has been used before: ${isUsed}`);
        }
        console.log(`${randomChoice} is the new number.`);
    } else {
        console.log('All the numbers have now been used.')
    }
};


function generateQuestions() {
    console.log("This is where the questions would be generated.")
};

function displayQuestions() {
    console.log("This would display the questions.")
}

// To shuffle: position 'right answer' randomly, then have the others positioned in order.


// Code which changes the timer when a question is answered wrong.

// Code to keep track of a score.

// Code to store a score.

// Code that ends the game when the timer reaches zero.
function endGameDisplay () {
    console.log("The game is over.")
}

// List of questions, correct answers, and wrong answers.
// All 'answer1' must be true.


/*
}
function selectQuestion () {
    if (usedQuestions.length <= 5) {
        while (isUsed = true) {
            let randomChoice = Math.floor(Math.random() * 5);
            if (usedQuestions.includes(randomChoice) === false) {
                isUsed = false;
                console.log(`A new question: ${randomChoice}`);
            } else if (usedQuestions.includes(randomChoice === true) {
                console.log(`Already used ${randomChoice}`)
            };
        };
        };
    } else {
        console.log("All questions have been used.")
};



    //const possibleQuestions = [question1, question2, question3, question4, question5]

selectQuestion();

   while (isUsed = true) {
        let randomChoice = Math.random() * 5;
        randomChoice = Math.floor(randomChoice);

        if (usedQuestions.includes(randomChoice) === false) {
            isUsed = false;
        };
    };
    const randomQuestion = possibleQuestions[randomChoice];
    return randomQuestion;
}; 

    let randomChoice = Math.random() * 5;
    randomChoice = Math.floor(randomChoice);
    usedQuestions.push(randomChoice);
    const randomQuestion = possibleQuestions[randomChoice];
    return randomQuestion;
};
console.log(usedQuestions) */

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
}
