export class Platform {
  constructor(x, y, r, g, b, breakable = false) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 20;
    this.r = r;
    this.g = g;
    this.b = b;
    this.visited = false;
    this.breakable = breakable;
  }

  draw() {
    stroke(123, 63, 0);
    fill(this.r, this.g, this.b); //85,103,48
    rect(this.x, this.y, this.w, this.h);
  }
}

// export { Platform };
