const createMenuItem = function(name, price, ingredients) {
    return { name, price, ingredients };
}

const createFoodItem = function(name, price, ingredients, isVegetarian) {
    const foodItem = createMenuItem(name, price, ingredients)
    
    foodItem.isVegetarian = isVegetarian;
    foodItem.type = 'food';

    return foodItem;
}

export { createFoodItem };