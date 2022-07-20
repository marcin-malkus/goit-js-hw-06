const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
	"dfgfg",
];

const list = document.querySelector("#ingredients");
const items = [];
for (const ingredient of ingredients) {
	const item = document.createElement("li");
	item.textContent = ingredient;
	item.classList.add("item");
	items.push(item);
}
list.append(...items);
