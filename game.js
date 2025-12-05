import { Character } from "./character";
import { Platform } from "./platform";
import { screenMove } from "./gameHandler";

let canvasWidth = 500;
let canvasHeight = 800;
let floor = 500;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

let character = new Character(50, 50, 50, 50);
let platforms = [
  new Platform(150, 450, 80, 20), // near floor
  new Platform(60, 350, 80, 20),
  new Platform(260, 300, 80, 20),
  new Platform(120, 200, 80, 20),
  new Platform(300, 150, 80, 20),
  new Platform(40, 70, 80, 20),
  new Platform(210, 0, 80, 20),
  new Platform(130, -80, 80, 20),
  new Platform(310, -160, 80, 20),
  new Platform(50, -240, 80, 20),
  new Platform(260, -330, 80, 20),
  new Platform(100, -420, 80, 20),
  new Platform(320, -500, 80, 20),
  new Platform(80, -580, 80, 20),
  new Platform(240, -670, 80, 20),
  new Platform(140, -760, 80, 20),
  new Platform(300, -850, 80, 20),
  new Platform(90, -940, 80, 20),
];

function drawFloor() {
  push();
  strokeWeight(2);
  line(0, floor, canvasWidth, floor);
  pop();
}

function draw() {
  screenMove();
  background(216, 189, 170);
  drawFloor();
  for (const platform of platforms) {
    platform.draw();
    character.collision(platform);
  }
  character.draw();

  character.fall();
  if (character.y + character.h >= floor) {
    //prevents the character from falling underground
    character.velocity = 0; //velocity of falling is reduced
    character.y = floor - character.h; //character.y position comes to a stop
  }

  character.jump();
  if (character.x + character.w < 0) {
    character.x = 440;
  } //these if statements makes sure that u dont move the character off screen
  if (character.x + character.w > 800) {
    character.x = 5;
  }
}
