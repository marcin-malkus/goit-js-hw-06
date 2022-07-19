const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length;
console.log("Number of categories: " + numberOfCategories);

for (category of categories) {
	console.log("Category: " + category.querySelector("h2").textContent);
	const elements = category.querySelectorAll("li");
	console.log("Elements: " + elements.length);
}
