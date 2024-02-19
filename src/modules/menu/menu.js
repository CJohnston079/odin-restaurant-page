import './menu.css';
import { createFoodItem } from './menuItems.js';

const createMenuSection = function() {
    const section = document.createElement("section");
    section.id = "menu";

    return section;
}

export default createMenuSection;
