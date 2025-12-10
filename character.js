let froggie = loadImage("./character.png");

export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.landing = 0;
    this.velocity = 0;
    this.gravity = 0.5;
    this.jumpForce = 2;
    this.onGround = false;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    image(froggie, this.x, this.y, this.w, this.h);
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
          this.y = platform.y - this.h; // stop it from falling
          this.velocity = 0; //velocity is zero since we r not falling
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
          gameState = "end";
        }
      }
      this.onGround = false;
    }
  }
}
