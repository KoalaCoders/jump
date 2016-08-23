export default class Controlled {

  constructor(holder) {
    this.holder = holder;
    this.holderHeight = this.holder.offsetHeight;
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add(this.class);
    this.element.id = this.id;

    this.holder.appendChild(this.element);

    this.position = {
      x: this.initalX,
      y: 0
    }

    setTimeout(() => {
      this.radius = this.element.offsetWidth / 2;
      console.log(this.element.offsetWidth);
    });
  }

  die() {
    this.element.outerHTML = "";
    this.element.parentElement.removeChild(this.element);
  }

  set position(val) {
    if (!this.cords) this.cords = {};

    if(val.y != undefined) {
      this.cords.y = val.y;
      this.element.style.bottom = this.cords.y;
    }
    if(val.x != undefined) {
      this.cords.x = val.x;
      this.element.style.left = this.cords.x;
    }
  }

  get x() {
    return this.element.offsetLeft + this.radius;
  }

  get y() {
    return this.holderHeight - this.radius - this.element.offsetTop;
  }
}
