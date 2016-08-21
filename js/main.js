(() => {

/**
* ============================================
* ============================================
* ============================================
* Ball - main object
* ============================================
* ============================================
* ============================================
*/
class Ball {
  constructor(holder) {
    this.holder = holder;

    this.element = $('<div/>', {
        class: 'ball',
        id: 'ball'
      });

    this.actions = {
      37: this.moveLeft,
      38: this.jump.bind(this),
      39: this.moveRight
    };

    this.radius = 10;
    $(holder).append(this.element);

    $(window).bind('keydown', e => {
      const action = this.actions[e.keyCode];
      if (action) action();
    });
  }

  get x() {
    return this.element.offset().left;
  }

  get y() {
    return this.holder.height() - $('#ball').height() - this.element.offset().top;
  }

  moveLeft() {
    $('.ball').css('left', '30%');
    window.setTimeout(() => {
      $('.ball').css('left', '50%');
    }, 600);
  }

  moveRight() {
    $('.ball').css('left', '70%');
    window.setTimeout(() => {
      $('.ball').css('left', '50%');
    }, 600);
  }

  jump() {
    if (this.isJumping) return;

    this.isJumping = true;
    $('.ball').css('bottom', '50%');
    window.setTimeout(() => {
      $('.ball').css('bottom', '0');
    }, 600);
    window.setTimeout(() => {
      this.isJumping = false;
    }, 1200);
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
class Box {
  constructor(holder, num) {
    this.element = $('<div/>', {
      class: 'box',
      id: `box-${num}`
    });

    $(holder).append(this.element);

    let initalX = $(holder).width() + this.element.width();

    this.cords = {
      x: initalX,
      y: 0
    };
  }

  move() {
    this.setOffset(-2, 0);

    if ((this.cords.x > 0) && (!fail)) {
      window.setTimeout(() => this.move(), 10);
    } else {
      this.element.remove();
    }
    return this.cords;
  }

  setOffset(dx, dy) {
    this.cords.x += dx;
    this.cords.y += dy;

    this.element.css({
      left: this.cords.x,
      bottom: this.cords.y
    });

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
    let box = new Box(holder, boxCount++);
    box.move();
    if (!fail)
      window.setTimeout(iterator, Math.random() * 5000 + boxInterval);
  }
  iterator();
}

function check(el) {
  if (!el.cords) return;

  const dx = Math.abs(el.cords.x - ball.x);
  const dy = Math.abs(el.cords.y - ball.y);
  if (dx < ball.radius && dy < ball.radius) stop();
}

function stop() {
  alert('shit');
  fail = true;
}

var rootElement = $('#app');

let boxInterval = 1000;
const ball = new Ball(rootElement);
let fail = false;
boxFactory(rootElement);
})();
