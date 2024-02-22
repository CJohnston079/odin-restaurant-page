import { createWine } from "../src/modules/menu/createDrinks";

describe('createWine', () => {
    it('should return', () => {
        expect(createWine()).toBe('');
    });
});