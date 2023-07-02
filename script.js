'use strict';

document.querySelector('.score').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice').classList.add('hidden');

let isPlaying = true;
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.getElementById(`current--${activeplayer}`).textContent =
    currentScore;
  activeplayer = activeplayer === 0 ? 1 : 0;
};

let totalScores = [0, 0];
let currentScore = 0;
let activeplayer = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (isPlaying) {
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    document.querySelector('.dice').src = `dice${dice}.png`;

    document.querySelector('.dice').style.display = 'inline';

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (isPlaying) {
    totalScores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      totalScores[activeplayer];

    if (totalScores[activeplayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  currentScore = 0;
  totalScores = [0, 0];
  isPlaying = true;

  document.getElementById('score--0').textContent = currentScore;
  document.getElementById(`score--1`).textContent = currentScore;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
});
