export default function renderMenuItems(items) {
	const parent = document.createElement("div");

	parent.classList.add("menu-sections");

	items.forEach(item => {
		const container = document.createElement("div");

		const name = document.createElement("h3");
		const country = document.createElement("p");
		const description = document.createElement("p");
		const price = document.createElement("span");

		container.classList.add("menu-item");

		name.textContent = item.name;
		country.textContent = item.country;
		description.textContent = item.description;
		price.textContent = item.price["750ml"];

		container.append(name);
		container.append(country);
		container.append(description);
		container.append(price);

		parent.append(container);
	});

	return parent;
}
