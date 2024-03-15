const setEmailPattern = function (input) {
	input.pattern =
		"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)])";
};

// const checkRequiredInputs = function () {};

// const checkPatternInputs = function () {};

const checkFormIsValid = function (form) {
	// const nameInput = form.children[1].lastChild;
	// const emailInput = form.children[4].lastChild;
	const requiredInputs = getRequiredInputs(form);

	requiredInputs.forEach(input => {
		console.log(input.textContent);
		if (input.validity.valueMissing) {
			alert("please fill in all fields");
			return;
		}
	});

	// if (!emailInput.checkValidity()) {
	// 	alert("please enter a vaid email address");
	// 	return;
	// }
};

const getRequiredInputs = function (form) {
	return Array.from(form.children)
		.map(child => child.lastChild)
		.filter(input => input.required);
};

export { setEmailPattern, checkFormIsValid };
