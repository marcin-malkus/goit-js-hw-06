function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector(`input[type="number"]`);
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let size = 30;
function createBoxes(amount) {
	let boxesArray = [];
	for (let i = 0; i < amount; i++) {
		boxesArray.push(
			`<div class="funnyBox" style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`
		);
		size += 10;
	}
	boxesArray = boxesArray.join("");
	boxes.insertAdjacentHTML("beforeend", boxesArray);
}

createButton.addEventListener("click", () => {
	let amount = numberOfBoxes.value;

	createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
	boxes.innerHTML = "";
	size = 30;
});
