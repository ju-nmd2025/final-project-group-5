function screenMove() {
  if (character) {
    translate(0, canvasWidth / 2 - character.y);
  }
}

// //// game state = start
function start() {
  background(216, 189, 170);
  drawButton(150, 130, 200, 100, 20);
}
//// game state = runGame
function runGame() {
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
  if (character.y <= -900) {
    gameState = "end";
    character.y = floor;
  }
}

//// game state = end
function end() {
  background(216, 189, 170);
  push();
  textSize(32);
  fill(0);
  stroke(0);
  strokeWeight(0);
  text("GAME OVER", 150, 400);
  pop();
}

export { runGame, screenMove, start, end };
