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
    const { name, price, ingredients } = createMenuItem(name, price, ingredients);

    return { name, price, ingredients, isVegetarian, type: 'food' };
}

export default createMenuSection;
