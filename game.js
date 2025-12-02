import { Character } from "./character";
import { Platform } from "./platform";
import { Platform } from "./spike";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}
let canvasWidth = 500;
let canvasHeight = 490;
let floor = 400;
let character = new Character(50, 50, 50, 50);
let platforms = [
  new Platform(270, 200, 80, 20),
  new Platform(175, 300, 80, 20),
  new Platform(100, 150, 80, 20),
  new Platform(50, 400, 80, 20),
  new Platform(320, 50, 80, 20),
  new Platform(200, 0, 80, 20),
];

function drawFloor() {
  push();
  strokeWeight(2);
  line(0, floor, canvasWidth, floor);
  pop();
}

function draw() {
<<<<<<< Updated upstream
  background(125, 207, 182);

=======
  background(216, 189, 170);
>>>>>>> Stashed changes
  character.draw();

  for (const platform of platforms) {
    platform.draw();
    platform.y -= 2;

    if (platform.y + platform.h < 0) {
      platform.y = 490;
    }

    if (characterFall(character, platforms)) {
      character.y += 10;
    }
  }

  function characterFall(character, platforms) {
    for (const platform of platforms) {
      if (character.isStanding(character, platform)) {
        return false;
      }
    }
    if (character.y + character.h < 400) {
      return true;
    }

    return false;
  }
  drawFloor();
}
function keyPressed() {
  if (!characterFall(character, platforms)) {
    character.y -= 120;
  }
}
