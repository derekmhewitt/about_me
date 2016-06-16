'use strict';

//This was just a test alert to make sure js was hooked to index.html
//alert('Yeaaaahhhhhhhh!!!');

function getUserName() {
  //collect userName for use in the greeting
  var userName = prompt('Hi user! Welcome to my About Me page. What is your name?');
  alert ('Welcome ' + userName + ', glad you\'re here.');
  return userName;
}

//This varaiable stores the # of questions the user gets right and will be displayed at the end
var userCorrectAnswerTotal = 0;

function question1() {
  //Q1: Does derek like puppies and licorice?  No, Derek likes ponies and bubblegum.
  var answer1 = prompt('Does Derek like puppies and licorice?').toLowerCase();

  console.log('The user answered ' + answer1 + ' to question 1.');

  if (answer1 === 'yes' || answer1 === 'y'){
    alert('Sorry that\'s incorrect, Derek likes ponies and bubblegum.');
  } else if(answer1 === 'no' || answer1 === 'n'){
    alert('You\'re right!  Derek actually likes ponies and bubblegum.');
    userCorrectAnswerTotal++;
  } else{
    alert('Please enter a Yes or No (or Y/N) value for your answer.');
  }
}

function question2() {
  //Q2: Is Derek's favorite color green?  Yes
  var answer2 = prompt('Is Derek\'s favorite color green?').toLowerCase();

  console.log('The user answered ' + answer2 + ' to question 2.');

  if (answer2 === 'yes' || answer2 === 'y'){
    alert('You\'re right, Derek\'s favorite color is green!');
    userCorrectAnswerTotal++;
  } else if(answer2 === 'no' || answer2 === 'n'){
    alert('Sorry you\'re wrong, Derek\'s favorite color is actually green.');
  } else {
    alert('Please enter a Yes or No (or Y/N) value for your answer.');
  }
}

function question3() {
  //Q3: Does Derek like bouldering? No, Derek likes rock and ice climbing.
  var answer3 = prompt('Does Derek like bouldering?').toLowerCase();

  console.log('The user answered ' + answer3 + ' to question 3.');

  if (answer3 === 'yes' || answer3 === 'y'){
    alert('Sorry you\'re wrong, Derek likes rock and ice climing, not bouldering.');
  } else if(answer3 === 'no' || answer3 === 'n'){
    alert('You\'re right, Derek likes rock and ice climbing instead.');
    userCorrectAnswerTotal++;
  } else {
    alert('Please enter a Yes or No (or Y/N) value for your answer.');
  }
}

function question4() {
  //Q4: Does Derek like computer gaming?  Yes.
  var answer4 = prompt('Does Derek like computer gaming?').toLowerCase();

  console.log('The user answered ' + answer4 + ' to question 4.');

  if (answer4 === 'yes' || answer4 === 'y'){
    alert('You\'re right, Derek does like computer gaming!');
    userCorrectAnswerTotal++;
  } else if(answer4 === 'no' || answer4 === 'n'){
    alert ('Sorry you\'re wrong, Derek does like computer gaming.');
  } else {
    alert('Please enter a Yes or No (or Y/N) value for your answer.');
  }
}

function question5() {
  //Q5: Did Derek graduate from High School in 2004?  No, he graduated in 2003.
  var answer5 = prompt('Did Derek graduate from High School in 2004?').toLowerCase();

  console.log('The user answered ' + answer5 + ' to question 5.');

  if(answer5 === 'yes' || answer5 === 'y'){
    alert('Sorry you\'re wrong, Derek graduated from High School in 2003');
  } else if(answer5 === 'no' || answer5 === 'n'){
    alert('You\'re right, Derek graduated in 2003!');
    userCorrectAnswerTotal++;
  } else {
    alert('Please enter a Yes or No (or Y/N) value for your answer.');
  }
}

function question6() {
  //Q6: Guess at what age Derek got his first compuer of his own?  Answer: 12.  User gets 4 guesses and the question should respond with "too high" or "too low" to the user's guesses so they can narrow in on the right number.
  var question6CorrectAnswer = 12;

  //number of times the user guessed the answer
  var question6GuessCount = 0;
  do {
    question6GuessCount++;
    var answer6 = parseInt(prompt('At what age did Derek get his first computer of his own? He\'s 33 now so guess a number between 0 and 33, you have 4 tries to get the right answer!'));
    console.log('The user answered ' + answer6 + ' to question 6.');
    //If the user guesses the right answer tell them so
    if (answer6 === question6CorrectAnswer){
      alert('You\'re right, congratulations!  And it only took you ' + question6GuessCount + ' guesses!');
      userCorrectAnswerTotal++;
      break;
    }
    //If guess is too high tell the user "too high"
    else if (answer6 > question6CorrectAnswer && answer6 < 34){
      alert('Close but no cigar, your guess is too high.');
    }
    //If guess is too low tell the user "too low"
    else if(answer6 < question6CorrectAnswer && answer6 > 0){
      alert('Close but no cigar, your guess is too low.');
    }
    //If we get here the user probably entered something that wasn't a number, tell them so
    else{
      alert('Your guess wasn\'t between 0 and 33 or wasn\'t a number, but you still used up a guess.  Try again!');
    }
  }
  while (question6GuessCount < 4);
  //If the user ran out of guesses, after telling they're prompted above why they were wrong, this prompt informs them they ran out
  if (question6GuessCount >= 5){
    alert('Sorry you\'re out of guesses, you got this question wrong.');
  }
}

//Q7: This question will ask the user to name one of my Top Six Favorite Sodas, which are the top 6 from my index page.  They get 6 tries to guess the right answer.  At the end, whether they got the answer right or not (maybe two different prompts?) show the user the array.  Number them maybe?

function question7() {
  var question7GuessCount = 0;
  var q7UserCorrect = false;
  var question7CorrectAnswers = ['Full Throttle','Wild Cherry Pepsi','Red Bull','Doctor Pepper','Mountain Dew'];

  while(question7GuessCount < 6 && q7UserCorrect === false) {
    var answer7 = prompt('Guess one of Derek\'s Top Five Faorite Sodas or Energy Drinks').toLowerCase();
    console.log('The user answered ' + answer7 + ' to question 7.');
    for(var i = 0 ; i < question7CorrectAnswers.length ; i++) {
      if(answer7 === question7CorrectAnswers[i].toLowerCase()) {
        q7UserCorrect = true;
        userCorrectAnswerTotal++;
      }
    }
    if(q7UserCorrect === false) {
      alert('Sorry, you guessed wrong. Try again!');
      question7GuessCount++;
    }
  }
  if(q7UserCorrect === true) {
    alert('You guessed right, congratulations! The correct answers were ' + question7CorrectAnswers + '.');
  } else {
    alert('Sorry, you\'re out of guesses. The correct answers were ' + question7CorrectAnswers + '.');
  }
}

var userName = getUserName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();

//This alert greets the user by name and lets them know how many questions out of the total they got correct

alert('Thanks for playing my get-to-know-me game ' + userName + ', you got ' + userCorrectAnswerTotal + ' questions right out of 7.');
console.log('The user got ' + userCorrectAnswerTotal + ' questions right out of 7.');
