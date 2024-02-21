const createMenuItem = function({ name, price, type }) {
    return { name, price, type };
};

const createFoodItem = function({ name, price, ingredients, isVegetarian }) {
    const newFood = createMenuItem({ name, price, type: 'food' });
    return { ...newFood, ingredients, isVegetarian };
};

const createDrinkItem = function({ name, price }) {
    return createMenuItem({ name, price, type: 'drink' });
};

export { createFoodItem, createDrinkItem };
