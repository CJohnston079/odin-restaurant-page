import getGuests from "../../src/modules/utils/getGuests";

describe('getGuests', () => {
    it('should return an array', () => {
        const result = getGuests();
        expect(Array.isArray(result)).toBe(true);
    });
    it('should contain "1 person" as first itme', () => {
        const result = getGuests();
        expect(result[0]).toBe('1 person');
    });
    it('should suffix all values apart from the first with "people"', () => {
        const result = getGuests(8);
        for (let i = 1; i < 8; i += 1) {
            expect(result[i]).toBe(`${i + 1} people`);
        };
    });
});