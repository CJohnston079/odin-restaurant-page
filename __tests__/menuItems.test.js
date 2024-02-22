import { createFood, createDrink } from "../src/modules/menu/menuItems";

describe('createMenuItem', () => {
    it.each([
      ['createFood', createFood],
      ['createDrink', createDrink],
    ])('%s should inherit the provided properties from createMenuItem', (funcName, createItem) => {
        const testMenuItem = createItem({
            name: 'test menu item',
            price: 3.99,
            allergens: { isVegetarian: true }
        });

        expect(testMenuItem).toHaveProperty('name');
        expect(testMenuItem).toHaveProperty('type');
        expect(testMenuItem).toHaveProperty('price');
        expect(testMenuItem).toHaveProperty('allergens');

        expect(testMenuItem).toEqual({
            name: 'test menu item',
            type: funcName === 'createFood' ? 'food' : 'drink',
            price: 3.99,
            allergens: { isGlutenFree: false, isVegetarian: true, isVegan: false }
        });
    });
});

describe('createFood', () => {
    const testFood = createFood({
        name: 'bacon sandwich',
        price: 3.99,
        ingredients: ['bread', 'bacon'],
    });
    it('should have an array property of "ingredients"', () => {
        expect(testFood.hasOwnProperty('ingredients')).toBe(true);
        expect(Array.isArray(testFood.ingredients)).toBe(true);
        expect(testFood.ingredients).toEqual(['bread', 'bacon']);
    });
});

// describe('createDrinksItem', () => {
//     const testDrink = createDrink({ name: 'tea', price: 2.99 });
// });
