export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    push();
    fill(194, 66, 56);
    strokeWeight(0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  isStanding(character, platform) {
    if (
      platform.y === character.y + character.h &&
      platform.x <= character.x + character.w &&
      platform.x + platform.w > character.x
    ) {
      return true;
    } else {
      return false;
    }
  }
}
