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
    it('should set properties inherited from createMenuItems', () => {
        expect(testFood.name).toBe('Sandwich');
        expect(testFood.price).toBe(5.99);
        expect(testFood.ingredients).toEqual(['bread', 'butter']);
    });
    it('should set type property to "food"', () => {
        expect(testFood.type).toBe('food');
    });
    it('should set isVegetarian property', () => {
        expect(testFood.isVegetarian).toBe(true);
    });
});
