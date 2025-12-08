export default class Spike {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }


draw() {
    push();
    stroke(123, 63, 0);
    fill(128,128,128);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
} 