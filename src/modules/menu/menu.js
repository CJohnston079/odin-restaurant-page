import "./menu.css";
import wines from "../../../data/menuItems";

const renderMenuItems = function (items) {
	const parent = document.createElement("div");

	items.forEach(item => {
		const container = document.createElement("div");
		const name = document.createElement("h3");
		const price = document.createElement("p");

		name.textContent = item.name;
		price.textContent = item.price["750ml"];

		container.append(name);
		container.append(price);

		parent.append(container);
	});

	return parent;
};

const createMenuSection = function () {
	const section = document.createElement("section");
	section.id = "menu";

	const testMenuItem = renderMenuItems(wines);

	section.append(testMenuItem);

	return section;
};

export default createMenuSection;
