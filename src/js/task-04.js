let counterValue = 0;

const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);
const value = document.querySelector("#value");
decBtn.addEventListener("click", () => {
	counterValue--;
	value.textContent = counterValue;
});
incBtn.addEventListener("click", () => {
	counterValue++;
	value.textContent = counterValue;
});
