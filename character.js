export class Character {
  landing = 0;
  velocity = 0;
  intialVelocity = -8; // the inclusion of intial velocity was adpated from https://www.youtube.com/watch?v=pHFtOYU-a20&t=581s
  gravity = 0.5;
  gravity = 0.5;
  jumpForce = 8;
  onGround = false;
  gameState = "start";

  constructor(x, y, w, h, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }

  goodCollision(platforms) {
    for (const platform of platforms) {
      if (this.velocity >= 0) {
        //when character is not moving upwards (can be falling or just stadanding)

        if (
          //conditions to check if the character is within the range of being on the platform or atleast overlapping it
          this.x + this.w > platform.x &&
          this.x < platform.x + platform.w &&
          this.y + this.h <= platform.y &&
          this.y + this.h + this.velocity >= platform.y
        ) {
          this.velocity = -9;
          this.jumpForce = this.intialVelocity;
          this.onGround = true;

          // The following lines of code was adapted from chatgpt: https://chatgpt.com/s/t_69395c7418a881919558488635b5a646
          if (!platform.visited) {
            platform.visited = true;
            this.landing += 1;
          }
          return;
        }
      }
      this.onGround = false;
    }
  }

  fall() {
    if (!this.onGround) {
      this.velocity += this.gravity; // //velocity = 0 - stagnant at first and then starts to fall and with each frame the fall is faster
      this.y += this.velocity; //as the velocity increases, the positioning should increase so that the character moves downwards (more positive)
    }
  }

  // The following usage of keyIsDown is adapted from https://codeheir.com/blog/2021/03/13/how-to-code-doodle-jump/
  move() {
    // the following two lines of code are adapted from https://www.youtube.com/watch?v=pHFtOYU-a20&t=581s
    this.jumpForce += this.gravity;
    this.y += this.jumpForce;

    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 5;
    }
  }

  jump() {
    this.velocity -= this.jumpForce;
  }

  badCollision(spikes) {
    for (const spike of spikes) {
      if (this.velocity >= 0) {
        //when character is not moving upwards (can be falling or just stadanding)

        if (
          //conditions to check if the character is within the range of being on the platform or atleast overlapping it
          this.x + this.w > spike.x &&
          this.x < spike.x + spike.w &&
          this.y + this.h <= spike.y &&
          this.y + this.h + this.velocity >= spike.y
        ) {
          this.gameState = "end";
        }
      }
    }
  }
}

// export { Character };
