import getNextTwoWeeks from "../../src/modules/utils/getNextTwoWeeks";

describe('getNextTwoWeeks', () => {
    it("should return an array with 14 items", () => {
        const result = getNextTwoWeeks();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(14);
    });
    it("should return today's date as the first item", () => {
        const result = getNextTwoWeeks();
        const today = new Date();
        expect(result[0].getDate()).toEqual(today.getDate());
    });
    it('should return dates for the next two weeks', () => {
        const result = getNextTwoWeeks();
        const latestDate = result[result.length - 1];
        
        const today = new Date();
        const twoWeeksLater = new Date(today);
        twoWeeksLater.setDate(today.getDate() + 13);

        expect(latestDate.getDate()).toBe(twoWeeksLater.getDate());
    });
});