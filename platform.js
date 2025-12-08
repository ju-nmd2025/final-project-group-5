export default class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.visited = false;
  }

  draw() {
    push();
    stroke(123, 63, 0);
    fill(123, 63, 0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
