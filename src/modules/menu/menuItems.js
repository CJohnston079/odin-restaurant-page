const createMenuItem = function({ name, price, type }) {
    return { name, price, type };
};

const createFood = function({ name, price, ingredients, isVegetarian = false }) {
    const newFood = createMenuItem({ name, price, type: 'food' });
    return { ...newFood, ingredients, isVegetarian };
};

const createDrink = function({ name, price }) {
    return createMenuItem({ name, price, type: 'drink' });
};

export { createFood, createDrink };
