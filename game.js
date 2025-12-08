import { Character } from "./character";
import { Platform } from "./platform";
import { screenMove } from "./gameHandler";
import { Spike } from "./spike";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}
let canvasWidth = 500;
let canvasHeight = 490;
let floor = 200;
let character = new Character(50, 50, 50, 50);
let platforms = [
  new Platform(70, 100, 80, 20),
  new Platform(50, 500, 80, 20),
  new Platform(350, 100, 80, 20),
  new Platform(280, -50, 80, 20),
  new Platform(60, -120, 80, 20),
  new Platform(230, -200, 80, 20),
  new Platform(370, -330, 80, 20),
  new Platform(100, -370, 80, 20),
  new Platform(260, -500, 80, 20),
  new Platform(50, -600, 80, 20),
  new Platform(300, -670, 80, 20),
  new Platform(140, -750, 80, 20),
  new Platform(360, -860, 80, 20),
  new Platform(80, -980, 80, 20),
  new Platform(260, -1100, 80, 20),
  new Platform(50, -1220, 80, 20),
  new Platform(300, -1340, 80, 20),
  new Platform(140, -1460, 80, 20),
  //
  new Spike(160, 20, 80, 20),
  new Spike(20, -260, 80, 20),
  new Spike(320, -420, 80, 20),
  new Spike(140, -550, 80, 20),
  new Spike(360, -720, 80, 20),
  new Spike(100, -900, 80, 20),
  new Spike(330, -1040, 80, 20),
  new Spike(160, -1180, 80, 20),
  new Spike(350, -1420, 80, 20),
];
let spikes = [
  new Spike(160, 20, 80, 20),
  new Spike(20, -260, 80, 20),
  new Spike(320, -420, 80, 20),
  new Spike(140, -550, 80, 20),
  new Spike(360, -720, 80, 20),
  new Spike(100, -900, 80, 20),
  new Spike(330, -1040, 80, 20),
  new Spike(160, -1180, 80, 20),
  new Spike(350, -1420, 80, 20),
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
  for (const spike of spikes) {
    spike.draw();
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
