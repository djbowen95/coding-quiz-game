console.log("Script successfully linked.");
console.log(
  "Plan for tomorrow: \n - Arrays on Codecademy\n - CSS on Codecademy\n - Code for question generation\n - Work on README file for last week homework"
);
let displayCountdown = document.querySelector("#countdown-clock");

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

// Wrong answer button - to test code. 
let wrongAnswerButton = document.getElementById("wrong-answer-button");
wrongAnswerButton.addEventListener("click", wrongAnswer);
function wrongAnswer() {
    secondsLeft = secondsLeft - 5;
    console.log("A wrong answer has been entered!");
};


// Code for a question, that is replaced with another question when answered.
// - Objects/classes that contain the questions(?)
// - Shuffle / randomly order the responses to present on the page(?).
// -
function generateQuestions() {
    console.log("This would generate the questions.")
}

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

/*
const question1 = { 
    question: ,
    answer1: ,
    answer2: ,
    answer3: ,
    answer4: ,
};
*/