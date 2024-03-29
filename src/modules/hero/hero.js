import "./hero.css";

function createHeroSection(parentElement) {
	parentElement.id = "hero";

	const h1 = document.createElement("h1");

	const span1 = document.createElement("span");
	span1.textContent = "Domum sentit";

	const span2 = document.createElement("span");
	span2.textContent = "Sapor ut paradisus";

	h1.appendChild(span1);
	h1.appendChild(span2);

	const p = document.createElement("p");
	p.textContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lobortis elementum nibh tellus molestie nunc non.";

	const button = document.createElement("button");
	button.textContent = "Book a table";

	parentElement.appendChild(h1);
	parentElement.appendChild(p);
	parentElement.appendChild(button);

	const children = parentElement.children;

	for (let i = 0; i < children.length; i += 1) {
		children[i].style.animationDelay = 400 * i + "ms";
	}

	return parentElement;
}

export default createHeroSection;
