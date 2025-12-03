export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpForce = 2;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  fall() {
    this.velocity = this.velocity + this.gravity; //velocity = 0 - stagnant at first and then starts to fall and with each frame the fall is faster
    this.y = this.y + this.velocity; //as the velocity increases, the positioning should increase so that the character moves downwards (more positive)
  }
}
