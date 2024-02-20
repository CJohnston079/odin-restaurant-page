import { createFoodItem } from "../src/modules/menu/menuItems";

describe('createFoodItem', () => {
    let testFood;

    beforeEach(() => {
        testFood = createFoodItem('Sandwich', 5.99, ['bread', 'butter'], true);
    });

    it('should return food item with inherited properties from createMenuItem', () => {
        expect(testFood.hasOwnProperty('name')).toBe(true);
        expect(testFood.hasOwnProperty('price')).toBe(true);
        expect(testFood.hasOwnProperty('ingredients')).toBe(true);
    });
});
