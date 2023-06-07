function setPosScript(layerName, x, y) {
    return `var lay = app.activeDocument.layers.getByName("${layerName}");

    var bbox = lay.bounds;
    bbox[0] = ${x} - bbox[0] + (bbox[2] - bbox[0]) / 2;
    bbox[1] = ${y} - bbox[1] + (bbox[3] - bbox[1]) / 2;

    lay.translate(-bbox[0],-bbox[1]);`;
}

async function render() {
    await Photopea.runScript(window.parent, setPosScript("ivanHead", playerPos[0], playerPos[1]));
}