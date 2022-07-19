let inputElement = document.querySelector("#name-input");
let outputElement = document.querySelector("#name-output");

const changeElement = (event) => {
	if (!event.currentTarget.value) {
		//event.curentTarget odnosi sie do elementu na ktorym wykonuje sie zdarzenie(event)
		outputElement.textContent = "Anonymous";
	} else {
		outputElement.textContent = inputElement.value;
	}
};
inputElement.addEventListener("input", changeElement);
