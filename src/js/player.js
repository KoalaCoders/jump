import Controlled from './controlled';
import game from './game.js';

export default class Player extends Controlled {

  constructor(holder) {
    super(...arguments);
    this.class = this.id = 'player';
    this.initalX = this.holder.offsetWidth / 2;

    this.createElement();

    this.actions = {
      37: this.moveLeft.bind(this),
      38: this.jump.bind(this),
      32: this.jump.bind(this),
      39: this.moveRight.bind(this)
    };

    window.onkeydown = e => {
      let action = this.actions[e.keyCode];
      if (action && !game.pause) action();
    };
  }

  moveLeft() {
    if(this.cords.x < (this.radius + 150)) return;

    this.position = {
      x: this.cords.x - 250
    }
  }

  moveRight() {
    if(this.cords.x > (this.holder.offsetWidth - this.radius - 150)) return;

    this.position = {
      x: this.cords.x + 250
    }
  }

  jump() {
    if (this.isJumping) return;



    this.isJumping = true;
    this.element.style.bottom = '70%';

    setTimeout(() => { this.element.style.bottom = 0; }, 500);
    setTimeout(() => { this.isJumping = false; }, 1000);
  }
}
