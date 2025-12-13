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
let maxX;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  loadImages();
  character = new Character(25, 750, 50, 50, frog);

  // The following 12 lines was adapted from https://codeheir.com/blog/2021/03/13/how-to-code-doodle-jump/

  let platformCount = 6;
  gap = height / platformCount;
  maxX = canvasWidth - 80;
  for (let i = 1; i < 10; i++) {
    let breakable = random() < 0.1;
    let newPlatform = new Platform(
      random(maxX),
      height * 1.5 - i * gap,
      breakable
    );
    platforms.push(newPlatform);
    if (character.jumpForce < 0 && character.y < (3 / 4) * canvasHeight) {
      platform.y = platform.y - character.intialVelocity; //slide platforms down as character moves up
    }
  }

  let spikeCount = 4;
  spikeGap = floor / spikeCount;
  for (let i = 1; i < 10; i++) {
    let newSpike = new Spike(random(canvasWidth), floor - i * spikeGap); //remove game over error
    spikes.push(newSpike);
  }
}
function resetPlatform() {
  platforms.length = 0;
  let platformCount = 6;
  let gap = height / platformCount;
  for (let i = 1; i < 10; i++) {
    let breakable = random() < 0.2;
    let newPlatform = new Platform(
      random(maxX),
      height * 1.5 - i * gap,
      85,
      103,
      48,
      breakable
    );
    platforms.push(newPlatform);
    if (character.jumpForce < 0 && character.y < (3 / 4) * canvasHeight) {
      platform.y = platform.y - character.intialVelocity; //slide platforms down as character moves up
    }
  }
}

function resetSpikes() {
  let spikes = [];
  let spikeCount = 4;
  let spikeGap = floor / spikeCount;
  for (let i = 1; i < 10; i++) {
    let newSpike = new Spike(random(canvasWidth), floor - i * spikeGap);
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

    resetPlatform();
    resetSpikes();
  }
}

function draw() {
  if (character.gameState == "start") {
    start();
  }

  if (character.gameState == "runGame") {
    runGame(character, spikes, platforms, floor, spikeGap, gap, maxX);
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
