const submitForm = function (form) {
	const formData = {
		date: form.querySelector("select[name='date']").value,
		time: form.querySelector("select[name='time']").value,
		numOfPeople: form.querySelector("select[name='number']").value,
		fullName: form.querySelector("input[name='full-name']").value,
		email: form.querySelector("input[name='email-address']").value,
	};

	displayFormSubmittedMessage(formData);

	return formData;
};

const displayFormSubmittedMessage = function (data) {
	const bookingMessage = `Your table as been booked for ${data.numOfPeople} on ${data.date} at ${data.time}.`;

	console.log(bookingMessage);
};

export { submitForm };
