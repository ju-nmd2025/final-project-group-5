import { Character } from "./character";
import { Platform } from "./platform";
import { screenMove } from "./gameHandler";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}
let canvasWidth = 500;
let canvasHeight = 490;
let floor = canvasHeight;
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
    character.y = canvasHeight - character.h; //character.y position comes to a stop
  }

  character.jump();
  if (character.x + character.w < 0) {
    character.x = 440;
  } //these if statements makes sure that u dont move the character off screen
  if (character.x + character.w > 490) {
    character.x = 5;
  }
}
