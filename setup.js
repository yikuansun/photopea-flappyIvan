var playerPos, frame, playerYVelocity, clicked;

async function setup() {
    playerPos = [300, 350];
    frame = 0;
    playerYVelocity = 0;
    clicked = false;

    await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'Flappy Ivan Kutskir')");
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);

    return new Promise(function(resolve, reject) {
        resolve();
    });
}

document.querySelector("button").addEventListener("click", function() {
    clicked = true;
});