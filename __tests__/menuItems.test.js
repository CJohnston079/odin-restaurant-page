import { createFood, createDrink } from "../src/modules/menu/menuItems";

describe('createMenuItem', () => {
    it.each([
      ['createFood', createFood],
      ['createDrink', createDrink],
    ])('%s should inherit the provided properties from createMenuItem', (funcName, createItem) => {
        const testMenuItem = createItem({ name: 'test menu item', price: 3.99 });

        expect(testMenuItem).toHaveProperty('name');
        expect(testMenuItem).toHaveProperty('price');
        expect(testMenuItem).toHaveProperty('type');

        expect(testMenuItem).toEqual({
            name: 'test menu item',
            price: 3.99,
            type: funcName === 'createFood' ? 'food' : 'drink',
            isVegetarian: funcName === 'createFood' ? false : undefined,
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
    it('should have isVegetarian property which defaults to false', () => {
        expect(testFood.hasOwnProperty('isVegetarian')).toBe(true);
        expect(testFood.isVegetarian).toBe(false);
    });
});

// describe('createDrinksItem', () => {
//     const testDrink = createDrink({ name: 'tea', price: 2.99 });
// });
