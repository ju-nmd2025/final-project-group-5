export function screenMove() {
  if (character) {
    translate(0, canvasWidth / 2 - character.y);
  }
}
export function checkCollision(character, floor, platforms) {
        if (
            character.y < floor &&
            character.isStanding(platforms)
        ) {
            character.fall();
        }
    }
