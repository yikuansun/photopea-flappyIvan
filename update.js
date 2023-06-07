async function update() {
    playerYVelocity += 0.2;
    if (playerPos[1] >= 700) playerYVelocity = 0;
    
    playerPos[1] += playerYVelocity;

    if (frame % 5 == 0) render();
    frame++;

    requestAnimationFrame(update);
}