import Box from './box.js';
import game from './game.js';

export default {
  holder: holder,
  rootElement: document.getElementById('holder'),
  boxInterval: 0,
  fail: false,
  pause: false,
  _score: 0,

  factory() {
    let count = 0;

    let iterator = () => {
      if(!game.pause) {
        let obj = new Box(this.holder, count++);
        obj.move();
      }

      if (!game.fail)
        setTimeout(iterator, Math.random() * 5000 + 1000);
    }

    iterator();
  },

  check(el) {
    if (!el.cords) return;
    const dx = Math.abs(el.x - this.player.x);
    const dy = Math.abs(el.y - this.player.y);

    if (dx < this.player.radius && dy < this.player.radius) stop();
  },

  stop() {
    let gameOver = document.getElementsByClassName('game-over'),
      holder = document.getElementsByClassName('holder'),
      totalScore = document.getElementById('total-score')

    gameOver.classList.add('hidden');
    holder.classList.add('hidden');

    setTimeout(() => {
      gameOver.onclick = () => { window.location.reload() };
      window.onkeydown = () => { window.location.reload() };
    }, 1000);

    totalScore.innerText = game.score;
    this.player.die();
    game.fail = true;
  },

  get score() {
    return this._score;
  },

  set score(value) {
    this._score = value;
    if(value % 10 == 0) this.boxInterval += 1;
  }
}
