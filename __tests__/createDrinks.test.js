import { createWine } from "../src/modules/menu/createDrinks";

describe('createWine', () => {
    const testWine = createWine({
        name: 'trebbiano',
        bottlePrice: 19.95,
        country: 'italy',
        description: 'easy drinking, crisp, apple',
        wineType: 'white'
    });
    it('should return an object with provided properties', () => {
        expect(testWine.name).toBe('trebbiano');
        expect(testWine.price).toEqual({ '175ml': 5.95, '250ml': 7.95, '750ml': 19.95 });
        expect(testWine.country).toBe('italy');
        expect(testWine.description).toBe('easy drinking, crisp, apple');
        expect(testWine.drinkType).toBe('wine');
        expect(testWine.wineType).toBe('white');
    });
});
