import { Character } from "./character";
import { Platform } from "./platform";
import { Spike } from "./spike";
// import { runGame } from "./gameHandler";
// import { end } from "./gameHandler";
// import { start } from "./gameHandler";
import {
  runGame,
  end,
  start,
  loadImages,
  froggie,
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
  let character = new Character(25, 750, 50, 50);

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
    let newSpike = new Spike(random(canvasWidth), height * 1.5 - i * spikeGap);
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
    runGame(character, spikes, platforms, floor);
  }

  if (gameState == "end") {
    end(character);
  }
}

// All your other code is above!
window.setup = setup;

window.draw = draw;

window.addEventListener("keydown", function (event) {
  character.jump();
});

window.addEventListener("click", function (event) {
  mousePressed();
});
