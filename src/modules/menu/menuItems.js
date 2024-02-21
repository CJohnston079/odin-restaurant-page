const createMenuItem = function(name, price, ingredients) {
    return { name, price, ingredients };
}

const createFoodItem = function(name, price, ingredients, isVegetarian) {
    const {
        name: foodName,
        price: foodPrice,
        ingredients: foodIngredients
    } = createMenuItem(name, price, ingredients);
    
    return {
        name: foodName,
        price: foodPrice,
        ingredients: foodIngredients,
        type: 'food',
        isVegetarian
    };
}

const createDrinkItem = function (name, price, ingredients, isAlcoholic) {
    return
}

export { createFoodItem, createDrinkItem };
