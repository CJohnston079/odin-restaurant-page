import { createButton } from "./formElements";
import { closeDialog } from "./dialogElements";

const submitForm = function (form) {
	const bookingData = {
		date: form.querySelector("select[name='date']").value,
		time: form.querySelector("select[name='time']").value,
		numOfPeople: form.querySelector("select[name='number']").value,
		fullName: form.querySelector("input[name='full-name']").value,
		email: form.querySelector("input[name='email-address']").value,
	};

	displayFormSubmittedMessage(form, bookingData);

	return bookingData;
};

const displayFormSubmittedMessage = function (form, bookingData) {
	const formSubmitElements = createFormSubmitElements(bookingData);

	form.parentElement.appendChild(formSubmitElements);
	form.parentElement.removeChild(form);
};

const createFormSubmitElements = function (bookingData) {
	const formSubmitElements = document.createElement("div");

	const bookingMessage = `Your table as been booked for ${bookingData.numOfPeople} on ${bookingData.date} at ${bookingData.time}.`;
	const submissionMessage = document.createElement("p");
	submissionMessage.textContent = bookingMessage;

	const closeFormButton = createButton("Close");
	closeFormButton.addEventListener("mousedown", () =>
		closeDialog(document.querySelector("#book-a-table"), 0)
	);

	formSubmitElements.appendChild(submissionMessage);
	formSubmitElements.appendChild(closeFormButton);

	return formSubmitElements;
};

export { submitForm };
