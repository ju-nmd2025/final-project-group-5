export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = 0;
    this.gravity = 0.5;
    this.jumpForce = 2;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  collision(platform) {
    if (
      this.x >= platform.x - platform.w / 2 &&
      this.x <= platform.x + platform.w / 2 &&
      this.y >= platform.y - platform.h / 2 &&
      this.y < platform.y + platform.h / 2
    ) {
      this.y = this.y; //dont fall
      this.velocity = 0; //velocity is zero since we r not falling
      this.jump(); // allows to jump again?
    }
  }

  fall() {
    this.velocity = this.velocity + this.gravity;
    this.y = this.y + this.velocity;
  }

  jump() {
    if (keyIsDown(UP_ARROW)) {
      this.velocity = this.velocity - this.jumpForce; //as the velocity decreases, the character moves up. more negative = higher up
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 5;
    }
  }
}
