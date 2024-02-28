import "./book-a-table.css";

import getNextTwoWeeks from "../utils/getNextTwoWeeks";
import getTimes from "../utils/getTimes";
import getGuests from "../utils/getGuests";

const createBookDialog = function () {
	const dialog = document.createElement("dialog");
	dialog.id = "book-a-table";
	dialog.classList.add("dialog-closed");

	const form = document.createElement("form");

	const inputs = createFormInputs();

	inputs.emailInput.pattern =
		// https://emailregex.com/
		// eslint-disable-next-line no-control-regex
		"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)])";

	for (const input in inputs) {
		form.appendChild(inputs[input].label);
	}

	const submitButton = createButton("Confirm reservation", "submit");
	form.appendChild(submitButton);
	form.noValidate = true;

	const closeButton = createButton("×");
	closeButton.classList.add("close");
	dialog.appendChild(closeButton);
	closeButton.addEventListener("mousedown", () => {
		dialog.classList.remove("dialog-open");
		setTimeout(() => {
			dialog.classList.add("dialog-closed");
		}, 10);
		setTimeout(() => {
			dialog.close();
		}, 610);
	});

	dialog.appendChild(form);

	return dialog;
};

const createFormInputs = function () {
	return {
		dateInput: createLabelledDropdown("date", "Date", getNextTwoWeeks()),
		timeInput: createLabelledDropdown("time", "Time", getTimes()),
		guestsInput: createLabelledDropdown("number", "Number of guests", getGuests(8)),
		nameInput: createLabelledInput("text", "Full name"),
		emailInput: createLabelledInput("email", "Email address"),
	};
};

const createButton = function (buttonText, type = "button") {
	const button = document.createElement("button");
	button.type = type;
	button.textContent = buttonText;

	return button;
};

const createLabelledInput = function (type, labelText) {
	const label = document.createElement("label");
	label.textContent = `${labelText}*:`;

	const input = document.createElement("input");
	input.type = type;

	label.appendChild(input);

	return { label, input };
};

const createLabelledDropdown = function (name, labelText, options) {
	const label = document.createElement("label");
	label.textContent = `${labelText}:`;

	const select = document.createElement("select");
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

export default createBookDialog;
