const submitForm = function (form) {
	const formData = {
		date: form.querySelector("select[name='date']").value,
		time: form.querySelector("select[name='time']").value,
		numOfPeople: form.querySelector("select[name='number']").value,
		fullName: form.querySelector("input[name='full-name']").value,
		email: form.querySelector("input[name='email-address']").value,
	};

	displayFormSubmittedMessage(form, formData);

	return formData;
};

const displayFormSubmittedMessage = function (form, data) {
	const bookingMessage = `Your table as been booked for ${data.numOfPeople} on ${data.date} at ${data.time}.`;
	const submissionMessage = document.createElement("p");
	submissionMessage.textContent = bookingMessage;

	form.parentElement.appendChild(submissionMessage);
	form.parentElement.removeChild(form);
};

export { submitForm };
