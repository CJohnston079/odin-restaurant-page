import "./menu.css";
import renderMenuItems from "./renderMenuItems.js";
import { wines } from "./createMenuItems.js";

const createMenuSection = function () {
	const section = document.createElement("section");
	section.id = "menu";

	const whiteWines = renderMenuItems(wines);

	section.append(whiteWines);

	return section;
};

export default createMenuSection;
