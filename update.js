async function update() {
    playerYVelocity += 0.2;
    if (playerPos[1] >= 700) playerYVelocity = 0;
    if (clicked) {
        playerYVelocity = -5;
        clicked = false;
    }
    
    playerPos[1] += playerYVelocity;

    for (var dinoBill of obstaclesPos) {
        dinoBill.x -= 3;
        if (dinoBill.x <= 0) {
            dinoBill.x = 800;
            dinoBill.y = Math.random() * 700;
        }
        if (circularCollision({
            x: playerPos[0],
            y: playerPos[1],
            r: 38
        }, dinoBill)) {
            gameOn = false;
        }
    }

    if (frame % 5 == 0) render();
    frame++;

    if (gameOn) requestAnimationFrame(update);
}