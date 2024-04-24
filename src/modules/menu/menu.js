import "./menu.css";
import wines from "../../../data/menuItems";

const renderMenuItem = function (item) {
	const container = document.createElement("div");
	const name = document.createElement("h3");
	const price = document.createElement("p");

	name.textContent = item.name;
	price.textContent = item.price["750ml"];

	container.append(name);
	container.append(price);

	return container;
};

const createMenuSection = function () {
	const section = document.createElement("section");
	section.id = "menu";

	const testMenuItem = renderMenuItem(wines[1]);

	section.append(testMenuItem);

	return section;
};

export default createMenuSection;
