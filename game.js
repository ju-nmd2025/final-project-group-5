import Character from "./character";
function setup() {
  createCanvas(400, 490);
}
let character = new Character(50, 50, 50, 50);

function draw() {
<<<<<<< Updated upstream
  background(125, 207, 182);
=======
  background(51, 202, 127);
  character.draw();
>>>>>>> Stashed changes
}
