const questionTitle = document.querySelector("#question-title");

const startGameButton = document.querySelector("#start-game-button");
const startGameText = document.querySelector("#start-game-text");
const endGameText = document.querySelector("#end-game-text");
endGameText.hidden = true;

const answerContainer = document.querySelector("#answer-container");
const responses = document.querySelectorAll(".response");
const lastResponseResult = document.querySelector("#last-response-result");
const displayCountdown = document.querySelector("#countdown-clock");

let rightAnswer = "";
let wrongAnswers = "";

// When START GAME BUTTON clicked: Start timer, change display, run first question.
startGameButton.addEventListener("click", startGame);
function startGame() {
  generateQuestion();
  startTimer();
  displayGame();
}

// Hide START GAME BUTTON; display TIMER, QUESTIONS, SCORES.
function displayGame() {
  startGameText.hidden = true;
  startGameButton.hidden = true;
  startGameButton.innerHTML = "Start a New Game!";
  answerContainer.hidden = false;
  endGameText.hidden = true;
}

// Display COUNTDOWN TIMER; have it count down from 60.
let secondsLeft = 90;
function startTimer() {
  const timerInterval = setInterval(function () {
    displayCountdown.innerHTML = secondsLeft + " seconds remaining.";
    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      endGameDisplay();
      resetGame();
    }
  }, 1000);
}

// Run all functions needed to generate and position a new question on the page.
function generateQuestion() {
  if (usedQuestions.length === questionPool.length) {
    noQuestionsLeft();
  } else {
    const nextQuestion = findQuestion();
    const correctAnswerLocation = assignCorrectAnswer();
    writeQuestionTitle(nextQuestion);
    writeCorrectAnswer(nextQuestion, correctAnswerLocation);
    writeOtherAnswers(nextQuestion, correctAnswerLocation);
    createEventListeners();
  }
}

// Select a new question from the pool; make sure it hasn't already been used.
let usedQuestions = [];
function selectNewQuestion() {
  let isUsed = true;
  let randomChoice = "";
  while (isUsed === true) {
    randomChoice = Math.floor(Math.random() * questionPool.length);
    isUsed = usedQuestions.includes(randomChoice);
  }
  usedQuestions.push(randomChoice);
  return randomChoice;
}

function findQuestion() {
  const nextQuestion = selectNewQuestion();
  return questionPool[nextQuestion];
}

// Write the question to the HTML.
function writeQuestionTitle(nextQuestion) {
  questionTitle.innerHTML = `<h1>${nextQuestion.question}</h1>`;
}

// Write the answers to the HTML. Randomly assign the correct answer.
function assignCorrectAnswer() {
  const randomAnswerLocation = Math.floor(Math.random() * 4);
  return randomAnswerLocation;
}

function writeCorrectAnswer(nextQuestion, correctAnswerLocation) {
  responses[
    correctAnswerLocation
  ].innerHTML = `<p class="right-answer">${nextQuestion.answer1}</p>`;
}

function writeOtherAnswers(nextQuestion, correctAnswerLocation) {
  if (correctAnswerLocation != 0) {
    responses[0].innerHTML = `<p class="wrong-answer">${nextQuestion.answer2}</p>`;
  } else {
    responses[3].innerHTML = `<p class="wrong-answer">${nextQuestion.answer2}</p>`;
  }
  if (correctAnswerLocation != 1) {
    responses[1].innerHTML = `<p class="wrong-answer">${nextQuestion.answer3}</p>`;
  } else {
    responses[3].innerHTML = `<p class="wrong-answer">${nextQuestion.answer3}</p>`;
  }
  if (correctAnswerLocation != 2) {
    responses[2].innerHTML = `<p class="wrong-answer">${nextQuestion.answer4}</p>`;
  } else {
    responses[3].innerHTML = `<p class="wrong-answer">${nextQuestion.answer4}</p>`;
  }
}

// Create event listeners once question has been generated.
function createEventListeners() {
  rightAnswer = document.querySelector(".right-answer");
  rightAnswer.addEventListener("click", rightAnswerGiven);
  wrongAnswers = document.querySelectorAll(".wrong-answer");
  wrongAnswers[0].addEventListener("click", wrongAnswer);
  wrongAnswers[1].addEventListener("click", wrongAnswer);
  wrongAnswers[2].addEventListener("click", wrongAnswer);
}

