function getNextTwoWeeks() {
	let dates = [];
	let today = new Date();

	for (let i = 0; i < 14; i++) {
		let date = new Date(today);
		date.setDate(today.getDate() + i);
		dates.push(formatDate(date));
	}
	return dates;
}

function formatDate(date) {
	const options = { weekday: "long", day: "numeric", month: "long" };
	return date.toLocaleDateString("en-US", options);
}

export default getNextTwoWeeks;
