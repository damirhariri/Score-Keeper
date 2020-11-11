const P1 = {
  score: 0,
  button: document.querySelector('#p1btn'),
  display: document.querySelector('#p1')
}

const P2 = {
  score: 0,
  button: document.querySelector('#p2btn'),
  display: document.querySelector('#p2')
}

// const p1 = document.querySelector('#p1btn');
// const p2 = document.querySelector('#p2btn');
const reset = document.getElementById('reset');
// let p1dsp =  document.querySelector('#p1');
// let p2dsp =  document.querySelector('#p2');
const playTo = document.querySelector('#playTo');


let winScore = 5;
// let p1scr = 0;
// let p2scr = 0;
let isGameOver = false;

function updateScore(player, opponent) {
  if(!isGameOver) {
    player.score +=1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

P1.button.addEventListener('click', ()=> {
  updateScore(P1, P2);
  // if(!isGameOver) {
  //   p1scr +=1;
  //   if (p1scr === winScore) {
  //     isGameOver = true;
  //     p1dsp.classList.add('has-text-success');
  //     p2dsp.classList.add('has-text-danger');
  //     p1.disabled = true;
  //     p2.disabled = true;
  //   }
  //   p1dsp.textContent = p1scr;
  // }
  
});

P2.button.addEventListener('click', ()=> {
  updateScore(P2, P1);
  // if(!isGameOver) {
  //   p2scr +=1;
  //   if (p2scr === winScore) {
  //     isGameOver = true;
  //     p2dsp.classList.add('has-text-success');
  //     p1dsp.classList.add('has-text-danger');
  //     p1.disabled = true;
  //     p2.disabled = true;
  //   }
  //   p2dsp.textContent = p2scr;
  // }
  
});

playTo.addEventListener('change', function () {
  winScore = parseInt(this.value);
  resetGame();
})

reset.addEventListener('click', resetGame);

function resetGame() {
  isGameOver = false;
  for (let p of [P1,P2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
  // P1.score = 0;
  // P2.score = 0;
  // P1.display.textContent = 0;
  // P2.display.textContent = 0;
  // P1.display.classList.remove('has-text-success', 'has-text-danger');
  // P2.display.classList.remove('has-text-success', 'has-text-danger');
  // P1.button.disabled = false;
  // P2.button.disabled = false;
}