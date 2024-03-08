import { getPoems, getImages } from "./fetch.js";
import { imageGrid } from "./buildlHTML.js";

async function init() {
	await getPoems();
	console.log(getPoems);
	await getImages();
	await imageGrid();
}

init();
