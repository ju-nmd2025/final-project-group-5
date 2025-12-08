import { Character } from "./character";
import { Platform } from "./platform";
import { Spike } from "./spike";
import { runGame } from "./gameHandler";
import { end } from "./gameHandler";
import { start } from "./gameHandler";

let gameState = "start";

let canvasWidth = 500;
let canvasHeight = 800;
let floor = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

let character = new Character(25, 450, 50, 50);
let platforms = [
  new Platform(150, 450, 80, 20), // near floor
  new Platform(120, 200, 80, 20),
  new Platform(300, 150, 80, 20),
  new Platform(210, 0, 80, 20),
  new Platform(310, -160, 80, 20),
  new Platform(50, -240, 80, 20),
  new Platform(100, -420, 80, 20),
  new Platform(320, -500, 80, 20),
  new Platform(240, -670, 80, 20),
  new Platform(140, -760, 80, 20),
  new Platform(90, -940, 80, 20),
];

let spikes = [
  new Spike(60, 350, 80, 20),
  new Spike(260, 300, 80, 20),
  new Spike(40, 70, 80, 20),
  new Spike(130, -80, 80, 20),
  new Spike(260, -330, 80, 20),
  new Spike(80, -580, 80, 20),
  new Spike(300, -850, 80, 20),
];
function drawFloor() {
  push();
  strokeWeight(2);
  stroke(0);
  line(0, floor, canvasWidth, floor);
  pop();
}

//start and restart button
function drawButton(x, y, w, h, r) {
  push();
  //button shape
  strokeWeight(10);
  fill(194, 66, 56);
  stroke(57, 51, 51);
  rect(x, y, w, h, r);
  //text
  textSize(32);
  fill("white");
  strokeWeight(0);
  text("START", 200, 190);
}
function mousePressed() {
  if (mouseX > 150 && mouseX < 350 && mouseY > 130 && mouseY < 230) {
    gameState = "runGame";
    character.y = floor - character.h;
  }
}

function draw() {
  if (gameState == "start") {
    start();
  }

  if (gameState == "runGame") {
    runGame();
  }

  if (gameState == "end") {
    end();
    drawButton(150, 130, 200, 100, 20);
  }
}
