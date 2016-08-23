import Controlled from './controlled';
import game from './game.js';

export default class Box extends Controlled {
  constructor(holder, num) {
    super(...arguments);
    this.class = 'box';
    this.id = `box-${num}`;
    this.initalX = this.holder.offsetWidth + 200;
    this.createElement();
  }

  move() {
    if(!game.pause) this.position = { x: this.cords.x - 2 - game.boxInterval };

    if ((this.x > -this.radius) && (!game.fail))
      window.setTimeout(() => this.move(), 5);
    else {
      this.die();
      if(!game.fail) document.getElementById('score').text(++game.score);
    }

    game.check(this);
  }

}
