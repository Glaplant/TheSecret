import {getPoems,getImages} from "./fetch.js"
import {imageGrid} from "./buildlHTML.js"

async function init(){
    await getPoems();
    await getImages();
    await imageGrid();
}

init();