// Record when a right answer is input.
let rightAnswerTotal = 0;
function rightAnswerGiven() {
  lastResponseResult.innerHTML = "<h2>Correct! That is the right answer.</h2>";
  rightAnswerTotal++;
  generateQuestion();
}

// Record when a wrong answer is input.
function wrongAnswer() {
  secondsLeft = secondsLeft - 10;
  lastResponseResult.innerHTML = "<h2>Wrong! That is the wrong answer.</h2>";
  generateQuestion();
}

// Change page layout to show GAME IS OVER.
function endGameDisplay() {
  endGameText.hidden = false;
  startGameButton.hidden = false;
  answerContainer.hidden = true;
  questionTitle.innerHTML = "<h1>Time's Up!</h1>";
}

// Reset the game when the timer runs out.
function resetGame() {
  usedQuestions = [];
  secondsLeft = 90;
}

// End the game if all questions are answered automatically.
function noQuestionsLeft() {
  endGameDisplay();
  questionTitle.innerHTML = "<h1>All questions answered!</h1>";
}

// Questions, stored as objects. The answer1 pair is always 'true'.
const question1 = {
  question: "What is a boolean?",
  answer1: "A data type that is either true or false.",
  answer2: "A type of error, caused by ghosts.",
  answer3: "A string that contains both letter and number characters.",
  answer4: "A type of traditional Norweigian shoe.",
};

const question2 = {
  question: "What is a string?",
  answer1:
    "Zero or more characters written with quotes, which can be stored in a variable.",
  answer2:
    "Several different variables, connected together in a row, like knots in a rope.",
  answer3:
    "A mathematical sum that is automatically calculated in the console.",
  answer4:
    "The laces used to tie up traditional Norweigian shoes worn by a computer.",
};

const question3 = {
  question:
    "What command would you need to put in your code to display 'Your Text Here' in the console?",
  answer1: "console.log('Your Text Here')",
  answer2: "log.this('Your Text Here')",
  answer3: "speak('Your Text Here')",
  answer4: "beeep boooooop",
};

const question4 = {
  question: "Which of these could you use to start a conditional statement?",
  answer1: "if",
  answer2: "can",
  answer3: "conditional-statement",
  answer4: "clip clap",
};

const question5 = {
  question: "Why would you want to create a loop?",
  answer1: "To repeat several lines of code multiple times.",
  answer2: "To disrupt the time space continuum.",
  answer3: "To lace up your traditional wooden shoes.",
  answer4: "Its fun to annoy the computer.",
};

const question6 = {
  question: "Which of these two keywords are commonly used to create a loop?",
  answer1: "for and while",
  answer2: "if and when",
  answer3: "loop and loopy",
  answer4: "clip and clap",
};

const question7 = {
  question:
    "Which two languages are commonly used with Javascript to build a webpage",
  answer1: "HTML and CSS",
  answer2: "HTML and CSY",
  answer3: "jQuery and Bootstrap",
  answer4: "Bootstrap made by Norweigan elves",
};

const question8 = {
  question: "What is string concatenation?",
  answer1: "Adding two strings together and storing them as one string value",
  answer2: "Including a cat value within the string",
  answer3: "Something a computer does to get a little buzz",
  answer4: "A way of storing a string in an array",
};

const question9 = {
  question: "What is a function?",
  answer1:
    "A set of instructions / code for the computer stored in one place, so it can be used multiple times",
  answer2: "Any of the maths symbols: +, -, / or *",
  answer3: "What we use to compare numerical and boolean values, ie: '==='",
  answer4: "A small gathering of friends, or computers who like each other",
};

const question10 = {
  question: "Why is it important to regularly test code?",
  answer1: "So that bugs can quickly be recognised and fixed",
  answer2: "To keep the computer actively thinking and on its toes",
  answer3: "To exhaust the computer so its more likely to do what you want",
  answer4:
    "If a computer runs through code repeatedly, its more like to remember it and get it right",
};
const questionPool = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
