const submitForm = function (form) {
	const date = form.querySelector("select[name='date']").value;
	const time = form.querySelector("select[name='time']").value;
	const number = form.querySelector("select[name='number']").value;
	const fullName = form.querySelector("input[name='full-name']").value;
	const email = form.querySelector("input[name='email-address']").value;

	console.log("Date:", date);
	console.log("Time:", time);
	console.log("Number of guests:", number);
	console.log("Full name:", fullName);
	console.log("Email address:", email);
	return form;
};

export { submitForm };
