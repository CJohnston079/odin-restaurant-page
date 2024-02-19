import './menu.css'

const createMenuSection = function() {
    const section = document.createElement("section");
    section.id = "menu";

    return section;
}

const createMenuItem(name, price, ingredients) {
    return { name, price, ingredients };
}

export default createMenuSection;
