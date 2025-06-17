function setPosScript(layerName, x, y) {
    return `var lay = app.activeDocument.layers.getByName("${layerName}");

    var bbox = lay.bounds;
    bbox[0] = ${x} - bbox[0] + (bbox[2] - bbox[0]) / 2;
    bbox[1] = ${y} - bbox[1] + (bbox[3] - bbox[1]) / 2;

    lay.translate(-bbox[0],-bbox[1]);`;
}

export default async function render(pea, gameVars) {
    await pea.runScript(setPosScript("ivanHead", gameVars.playerPos[0], gameVars.playerPos[1]));
    for (var i = 0; i < gameVars.obstaclesPos.length; i++) {
        await pea.runScript(setPosScript("dinoBill" + i, gameVars.obstaclesPos[i].x, gameVars.obstaclesPos[i].y));
    }
    await pea.runScript(setPosScript("photopeaCoin", gameVars.coinPos.x, gameVars.coinPos.y));
    await pea.runScript(`app.activeDocument.layers.getByName("scoreCounter").textItem.contents = "SCORE: ${gameVars.score}";`);
    await pea.runScript(setPosScript("scoreCounter", 700, 50));
}