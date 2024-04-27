import "./menu.css";
import renderMenuItems from "./renderMenuItems.js";
import { wines } from "./createMenuItems.js";

const createMenuSection = function () {
	const section = document.createElement("section");
	section.id = "menu";

	const whiteWinesHeading = createMenuSubheading("White Wines");
	const whiteWines = renderMenuItems(wines);

	section.append(whiteWinesHeading);
	section.append(whiteWines);

	return section;
};

const createMenuSubheading = function (headingContent) {
	const subheading = document.createElement("h2");

	subheading.textContent = headingContent;

	return subheading;
};

export default createMenuSection;
