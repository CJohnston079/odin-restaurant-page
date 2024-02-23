import getTimes from "../../src/modules/utils/getTimes";

describe("getTimes", () => {
	it("should return an array", () => {
		const result = getTimes();
		expect(Array.isArray(result)).toBe(true);
	});
	it("should return an array of times", () => {
		const result = getTimes();
		expect(result[0]).toBe("12:00");
	});
	it("should exclude times between 14:00 and 17:00", () => {
		const result = getTimes();
		for (let i = 14; i < 17; i += 1) {
			const time = i + ":00";
			expect(result.includes(time)).toBe(false);
		}
	});
});
