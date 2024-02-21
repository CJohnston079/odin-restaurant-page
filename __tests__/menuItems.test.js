import { createFoodItem, createDrinkItem } from "../src/modules/menu/menuItems";

describe('createFoodItem', () => {
    let testFood;

    beforeEach(() => {
        testFood = createFoodItem({
            name: 'Sandwich',
            price: 3.99,
            ingredients: ['bread', 'butter'],
            isVegetarian: true
        });
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
    let testDrink;

    beforeEach(() => {
        testDrink = createDrinkItem({
            name: 'Tea', 
            price: 2.99, 
        });
    });

    it('should return food item with inherited properties from createMenuItem', () => {
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