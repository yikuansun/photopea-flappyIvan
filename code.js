window.addEventListener("blur", function(e) {
    document.querySelector("span").style.display = "block";
});

window.addEventListener("focus", function(e) {
    document.querySelector("span").style.display = "none";
});

async function initGame() {
    var point_circle = function(point, circle) {
        var x = point.x;
        var y = point.y;
        var h = circle.x;
        var k = circle.y;
        var r = circle.radius;
        if (Math.pow(x - h, 2) + Math.pow(y - k, 2) <= Math.pow(r, 2)) return true;
        else return false;
    };

    var playerPos = [960, 1040];
    await Photopea.runScript(window.parent, "app.open('https://yikuansun.github.io/dumbspacething/img/player_ship.png', null, true);");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.translate(${960 - 97}, ${1000 - 77})`);
}

Photopea.runScript(window.parent, "app.documents.add(1920, 1080, 72, 'cool game')").then(async function() {
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");


    await initGame();
});