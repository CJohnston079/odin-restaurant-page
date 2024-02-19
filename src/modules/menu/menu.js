import './menu.css'

const createMenuSection = function() {
    const section = document.createElement("section");
    section.id = "menu";

    return section;
}

const createMenuItem = function(name, price, ingredients) {
    return { name, price, ingredients };
}

const createFoodItem = function(name, price, ingredients, isVegetarian) {
    const foodItem = createMenuItem(name, price, ingredients)
    
    foodItem.isVegetarian = isVegetarian;
    foodItem.type = 'food';

    return foodItem;
}

export default createMenuSection;
