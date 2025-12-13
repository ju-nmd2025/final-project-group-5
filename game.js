import { Character } from "./character.js";
import { Platform } from "./platform.js";
import { Spike } from "./spike.js";
import {
  runGame,
  end,
  start,
  loadImages,
  frog,
  drawButton,
  canvasWidth,
  canvasHeight,
  floor,
} from "./gameHandler.js";

let character;

let gap;
let platforms = [];
let spikes = [];
let spikeGap;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  loadImages();
  character = new Character(25, 750, 50, 50, frog);

  // The following 12 lines was adapted from https://codeheir.com/blog/2021/03/13/how-to-code-doodle-jump/

  let platformCount = 5;
  gap = height / platformCount;
  for (let i = 1; i < 10; i++) {
    let newPlatform = new Platform(random(canvasWidth), height * 1.5 - i * gap);
    platforms.push(newPlatform);
  }

  let spikeCount = 4;
  spikeGap = height / spikeCount;
  for (let i = 1; i < 10; i++) {
    let newSpike = new Spike(random(canvasWidth), floor - i * spikeGap); //remove game over error 
    spikes.push(newSpike);
  }
}

function mousePressed() {
  if (mouseX > 150 && mouseX < 350 && mouseY > 130 && mouseY < 230) {
    character.gameState = "runGame";
    character.y = floor - character.h;
    character.landing = 0;
    for (const platform of platforms) {
      platform.visited = false;
    }
  }
}

function draw() {
  if (character.gameState == "start") {
    start();
  }

  if (character.gameState == "runGame") {
    runGame(character, spikes, platforms, floor, spikeGap, gap);
  }

  if (character.gameState == "end") {
    end(character);
    drawButton(150, 130, 200, 100, 20);
  }
}

// All your other code is above!
window.setup = setup;

window.draw = draw;

window.addEventListener("keydown", function (event) {
  character.move();
});

window.addEventListener("click", function (event) {
  mousePressed();
});
