import getNextTwoWeeks from "../../src/modules/utils/getNextTwoWeeks";

describe('getNextTwoWeeks', () => {
    it("should return an array with 14 items", () => {
        const result = getNextTwoWeeks();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(14);
    });
});