import getNextTwoWeeks from "../../src/modules/utils/getNextTwoWeeks";

describe("getNextTwoWeeks", () => {
	it("should return an array with 14 items", () => {
		const result = getNextTwoWeeks();
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBe(14);
	});
	it("should return today's date as the first item", () => {
		const result = getNextTwoWeeks();
		const today = new Date();
		const formattedToday = formatDate(today);
		expect(result[0]).toEqual(formattedToday);
	});
	it("should return dates for the next two weeks", () => {
		const result = getNextTwoWeeks();
		const latestDate = result[result.length - 1];

		const today = new Date();
		const twoWeeksLater = new Date(today);
		twoWeeksLater.setDate(today.getDate() + 13);

		const formattedLatestDate = formatDate(twoWeeksLater);
		expect(latestDate).toEqual(formattedLatestDate);
	});
});

function formatDate(date) {
	const options = { weekday: "long", day: "numeric", month: "long" };
	return date.toLocaleDateString("en-US", options);
}
