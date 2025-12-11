import { Character } from "./character.js";
import { Platform } from "./platform.js";
import { Spike } from "./spike.js";
import { runGame, end, start, loadImages, froggie, drawButton, canvasWidth, canvasHeight, floor } from "./gameHandler.js";

let character;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  loadImages();
  character = new Character(25, 450, 50, 50, froggie);
}

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

  if (character.gameState == "end") {
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
