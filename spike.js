export default class Spike {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }


draw() {
    push();
    stroke(178,0,50);
    fill(178,0,50);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
} 

export { Spike }
