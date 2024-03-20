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

	const heading = document.createElement("h2");
	heading.textContent = "Booking successful";

	const bookingMessage = document.createElement("p");
	bookingMessage.textContent = `Your table as been booked for ${bookingData.numOfPeople} on ${bookingData.date} at ${bookingData.time}.`;

	const confirmationMessage = document.createElement("p");
	confirmationMessage.textContent = `A confirmation email has been sent to ${bookingData.email}.`;

	const closeFormButton = createButton("Close this message");
	closeFormButton.addEventListener("mousedown", () =>
		closeDialog(document.querySelector("#book-a-table"), 0)
	);

	formSubmitElements.appendChild(heading);
	formSubmitElements.appendChild(bookingMessage);
	formSubmitElements.appendChild(confirmationMessage);
	formSubmitElements.appendChild(closeFormButton);

	return formSubmitElements;
};

export { submitForm };
