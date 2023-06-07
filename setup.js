var playerPos;

async function setup() {
    playerPos = [300, 350];

    await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'Flappy Ivan Kutskir')");
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);
}