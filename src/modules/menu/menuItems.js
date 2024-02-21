const createMenuItem = function(name, price, ingredients, type) {
    return { name, price, ingredients, type };
};

const createFoodItem = function(name, price, ingredients, isVegetarian) {
    const newFood = createMenuItem(name, price, ingredients, 'food');
    
    return { ...newFood, isVegetarian };
};

const createDrinkItem = function(name, price, ingredients, isAlcoholic) {
    const newDrink = createMenuItem(name, price, ingredients, 'drink');
    
    return { ...newDrink, isAlcoholic };
};

export { createFoodItem, createDrinkItem };
