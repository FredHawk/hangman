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
  let array = []; 
  for (let i = 0; i < word.length; i++) {
    array[i] = "_";
  }
  return array;
}

const showPlayerProgress = function (answerArray) {
  resultElement.innerHTML = `${answerArray.join(" ")}`;
}

const getGuess = function () {
  return guessForm.value.toLowerCase();
}

const drawHangman = function (wrongGuesses) {
  // This function will draw the hanged man one limb at a time based on how many wrong guesses have been made.
  // It will take the current wrong guess number and draw that many parts.
  // Parts are hill, pole, crosspole, rope, head, body, arms, legs. In total 8. So when 8 guesses have been made the man is hung.
  if (wrongGuesses === 7) {
    // Hill
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumseagreen";
    ctx.arc(55, 200, 50, Math.PI, 0, false);
    ctx.stroke();
    ctx.closePath();
    
  }
  if (wrongGuesses === 6) {
    // Pole
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(55,150);
    ctx.stroke();
    ctx.closePath();
  }
  if (wrongGuesses === 5) {
    // Crossbar
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(125,50);
    ctx.stroke();
    ctx.closePath();
  }
  if (wrongGuesses === 4) {
    // Rope
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "lightgrey";
    ctx.moveTo(125,50);
    ctx.lineTo(125,95);
    ctx.stroke();
    ctx.closePath();
  }
  if (wrongGuesses === 3) {
    // Head
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(139,109);
    ctx.arc(125, 109, 14,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "slateblue";
    ctx.moveTo(121,104);
    ctx.arc(120, 104, 1,0,2*Math.PI);
    ctx.moveTo(129, 104);
    ctx.arc(130, 104, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(125, 109);
    ctx.arc(125, 109, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Mouth
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(130, 114);
    ctx.arc(125, 114, 5,0,1*Math.PI);
    ctx.stroke();
    ctx.closePath();

  }
  if (wrongGuesses === 2) {
    ctx.clearRect(0, 0, width, height);
    // Hill
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumseagreen";
    ctx.arc(55, 200, 50, Math.PI, 0, false);
    ctx.stroke();
    ctx.closePath();

    // Pole
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(55,150);
    ctx.stroke();
    ctx.closePath();

    // Crossbar
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(125,50);
    ctx.stroke();
    ctx.closePath();

    // Rope
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "lightgrey";
    ctx.moveTo(125,50);
    ctx.lineTo(125,95);
    ctx.stroke();
    ctx.closePath();

    // Head
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(139,109);
    ctx.arc(125, 109, 14,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "slateblue";
    ctx.moveTo(121,104);
    ctx.arc(120, 104, 1,0,2*Math.PI);
    ctx.moveTo(129, 104);
    ctx.arc(130, 104, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(125, 109);
    ctx.arc(125, 109, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Mouth
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(130, 114);
    ctx.arc(125, 114, 5,0,1*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Body
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(125,123);
    ctx.lineTo(125,145);
    ctx.stroke();
    ctx.closePath();

    

  }
  if (wrongGuesses === 1) {
    ctx.clearRect(0, 0, width, height);
    // Hill
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumseagreen";
    ctx.arc(55, 200, 50, Math.PI, 0, false);
    ctx.stroke();
    ctx.closePath();

    // Pole
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(55,150);
    ctx.stroke();
    ctx.closePath();

    // Crossbar
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(125,50);
    ctx.stroke();
    ctx.closePath();

    // Rope
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "lightgrey";
    ctx.moveTo(125,50);
    ctx.lineTo(125,95);
    ctx.stroke();
    ctx.closePath();

    // Head
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(139,109);
    ctx.arc(125, 109, 14,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "slateblue";
    ctx.moveTo(121,104);
    ctx.arc(120, 104, 1,0,2*Math.PI);
    ctx.moveTo(129, 104);
    ctx.arc(130, 104, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(125, 109);
    ctx.arc(125, 109, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // Mouth
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(130, 114);
    ctx.lineTo(120, 114);
    ctx.stroke();
    ctx.closePath();

    // Body
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(125,123);
    ctx.lineTo(125,145);
    ctx.stroke();
    ctx.closePath();

    // Arms
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(105,125);
    ctx.lineTo(125,135);
    ctx.moveTo(145,125);
    ctx.lineTo(125,135);
    ctx.stroke();
    ctx.closePath();
  }
  if (wrongGuesses === 0) {
    ctx.clearRect(0, 0, width, height);
    // Hill
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumseagreen";
    ctx.arc(55, 200, 50, Math.PI, 0, false);
    ctx.stroke();
    ctx.closePath();

    // Pole
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(55,150);
    ctx.stroke();
    ctx.closePath();

    // Crossbar
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "sienna";
    ctx.moveTo(55,50);
    ctx.lineTo(125,50);
    ctx.stroke();
    ctx.closePath();

    // Rope
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "lightgrey";
    ctx.moveTo(125,50);
    ctx.lineTo(125,95);
    ctx.stroke();
    ctx.closePath();

    // Head
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(139,109);
    ctx.arc(125, 109, 14,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.moveTo(118, 102);
    ctx.lineTo(123, 106);
    ctx.moveTo(123, 102);
    ctx.lineTo(118, 106);
    ctx.moveTo(126, 102);
    ctx.lineTo(131, 106);
    ctx.moveTo(131, 102);
    ctx.lineTo(126, 106);
    ctx.stroke();
    ctx.closePath();
    
    // Nose
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(125, 109);
    ctx.arc(125, 109, 1,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Mouth
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "antiquewhite";
    ctx.moveTo(120, 119);
    ctx.arc(125, 119, 5,1*Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    // Body
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(125,123);
    ctx.lineTo(125,145);
    ctx.stroke();
    ctx.closePath();
    
    // Arms
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(105,155);
    ctx.lineTo(125,135);
    ctx.moveTo(145,155);
    ctx.lineTo(125,135);
    ctx.stroke();
    ctx.closePath();

    // Legs
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "mediumpurple";
    ctx.moveTo(125,145);
    ctx.lineTo(115,175);
    ctx.moveTo(125,145);
    ctx.lineTo(135,175);
    ctx.stroke();
    ctx.closePath();
  }
}

const validateLetter = function (inputLetter) {
  const alphabet = /^[A-Za-z]+$/;
  if (inputLetter.match(alphabet)) {
    return true;
  } else {
    return false;
  }
}

const hasBeenGuessed = function (guess, guessedLetters) {
  guessedLetters.join('');
  if(guessedLetters.includes(guess)) {
    return true;
  } else {
    guessedLetters.push(guess);
    return false;
  }
}

const updateGameState = function (guess, word, answerArray) {
  let wrongLetter = true;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      answerArray[j] = guess;
      wrongLetter = false;
      remainingLetters--;
    }
    
  }
  if (wrongLetter === true) {
    wrongGuesses--;
  }
  return answerArray;
}

const showAnswerAndCongratulatePlayer = function(answerArray) {
  if (wrongGuesses === 0) {
    resultElement.innerHTML = messages.lose;
  }
  if(remainingLetters === 0) {
    resultElement.innerHTML = messages.win;
  }
}

// VARIABLES
let word = pickWord(words); 
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let wrongGuesses = 8;
const guessedLetters = [];
const resultElement = document.querySelector(".result");
const noticeElement = document.querySelector(".notice");
const guessed = document.querySelector(".guess");
const guessForm = document.querySelector(".get-guess");
const canvas = document.querySelector(".figure");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const livesElement = document.querySelector(".lives");

const messages = {
  win: `Good job! The answer was ${word.toUpperCase()}.`,
  lose: `Sorry buddy but you failed, the word was ${word.toUpperCase()}.`,
  pickLetter: `Guess a letter, or click Cancel to stop playing.`,
  singleLetter: `Please enter a single letter. Try again.`,
  onlyLetters: `Only letters are allowed. Try again.`,
  alreadyGuessed: `You have already guessed that. Try again.`,
}

let checkLetter = function () {
  if (remainingLetters > 0 && wrongGuesses > 0) {
    let guess = getGuess();
    if (guess === null || guess.length !== 1) {
      noticeElement.innerHTML = messages.singleLetter;
    } else if (validateLetter(guess) === false) {
      noticeElement.innerHTML = messages.onlyLetters;
    } else if (hasBeenGuessed(guess, guessedLetters)) {
      noticeElement.textContent = messages.alreadyGuessed;
    } else {
      noticeElement.innerHTML = "";
      let correctGuesses = updateGameState(guess, word, answerArray);
      showPlayerProgress(answerArray);
      drawHangman(wrongGuesses);
    }
    console.log(guessedLetters);
    guessed.textContent = `You have already guessed ${guessedLetters.join(", ").toUpperCase()}`;
    livesElement.innerHTML = ` Lives left: ${wrongGuesses}`;
    guessForm.value = "";
  }
  showAnswerAndCongratulatePlayer(answerArray);
}
document.body.onkeydown = function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    checkLetter();
  }
}