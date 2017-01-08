// Create array of words.
let words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "wild",
  "clown",
  "microwave",
  "gorilla",
  "banana",
  "speaker"
];

// Functions
const pickWord = function (word) {
  return word[Math.floor(Math.random() * word.length)];
}

const setupAnswerArray = function (word) {
  // Return the answer array
  // Setup initial answerArrays state.
  let array = []; 
  for (let i = 0; i < word.length; i++) {
    array[i] = "_";
  }
  return array;
}

const showPlayerProgress = function (answerArray) {
  // Use alert to show the player their progress
  resultElement.innerHTML = `${answerArray.join(" ")}`;
}

const getGuess = function () {
  // Use prompt to get a guess
  return guessForm.value.toLowerCase();
}

const drawHangman = function (wrongGuesses) {
  // This function will draw the hanged man one limb at a time based on how many wrong guesses have been made.
  // It will take the current wrong guess number and draw that many parts.
  // Parts are hill, pole, crosspole, rope, head, body, arms, legs. In total 8. So when 8 guesses have been made the man is hung.
  ctx.lineWidth = 4;
  ctx.strokeStyle = "mediumseagreen";
  if (wrongGuesses === 7) {
    // Hill
    ctx.arc(55, 200, 50, Math.PI, 0, false);
  }
  if (wrongGuesses === 6) {
    // Pole
    ctx.moveTo(55,50);
    ctx.lineTo(55,150);
  }
  if (wrongGuesses === 5) {
    // Crossbar
    ctx.moveTo(55,50);
    ctx.lineTo(125,50);
  }
  if (wrongGuesses === 4) {
    // Rope
    ctx.moveTo(125,50);
    ctx.lineTo(125,95);
  }
  if (wrongGuesses === 3) {
    // Head
    ctx.strokeRect(115, 95, 20, 20);
  }
  if (wrongGuesses === 2) {
    // Body
    ctx.moveTo(125,115);
    ctx.lineTo(125,145);
  }
  if (wrongGuesses === 1) {
    // Arms
    ctx.moveTo(105,125);
    ctx.lineTo(125,135);
    ctx.moveTo(145,125);
    ctx.lineTo(125,135);
  }
  if (wrongGuesses === 0) {
    // Legs
    ctx.moveTo(125,145);
    ctx.lineTo(105,175);
    ctx.moveTo(125,145);
    ctx.lineTo(145,175);
  }
  ctx.stroke();
}

const validateLetter = function (inputLetter) {
  const alphabet = /^[A-Za-z]+$/;
  if (inputLetter.match(alphabet)) {
    return true;
  } else {
    return false;
  }
}

const updateGameState = function (guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  // Guess was 1 letter, checking if it is in the secret word.
  let wrongLetter = true;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      // If it is in the word change answerArray state to reflect that.
      answerArray[j] = guess;
      wrongLetter = false;
      // Decrement the amount of letters remaining to be guessed.
      remainingLetters--;
    }
    
  }
  if (wrongLetter === true) {
    // Decrement the wrong guesses.
    wrongGuesses--;
  }
  return answerArray;
}

const showAnswerAndCongratulatePlayer = function(answerArray) {
  // Use alert to show the answer and congratulate the player
  if (wrongGuesses === 0) {
    resultElement.innerHTML = messages.lose;
  }
  if(remainingLetters === 0) {
    resultElement.innerHTML = messages.win;
  }
}

// VARIABLES
// Pick a random word.
let word = pickWord(words); 
let answerArray = setupAnswerArray(word);
// Setup how many letters remain to guess.
let remainingLetters = word.length;
// Amount of wrong guesses allowed
let wrongGuesses = 8;
const resultElement = document.querySelector(".result");
const noticeElement = document.querySelector(".notice");
const guessForm = document.querySelector(".get-guess");
const canvas = document.querySelector(".figure");
const ctx = canvas.getContext("2d");
const livesElement = document.querySelector(".lives");

// messages object
const messages = {
  win: `Good job! The answer was ${word.toUpperCase()}.`,
  lose: `Sorry buddy but you failed, the word was ${word.toUpperCase()}.`,
  pickLetter: `Guess a letter, or click Cancel to stop playing.`,
  singleLetter: `Please enter a single letter. Try again.`,
  onlyLetters: `Only letters are allowed. Try again.`,
}

// Function to run when button is clicked.
let checkLetter = function () {
  if (remainingLetters > 0 && wrongGuesses > 0) {
    // Get the letter from form.
    let guess = getGuess();
    // Check so guess isn't nothing and that it is a single letter.
    if (guess === null || guess.length !== 1) {
      // If it is nothing or not a single letter then say that it should only be a single letter.
      noticeElement.innerHTML = messages.singleLetter;
    } else if (validateLetter(guess) === false) {
      noticeElement.innerHTML = messages.onlyLetters;
    } else {
      noticeElement.innerHTML = "";
      // Check if the guessed letter is in the word or not.
      let correctGuesses = updateGameState(guess, word, answerArray);
      // Update and show if it was in the word or not.
      showPlayerProgress(answerArray);
      drawHangman(wrongGuesses);
    }
    // Display lives left
    livesElement.innerHTML = ` Lives left: ${wrongGuesses}`;
    // Reset the form input so it is ready for a new letter.
    guessForm.value = "";
  }
  // Checks if player has won or not.
  showAnswerAndCongratulatePlayer(answerArray);
}
document.body.onkeydown = function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    checkLetter();
  }
}