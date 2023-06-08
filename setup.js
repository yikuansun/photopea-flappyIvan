var playerPos, frame, playerYVelocity, clicked, obstaclesPos, gameOn, coinPos, score, scrollSpeed;

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
    gameOn = true;
    coinPos = {
        x: 1400,
        y: 100,
        r: 32,
    };
    score = 0;
    scrollSpeed = 3;

    await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'Flappy Ivan Kutskir')");
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");

    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/bgPlate.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "bgPlate";`);

    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);

    for (var i = 0; i < obstaclesPos.length; i++) {
        await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/dinoBill.png");
        await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "dinoBill${i}";`);

    }

    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/photopeaCoin.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "photopeaCoin";`);

    await Photopea.runScript(window.parent, `app.activeDocument.artLayers.add();
    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
    app.activeDocument.activeLayer.textItem.contents = "hello world";`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.textItem.size = 24;`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "scoreCounter";`);

    return new Promise(function(resolve, reject) {
        resolve();
    });
}

document.querySelector("button").addEventListener("click", function() {
    clicked = true;
});