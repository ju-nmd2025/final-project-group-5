export default class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 20;
    this.visited = false;
  }

  draw() {
    push();
    stroke(123, 63, 0);
    fill(85, 103, 48);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

export { Platform };
