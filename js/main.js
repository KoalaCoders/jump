(() => {

class Controlled {

  constructor(holder) {
    this.holder = holder;
    this.holderHeight = this.holder.height();
  }

  createElement() {
    this.element = $('<div/>', {
        class: this.class,
        id: this.id
      });

    this.position = {
      x: this.initalX,
      y: 0
    }

    $(this.holder).append(this.element);

    this.radius = this.element.width() / 2;
  }

  die() {
    this.element.remove();
  }

  set position(val) {
    if (!this.cords) this.cords = {};

    if(val.y !== null) {
      this.cords.y = val.y;
      this.element.css('bottom', this.cords.y);
    }
    if(val.x !== null) {
      this.cords.x = val.x;
      this.element.css('left', this.cords.x);
    }
  }

  get x() {
    return this.element.offset().left + this.radius;
  }

  get y() {
    return this.holderHeight - this.radius - this.element.offset().top;
  }
}


/**
* ============================================
* ============================================
* ============================================
* Ball - main object
* ============================================
* ============================================
* ============================================
*/
class Player extends Controlled {

  constructor(holder) {
    super(...arguments);
    this.class = 'player';
    this.initalX = this.holder.width() / 2;

    this.createElement();

    this.actions = {
      37: this.moveLeft.bind(this),
      38: this.jump.bind(this),
      32: this.jump.bind(this),
      39: this.moveRight.bind(this)
    };

    $(window).on('keydown', e => {
      let action = this.actions[e.keyCode];
      if (action && !game.pause) action();
    });
  }

  moveLeft() {
    if(this.cords.x < (this.radius + 150)) return;

    this.position = {
      x: this.cords.x - 300
    }
  }

  moveRight() {
    if(this.cords.x > ($(this.holder).width() - this.radius - 150)) return;

    this.position = {
      x: this.cords.x + 300
    }
  }

  jump() {
    if (this.isJumping) return;

    this.isJumping = true;
    $('.player').css('bottom', '70%');
    window.setTimeout(() => {
      $('.player').css('bottom', '0');
    }, 500);
    window.setTimeout(() => {
      this.isJumping = false;
    }, 1000);
  }
}



/**
* ============================================
* ============================================
* ============================================
* Box
* ============================================
* ============================================
* ============================================
*/
class Box extends Controlled {
  constructor(holder, num) {
    super(...arguments);
    this.class = 'box';
    this.id = `box-${num}`;
    this.initalX = this.holder.width() + 200;
    this.createElement();
  }

  move() {
    if(!game.pause) this.position = { x: this.cords.x - 2 };

    if ((this.x > -this.radius) && (!game.fail))
      window.setTimeout(() => this.move(), 5000 / game.boxInterval);
    else {
      this.die();
      if(!game.fail) $('#score').text(++game.score);
    }

    check(this);
  }

}


/**
* ============================================
* ============================================
* ============================================
* Game
* ============================================
* ============================================
* ============================================
*/

function boxFactory(holder) {
  var boxCount = 0;

  let iterator = () => {
    if(!game.pause) {
      let box = new Box(holder, boxCount++);
      box.move();
    }

    if (!game.fail)
      window.setTimeout(iterator, Math.random() * 5000);
  }
  iterator();
}

function check(el) {
  if (!el.cords) return;
  const dx = Math.abs(el.x - player.x);
  const dy = Math.abs(el.y - player.y);

  if (dx < player.radius && dy < player.radius) stop();
}

function stop() {
  $('.game-over').removeClass('hidden');
  $('.holder').addClass('hidden');
  $('.game-over').on('click', () => { window.location.reload() });
  $(window).on('keydown', () => { window.location.reload() });
  $('#total-score').text(game.score);
  player.die();
  game.fail = true;
}

const game = {
  rootElement: $('#holder'),
  boxInterval: 1000,
  fail: false,
  pause: false,
  _score: 0
}

Object.defineProperty(game, 'score', {
  get: function() {
    return this._score;
  },

  set: function(value) {
    this._score = value;
    this.boxInterval += value * 10;
    }
});

$(window).on('blur', () => { game.pause = true; })
  .on('focus', () => { game.pause = false; });

const player = new Player(game.rootElement);
boxFactory(game.rootElement);

})();
