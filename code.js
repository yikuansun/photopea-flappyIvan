import setup from "./setup.js";
import update from "./update.js";

setup().then(([ pea, gameVars ]) => {
    update(pea, gameVars, (new Date()).getTime());
});