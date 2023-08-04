'use strict';
/*
console.log(document.querySelector('.message').textContentb);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

// ******************** EventListner ********************

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }

  //   whan input is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //   When input is big
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'NUmber is Big ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //   when input is small
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is small';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red;';
    }
  }
});
