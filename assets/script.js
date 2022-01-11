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

function startTimer() {
  displayCountdown.innerHTML = "Hello";
  console.log("The start button has been clicked.");
}

/*
var secondsLeft = 30;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    var timeEl = document.querySelector("#timer");
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for the game.";
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
      console.log("Timer is working");
    }
  }, 1000);
}
*/



// Code for a countdown timer.


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
