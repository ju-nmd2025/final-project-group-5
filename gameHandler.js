function screenMove() {
    if (character) {
        translate(0, canvasWidth / 2 - character.y);
    }
}
function checkCollision(character, floor, platforms) {
    if (character.y < floor && character.isStanding(platforms)) {
        character.fall();
    }
}

export { screenMove, checkCollision };