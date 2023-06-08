async function playSound(uri) {
    var audio = new Audio(uri);
    audio.play();
}

async function update() {
    playerYVelocity += 0.2;
    if (playerPos[1] >= 700) playerYVelocity = 0;
    if (playerPos[1] <= 0) playerYVelocity = 2;
    if (clicked) {
        playerYVelocity = -5;
        clicked = false;
        playSound("sound/flap.wav");
    }
    
    playerPos[1] += playerYVelocity;

    for (var dinoBill of obstaclesPos) {
        dinoBill.x -= scrollSpeed;
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
            await Photopea.runScript(window.parent, `alert("you died.");`);
            playSound("sound/lose.wav");
        }
    }

    coinPos.x -= scrollSpeed;
    if (coinPos.x <= 0) {
        coinPos.x = 1400;
        coinPos.y = Math.random() * 700;
    }
    if (circularCollision({
        x: playerPos[0],
        y: playerPos[1],
        r: 38
    }, coinPos)) {
        score++;
        coinPos.x = 1400;
        coinPos.y = Math.random() * 700;
        scrollSpeed += 0.05;
        playSound("sound/coin.wav");
    }

    if (frame % 6 == 0) render();
    frame++;

    if (gameOn) requestAnimationFrame(update);
}