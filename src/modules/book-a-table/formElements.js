import getNextTwoWeeks from "../utils/getNextTwoWeeks";
import getTimes from "../utils/getTimes";
import getGuests from "../utils/getGuests";

const createForm = function () {
	const form = document.createElement("form");
	const inputs = createFormInputs();
	const submitButton = createButton("Confirm reservation", "submit");

	for (const input in inputs) {
		form.appendChild(inputs[input].label);
	}

	form.appendChild(submitButton);
	form.noValidate = true;

	submitButton.addEventListener("click", e => {
		e.preventDefault();

		const nameInput = form.children[3].lastChild;
		const emailInput = form.children[4].lastChild;

		if (nameInput.validity.valueMissing || emailInput.validity.valueMissing) {
			alert("please fill in all fields");
			return;
		}

		if (!emailInput.checkValidity()) {
			alert("please enter a vaid email address");
			return;
		}
	});

	return form;
};

const createButton = function (buttonText, type = "button") {
	const button = document.createElement("button");

	button.type = type;
	button.textContent = buttonText;

	return button;
};

const createFormInputs = function () {
	const inputs = {
		dateInput: createLabelledDropdown("date", "Date", getNextTwoWeeks()),
		timeInput: createLabelledDropdown("time", "Time", getTimes()),
		guestsInput: createLabelledDropdown("number", "Number of guests", getGuests(8)),
		nameInput: createLabelledInput("text", "Full name"),
		emailInput: createLabelledInput("email", "Email address"),
	};

	inputs.nameInput.input.setAttribute("required", true);
	inputs.emailInput.input.setAttribute("required", true);

	inputs.nameInput.input.placeholder = "";
	inputs.emailInput.input.placeholder = "";

	return inputs;
};

const createLabelledInput = function (type, labelText) {
	const label = document.createElement("label");
	const input = document.createElement("input");

	label.textContent = `${labelText}*:`;
	input.type = type;

	label.appendChild(input);

	return { label, input };
};

const createLabelledDropdown = function (name, labelText, options) {
	const label = document.createElement("label");
	const select = document.createElement("select");

	label.textContent = `${labelText}:`;
	select.name = name;

	options.forEach(optionText => {
		const option = document.createElement("option");

		option.value = optionText;
		option.textContent = optionText;
		select.appendChild(option);
	});

	label.appendChild(select);

	return { label, select };
};

export { createForm, createButton };
