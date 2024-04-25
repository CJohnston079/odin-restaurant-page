export default function renderMenuItems(items) {
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
}
