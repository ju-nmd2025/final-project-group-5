import { Spike } from "./spike.js";
import { Platform } from "./platform.js";

let canvasWidth = 500;
let canvasHeight = 800;
let floor = 800;

// The following screenMove function was adapted from https://codeheir.com/blog/2021/03/13/how-to-code-doodle-jump/
function screenMove(character) {
  if (character) {
    translate(0, canvasHeight / 2 - character.y);
  }
}

function drawFloor() {
  push();
  strokeWeight(2);
  stroke(0);
  line(0, floor, canvasWidth, floor);
  pop();
}

let StartButton;
let frog;

function loadImages() {
  StartButton = loadImage("./jjnew.png");
  frog = loadImage("./character.png");
}

//start and restart button
function drawButton(x, y, w, h) {
  push();
  //button shape
  strokeWeight(0);
  fill(178, 0, 50);
  stroke(178, 0, 50);
  image(StartButton, x, y, w, h);
}

// //// game state = start
function start() {
  background(233, 237, 230);
  drawButton(150, 130, 200, 100, 20);
}
//// game state = runGame
function runGame(character, spikes, platforms, floor, spikeGap, gap) {
  screenMove(character);
  background(233, 237, 230);

  //landing counter
  textAlign(LEFT);
  textSize(15);
  fill(0);
  text("Safe Landings: " + character.landing, 50, character.y - 150);
  drawFloor();

  character.jumpForce = character.intialVelocity;

  for (const spike of spikes) {
    spike.draw();
    character.badCollision(spikes);
  }

  let highestSpike = spikes[spikes.length - 1];
  if (character.y < highestSpike.y + 600) {
    spikes.push(new Spike(random(width), highestSpike.y - spikeGap)); //fix spike regeneration  
  }

  for (const platform of platforms) {
    platform.draw();
    character.goodCollision(platforms);
  }
  let lastPlatform = platforms[0];
  if (lastPlatform.y > floor) {
    platforms.push(
      new Platform(
        random(width),
        platforms[platforms.length - 1].y - gap,
        false
      )
    );
  }

  character.draw();

  character.fall();

  if (character.y + character.h >= floor) {
    //prevents the character from falling underground
    character.velocity = 0; //velocity of falling is reduced
    character.y = floor - character.h; //character.y position comes to a stop
  }

  character.move();

  // The following 6 lines was adapted from https://codeheir.com/blog/2021/03/13/how-to-code-doodle-jump/
  if (character.x + character.w < 0) {
    character.x = 440;
  } //these if statements makes sure that u dont move the character off screen
  if (character.x + character.w > 500) {
    character.x = 5;
  }

  if (character.velocity > 30) {
    character.gameState = "end";
    character.y = floor;
  }
}

//// game state = end
function end(character) {
  background(233, 237, 230);
  push();
  textSize(32);
  fill(248, 16, 46);
  stroke(0);
  strokeWeight(0);
  text("GAME OVER", 150, 400);
  text("Safe Landings:" + " " + character.landing, 125, 450);
  textFont("Garamond");
  pop();
  drawButton(150, 130, 200, 100, 20);
}

export {
  runGame,
  screenMove,
  start,
  end,
  loadImages,
  StartButton,
  frog,
  drawButton,
  canvasWidth,
  canvasHeight,
  floor,
};
