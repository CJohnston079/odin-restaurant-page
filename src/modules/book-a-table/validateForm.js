const setEmailPattern = function (input) {
	input.pattern =
		"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)])";
};

const checkFormIsValid = function (form) {
	const requiredInputs = getRequiredInputs(form);
	const emailInput = form.querySelector("input[type='email']");

	checkEmailInput(emailInput);
	checkRequiredInputs(requiredInputs);
};

const getRequiredInputs = function (form) {
	return Array.from(form.children)
		.map(child => child.children[0])
		.slice(0, -1)
		.filter(input => input.required);
};

const checkRequiredInputs = function (requiredInputs) {
	requiredInputs.forEach(input => {
		const inputName = input.parentElement.textContent.split("*")[0].toLowerCase();

		if (input.validity.valueMissing) {
			showValidationMessage(input, `Please enter your ${inputName}`);
			return;
		}
	});
};

const checkEmailInput = function (emailInput) {
	if (!emailInput.checkValidity()) {
		showValidationMessage(emailInput, "Please enter a valid email address");
		return;
	}
};

const showValidationMessage = function (input, validationMessage = "Please enter valid input") {
	input.parentElement.lastChild.classList.remove("hidden");
	input.parentElement.lastChild.classList.add("visible");
	input.parentElement.lastChild.textContent = validationMessage;
};

const hideValidationMessage = function (input) {
	input.parentElement.lastChild.classList.remove("visible");
	input.parentElement.lastChild.classList.add("hidden");
};

export { setEmailPattern, checkFormIsValid, hideValidationMessage };
