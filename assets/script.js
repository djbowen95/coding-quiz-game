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
    console.log("The display will be changed here.")
}

// Display a countdown timer, that counts down from 60. 
function startTimer() {
    let secondsLeft = 61;
    const timerInterval = setInterval(function() {
        secondsLeft--;
        displayCountdown.innerHTML = secondsLeft + " seconds remaining.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displayCountdown.innerHTML = "Time's up!";
        }
    }, 1000);
};

// Wrong answer button - to test code. 


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

// Code which changes the timer when a question is answered wrong.

// Code to keep track of a score.

// Code to store a score.

// Code that ends the game when the timer reaches zero.
