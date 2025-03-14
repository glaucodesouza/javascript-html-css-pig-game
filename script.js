'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');//get the score element by id
const score1El = document.getElementById('score--1'); //get the score element
const current0El = document.getElementById('current--0'); //get the current score element
const current1El = document.getElementById('current--1'); //get the current score element

const diceEl = document.querySelector('.dice');//get the dice class
const btnNew = document.querySelector('.btn--new');//get the button new, by its class
const btnRoll = document.querySelector('.btn--roll');//get the button roll, by its class
const btnHold = document.querySelector('.btn--hold');//get the button hold, by its class

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //hide the dice now, using hidden class

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling the dice functionality
btnRoll.addEventListener('click', function(){
  //1 generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;
  //2 displaying the dice
  diceEl.classList.remove('hidden'); //show the dice
  diceEl.src = `dice-${dice}.png`;//change dice correct number

  //3 check for rolled 1
  if(dice !== 1){
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

