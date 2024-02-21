import { createFoodItem, createDrinkItem } from "../src/modules/menu/menuItems";

describe('createMenuItem', () => {
    it.each([
      ['createFoodItem', createFoodItem],
      ['createDrinkItem', createDrinkItem],
    ])('%s should inherit the provided properties from createMenuItem', (funcName, createItem) => {
        const testMenuItem = createItem({ name: 'test menu item', price: 3.99 });

        expect(testMenuItem).toHaveProperty('name');
        expect(testMenuItem).toHaveProperty('price');
        expect(testMenuItem).toHaveProperty('type');

        expect(testMenuItem).toEqual({
            name: 'test menu item',
            price: 3.99,
            type: funcName === 'createFoodItem' ? 'food' : 'drink',
            isVegetarian: funcName === 'createFoodItem' ? false : undefined,
        });
    });
});

describe('createFoodItem', () => {
    const testFood = createFoodItem({
        name: 'bacon sandwich',
        price: 3.99,
        ingredients: ['bread', 'bacon'],
    });
    it('should have an array property of "ingredients"', () => {
        expect(testFood.hasOwnProperty('ingredients')).toBe(true);
        expect(Array.isArray(testFood.ingredients)).toBe(true);
        expect(testFood.ingredients).toEqual(['bread', 'bacon']);
    });
    it('should have isVegetarian property which defaults to false', () => {
        expect(testFood.hasOwnProperty('isVegetarian')).toBe(true);
        expect(testFood.isVegetarian).toBe(false);
    });
});

// describe('createDrinksItem', () => {
//     const testDrink = createDrinkItem({ name: 'tea', price: 2.99 });
// });
