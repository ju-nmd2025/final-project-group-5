import { Character } from "./character";
import { Platform } from "./platform";

function setup() {
  createCanvas(400, 490);
}
let character = new Character(50, 50, 50, 50);
let platforms = [
  new Platform(270, 200, 80, 20),
  new Platform(175, 300, 80, 20),
  new Platform(100, 150, 80, 20),
];

function draw() {
  background(125, 207, 182);
  character.draw();
  for (const platform of platforms) {
    platform.draw();
    platform.y -= 3;

    if (platform.y + platform.h < 0) {
      platform.y = 490;
    }
  }
}
