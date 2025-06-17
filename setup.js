let gameVars = {
    playerPos: [300, 350],
    frame: 0,
    playerYVelocity: 0,
    clicked: false,
    obstaclesPos: [
        {
            x: 800,
            y: 600,
            r: 20,
        },
        {
            x: 1000,
            y: 500,
            r: 20,
        },
        {
            x: 1200,
            y: 400,
            r: 20,
        },
        {
            x: 1400,
            y: 300,
            r: 20,
        },
    ],
    gameOn: true,
    coinPos: {
        x: 1400,
        y: 100,
        r: 36,
    },
    score: 0,
    scrollSpeed: 3,
};
let pea;

export default async function setup() {
    pea = new Photopea(window.parent);

    await pea.runScript("app.documents.add(800, 700, 72, 'Flappy Ivan Kutskir')");
    await pea.runScript("app.UI.fitTheArea()");

    await pea.openFromURL("https://yikuansun.github.io/photopea-flappyIvan/img/bgPlate.png");
    await pea.runScript(`app.activeDocument.activeLayer.name = "bgPlate";`);

    await pea.openFromURL("https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await pea.runScript(`app.activeDocument.activeLayer.name = "ivanHead";`);

    for (var i = 0; i < gameVars.obstaclesPos.length; i++) {
        await pea.openFromURL("https://yikuansun.github.io/photopea-flappyIvan/img/dinoBill.png");
        await pea.runScript(`app.activeDocument.activeLayer.name = "dinoBill${i}";`);

    }

    await pea.openFromURL("https://yikuansun.github.io/photopea-flappyIvan/img/photopeaCoin.png");
    await pea.runScript(`app.activeDocument.activeLayer.name = "photopeaCoin";`);

    await pea.runScript(`app.activeDocument.artLayers.add();
    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
    app.activeDocument.activeLayer.textItem.contents = "hello world";`);
    await pea.runScript(`app.activeDocument.activeLayer.textItem.size = 24;`);
    await pea.runScript(`app.activeDocument.activeLayer.name = "scoreCounter";`);

    document.querySelector("button").addEventListener("click", function() {
        gameVars.clicked = true;
    });

    return new Promise(function(resolve, reject) {
        resolve([ pea, gameVars ]);
    });
}