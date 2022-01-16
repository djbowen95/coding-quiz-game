# Coding Quiz Game
## 0A Introduction
This quiz game was built from scratch using HTML, CSS and Javascript.  
It is a simple game which tests knowledge of basic Javascript concepts.  
For each correctly answered question, the user gains a point.  

## 0B Contents  
- OA Introduction  
- OB Contents  
- 01 Main Design Features  
- - 01A Random Question Selection  
- - 01B Countdown Timer   
- - 01C Repeat Game Button  
- - 01D Score and High Score  
- 02 Bug Fixes  
- 03 Future Development Ideas  
- - 03A Saved Scoring  
- - 03B Responsive Layout  
- - 03C Question Numbers  
- - 03D Progress Bar  
- - 03E Animate with jQuery UI  
- - 03F Question Bank  


## 01 Main Design Features
### 01A Random Question Selection
Questions are randomly selected from a pool of ten questions.  
When a question is used, a corresponding value is pushed to an array.  
If a question has already been used, another question is selected.  
  
> let usedQuestions = [];  
> function selectNewQuestion() {  
>  let isUsed = true;  
>  let randomChoice = "";  
>  while (isUsed === true) {  
>    randomChoice = Math.floor(Math.random() * questionPool.length);  
>    isUsed = usedQuestions.includes(randomChoice);  
>  }  
>  usedQuestions.push(randomChoice);  
>  return randomChoice;  
> }
>   
> .assets/script.js, 74 - 84  
  
If the usedQuestions array is full, a function is run instead to end the game.  
  
> function generateQuestion() {  
>  if (usedQuestions.length === questionPool.length) {  
>    endGame(true);  
>  } else...  
> ...  
> }  
>  
> .assets/script.js, 60 - 71.  

There are four HTML elements which can contain the question answers.  
The correct answer as assigned to, and written within, one of these elements.  
A randomly generated number is passed through the function that writes it as a parameter.  

> function writeCorrectAnswer(nextQuestion, correctAnswerLocation) {  
>  responses[correctAnswerLocation  
> ].innerHTML = `<p class="right-answer">${nextQuestion.answer1}</p>`;  
> }  
>  
> .assets/script.js, 102 - 105  
  
The other answers are then written, with default positions 1 - 3.  
If the correct answer has been put in their position, they will be moved to position 4.  
This is done by passing the same randomly generated number as a parameter to the function that writes them:   

>function writeOtherAnswers(nextQuestion, correctAnswerLocation) {  
>  if (correctAnswerLocation != 0) {  
>    responses[0].innerHTML = `<p class="wrong-answer">${nextQuestion.answer2}</p>`;  
>  } else {  
>    responses[3].innerHTML = `<p class="wrong-answer">${nextQuestion.answer2}</p>`;  
>  }...  
> ...  
> }  
>  
> .assets/script.js, 107 - 123  
  
These two screenshots demonstrate the random question selection working.  
They show the same question in two playthroughs of the game.  
The correct answer can be found in position #3 and #1 respectively.   
.test-images/rmex-01a-01.png  
.test-images/rmex-01a-02.png  
  
### 01B Countdown Timer  
The quiz features a countdown timer, which sets to 90 at the start of each new game.  
When a question is answered incorrectly, the timer will decrease by by 10 seconds.  
When the timer runs out, the game ends, and the score is displayed on the page.  

### 01C Repeat Game Button
When the game is completed, a button appears which allows the quiz to be repeated.  
This button will reset the timer and empty the usedQuestion array.  
The end game display page, repeat game button and start game page are all hidden and revealed when necessary by the Javascript code.   

### 01D Score and High Score
The current score is stored under a variable.  
When the game ends, this score is displayed by the end game page.  
This variable is then reset, so that a new score is recorded in the next game.  

If the player plays the game multiple times, a high score will be saved.  
This is stored in a separate variable.  
A new value is only assigned to it if the current score is greater than the existing high score value.  

## 03 Future Development Ideas
### 03A Saved Scoring
I would like the project to save the score in local storage.  
It currently only saves the high score until the user reloads the page.  

The user story also asked for an option for inputting initials.  
I did not implement this due to time constraints, but feel like it will be easy to add.  

Finally I would like the project to display scores in a table.  
This way several initials / high score values can be displayed.  

### 03B Responsive Layout
I would like the project to feature flexbox or grid css to display the elements.  
When the page is displayed on mobile or a tablet, I would like it to appear differently.  
I would like the timer element to display beside the quiz, as well as the current score.  

### 03C Question Numbers
Currently the questions are assigned randomly but not numbered.  
I would like the questions to also show a number, which reflects when the occur in this instance of the playthrough of the quiz.  

### 03D Progress Bar
Learning this week about jQuery UI, I have seen that it can be used to create a progress bar.  
I would like to implement this into my webpage.   

### 03E Animate with jQuery UI
I would like to implement some of the following features:  
 - Animations for replacing questions with new questions  
 - Animation for wrong response  
 - Colour change to questions for right / wrong response  
 - Colour change to timer when it reduces by 10 seconds  
 - Some reaction when a mouse hovers over a response  

### 03F Question Bank
Lines 172 - 272 of .assets/script.js are objects which contain the questions.  
I would like these questions to be stored somewhere else.  
I would also like to refactor the code and bring down the overall length.   