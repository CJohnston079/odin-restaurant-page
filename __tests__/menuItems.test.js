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
        });
    });
});

describe('createFoodItem', () => {
    const testFood = createFoodItem({
        name: 'Sandwich',
        price: 3.99,
        ingredients: ['bread', 'butter'],
        isVegetarian: true
    });

    it('should return food item with inherited properties from createMenuItem', () => {
        expect(testFood.hasOwnProperty('name')).toBe(true);
        expect(testFood.hasOwnProperty('price')).toBe(true);
        expect(testFood.hasOwnProperty('ingredients')).toBe(true);
    });
    it('should set properties inherited from createMenuItems', () => {
        expect(testFood.name).toBe('Sandwich');
        expect(testFood.price).toBe(3.99);
        expect(testFood.ingredients).toEqual(['bread', 'butter']);
    });
    it('should set type property to "food"', () => {
        expect(testFood.type).toBe('food');
    });
    it('should set isVegetarian property', () => {
        expect(testFood.isVegetarian).toBe(true);
    });
});

describe('createDrinksItem', () => {
    const testDrink = createDrinkItem({ name: 'Tea', price: 2.99 });

    it('should return drink item with inherited properties from createMenuItem', () => {
        expect(testDrink.hasOwnProperty('name')).toBe(true);
        expect(testDrink.hasOwnProperty('price')).toBe(true);
    });
    it('should set properties inherited from createMenuItems', () => {
        expect(testDrink.name).toBe('Tea');
        expect(testDrink.price).toBe(2.99);
    });
    it('should set type property to "drink"', () => {
        expect(testDrink.type).toBe('drink');
    });
});
