import { Character } from "./character";
import { Platform } from "./platform";
import { screenMove } from "./gameHandler";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}
let canvasWidth = 500;
let canvasHeight = 490;
let floor = 200;
let character = new Character(50, 50, 50, 50);
let platforms = [
  new Platform(270, 100, 80, 20),
  new Platform(175, 150, 80, 20),
  new Platform(100, -200, 80, 20),
  new Platform(50, 500, 80, 20),
  new Platform(320, 50, 80, 20),
  new Platform(200, 0, 80, 20),
  new Platform(220, -670, 80, 20),
  new Platform(220, -570, 80, 20),
  new Platform(80, -6000, 80, 20),
  new Platform(300, -210, 80, 20),
  new Platform(260, -330, 80, 20),
  new Platform(140, -50, 80, 20),
  new Platform(310, -750, 80, 20),
  new Platform(90, -500, 80, 20),
  new Platform(80,-370,80,20),
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
  if (character.y + character.h >= 200) {
    //prevents the character from falling underground
    character.velocity = 0; //velocity of falling is reduced
    character.y = 200 - character.h; //character.y position comes to a stop
  }

  character.jump();
  if (character.x + character.w < 0) {
    character.x = 440;
  } //these if statements makes sure that u dont move the character off screen
  if (character.x + character.w > 490) {
    character.x = 5;
  }
}
