export function screenMove() {
  if (character) {
    translate(0, canvasWidth / 2 - character.y);
  }
}