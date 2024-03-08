import { getPoems, getImages } from "./fetch.js";

const gridWrapper = document.querySelector(".image-grid");
const divOne = document.createElement("div");
const divTwo = document.createElement("div");
const divOne = document.createElement("div");
const divOne = document.createElement("div");

const imageOne = document.createElement("img");

async function imageGrid() {
	const images = await getImages();
	console.log(images);
	for (const image in images) {
		console.log(images[image]);
	}
}

export { imageGrid };
