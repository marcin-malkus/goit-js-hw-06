const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (!email.value || !password.value) {
		alert("Wszystkie pola powinny być wypełnione!");
	} else {
		const data = {
			email: email.value,
			password: password.value,
		};
		console.log(data);
		event.currentTarget.reset();
	}
});
