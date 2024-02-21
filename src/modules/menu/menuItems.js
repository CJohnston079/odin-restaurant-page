const createMenuItem = function({ name, price, ingredients, type }) {
    return { name, price, ingredients, type };
};

const createFoodItem = function({ name, price, ingredients, isVegetarian }) {
    const menuItem = createMenuItem({ name, price, ingredients, type: 'food' });
    return { ...menuItem, isVegetarian };
};

const createDrinkItem = function({ name, price, ingredients, isAlcoholic }) {
    const menuItem = createMenuItem({ name, price, ingredients, type: 'drink' });
    return { ...menuItem, isAlcoholic };
};

export { createFoodItem, createDrinkItem };
