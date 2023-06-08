function setPosScript(layerName, x, y) {
    return `var lay = app.activeDocument.layers.getByName("${layerName}");

    var bbox = lay.bounds;
    bbox[0] = ${x} - bbox[0] + (bbox[2] - bbox[0]) / 2;
    bbox[1] = ${y} - bbox[1] + (bbox[3] - bbox[1]) / 2;

    lay.translate(-bbox[0],-bbox[1]);`;
}

async function render() {
    await Photopea.runScript(window.parent, setPosScript("ivanHead", playerPos[0], playerPos[1]));
    for (var i = 0; i < obstaclesPos.length; i++) {
        await Photopea.runScript(window.parent, setPosScript("dinoBill" + i, obstaclesPos[i].x, obstaclesPos[i].y));
    }
    await Photopea.runScript(window.parent, setPosScript("photopeaCoin", coinPos.x, coinPos.y));
    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("scoreCounter").textItem.contents = "SCORE: ${score}";`);
}