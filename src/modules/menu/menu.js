import "./menu.css";
import renderMenuItems from "./renderMenuItems.js";
import { wines } from "./createMenuItems.js";

const whiteWineData = wines.filter(wine => wine.wineType === "white");
const redWineData = wines.filter(wine => wine.wineType === "red");
const roseWineData = wines.filter(wine => wine.wineType === "rosé");

const createMenuSection = function () {
	const section = document.createElement("section");
	section.id = "menu";

	const whiteWinesHeading = createMenuSubheading("White Wines");
	const whiteWines = renderMenuItems(whiteWineData);

	const redWinesHeading = createMenuSubheading("Red Wines");
	const redWines = renderMenuItems(redWineData);

	const roseWinesHeading = createMenuSubheading("Rosé Wines");
	const roseWines = renderMenuItems(roseWineData);

	section.append(whiteWinesHeading);
	section.append(whiteWines);

	section.append(redWinesHeading);
	section.append(redWines);

	section.append(roseWinesHeading);
	section.append(roseWines);

	return section;
};

const createMenuSubheading = function (headingContent) {
	const subheading = document.createElement("h2");

	subheading.textContent = headingContent;

	return subheading;
};

export default createMenuSection;
