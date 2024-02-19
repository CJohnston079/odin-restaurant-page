const createMenuItem = function(name, price, ingredients) {
    return { name, price, ingredients };
}

const createFoodItem = function(name, price, ingredients, isVegetarian) {
    const { name, price, ingredients } = createMenuItem(name, price, ingredients);

    return { name, price, ingredients, type: 'food', isVegetarian };
}

export { createFoodItem };