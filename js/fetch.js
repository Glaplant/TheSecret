async function getPoems() {
	const response = await fetch("./js/secret.json");
	const data = await response.json();
	console.log(data.poems);
	return data.poems;
}


async function getImages() {
	const response = await fetch("./js/secret.json");
	const data = await response.json();
	console.log(data.pictures);
	return data.pictures;
}

export { getPoems, getImages };
