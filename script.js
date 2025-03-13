'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');//et the score element
const score1El = document.getElementById('score--1'); //get the score element
const diceEl = document.querySelector('.dice');//get the dice class

//Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden'); //hide the dice now, using hidden class

