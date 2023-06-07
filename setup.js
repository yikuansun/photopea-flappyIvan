var playerPos, frame, playerYVelocity, clicked, obstaclesPos, gameOn;

async function setup() {
    playerPos = [300, 350];
    frame = 0;
    playerYVelocity = 0;
    clicked = false;
    obstaclesPos = [
        {
            x: 800,
            y: 600,
            r: 24,
        },
        {
            x: 1000,
            y: 500,
            r: 24,
        },
        {
            x: 1200,
            y: 400,
            r: 24,
        },
        {
            x: 1400,
            y: 300,
            r: 24,
        },
    ];
    var gameOn = true;

    await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'Flappy Ivan Kutskir')");
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);

    for (var i = 0; i < obstaclesPos.length; i++) {
        await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/dinoBill.png");
        await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "dinoBill${i}";`);

    }

    return new Promise(function(resolve, reject) {
        resolve();
    });
}

document.querySelector("button").addEventListener("click", function() {
    clicked = true;
});