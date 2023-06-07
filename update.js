async function update() {
    playerYVelocity += 2;
    if (playerPos[1] >= 800) playerYVelocity = 0;
    
    playerPos[1] += playerYVelocity;

    if (frame % 10 == 0) render();
    frame++;

    requestAnimationFrame(update);
}