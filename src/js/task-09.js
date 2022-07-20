function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeButton = document.querySelector(".change-color");
const colorNumber = document.querySelector(".color");

changeButton.addEventListener("click", () => {
	const newColor = getRandomHexColor();
	body.style.backgroundColor = newColor;
	colorNumber.textContent = newColor;
});
