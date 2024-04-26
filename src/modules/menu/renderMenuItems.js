export default function renderMenuItems(items) {
	const parent = document.createElement("div");

	items.forEach(item => {
		const container = document.createElement("div");

		const name = document.createElement("h4");
		const country = document.createElement("p");
		const description = document.createElement("p");
		const price = document.createElement("span");

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
