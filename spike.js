export class Spike {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 20;
  }

  draw() {
    push();
    stroke(178, 0, 50);
    fill(178, 0, 50);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

// export { Spike };
