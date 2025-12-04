export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = 0;
    this.gravity = 0.5;
    this.jumpForce = 2;
    this.onTheGround = false;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  collision(platform) {
    // Only check if falling
    for (const platform of platforms) {
      if (this.velocity >= 0) {
        //when character is not moving upwards (can be falling or just stadanding)
        // Character edges
        let feet = this.y + this.h;
        let nextFeet = feet + this.velocity;

        // Platform edges (TOP-LEFT ORIGIN!)
        let pTop = platform.y;
        let pLeft = platform.x;
        let pRight = platform.x + platform.w;

        // horizontal overlap
        let withinX = this.x + this.w > pLeft && this.x < pRight;

        // vertical collision with platform top
        let hittingTop = feet <= pTop && nextFeet >= pTop;

        if (withinX && hittingTop) {
          this.y = pTop - this.h; // place on platform
          this.velocity = 0;
          this.onGround = true;
          return;
        }
      }
    }

    // no collision this frame
    this.onGround = false;
  }

  fall() {
    if (!this.onGround) {
      this.velocity += this.gravity; // //velocity = 0 - stagnant at first and then starts to fall and with each frame the fall is faster
      this.y += this.velocity; //as the velocity increases, the positioning should increase so that the character moves downwards (more positive)
    }
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
