import render from "./render.js";
import circularCollision from "./circularCollision.js";

async function playSound(uri) {
    var audio = new Audio(uri);
    audio.play();
}

let deltaTime = 0;
let lastTime = (new Date()).getTime();
export default async function update(pea, gameVars) {
    let startTime = (new Date()).getTime();
    deltaTime = (startTime - lastTime) / 1000;
    lastTime = startTime;

    gameVars.playerYVelocity += 12 * deltaTime;
    if (gameVars.playerPos[1] >= 700) gameVars.playerYVelocity = 0;
    if (gameVars.playerPos[1] <= 0) gameVars.playerYVelocity = 2;
    if (gameVars.clicked) {
        gameVars.playerYVelocity = -5;
        gameVars.clicked = false;
        playSound("sound/flap.wav");
    }
    
    gameVars.playerPos[1] += gameVars.playerYVelocity;

    for (var dinoBill of gameVars.obstaclesPos) {
        dinoBill.x -= gameVars.scrollSpeed * deltaTime;
        if (dinoBill.x <= 0) {
            dinoBill.x = 800;
            dinoBill.y = Math.random() * 700;
        }
        if (circularCollision({
            x: gameVars.playerPos[0],
            y: gameVars.playerPos[1],
            r: 38
        }, dinoBill)) {
            gameVars.gameOn = false;
            await pea.runScript(`alert("you died.");`);
            playSound("sound/lose.wav");
        }
    }

    gameVars.coinPos.x -= gameVars.scrollSpeed * deltaTime;
    if (gameVars.coinPos.x <= 0) {
        gameVars.coinPos.x = 1400;
        gameVars.coinPos.y = Math.random() * 700;
    }
    if (circularCollision({
        x: gameVars.playerPos[0],
        y: gameVars.playerPos[1],
        r: 38
    }, gameVars.coinPos)) {
        gameVars.score++;
        gameVars.coinPos.x = 1400;
        gameVars.coinPos.y = Math.random() * 700;
        gameVars.scrollSpeed += 3;
        playSound("sound/coin.wav");
    }

    if (gameVars.frame % 6 == 0) render(pea, gameVars);
    gameVars.frame++;

    if (gameVars.gameOn) requestAnimationFrame(() => {
        update(pea, gameVars);
    });
}