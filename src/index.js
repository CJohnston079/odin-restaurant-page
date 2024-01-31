const contentContainer = document.querySelector('#content');

const section = document.createElement("section");
section.id = "hero";

const h1 = document.createElement("h1");

const span1 = document.createElement("span");
span1.textContent = "Domum sentit";

const span2 = document.createElement("span");
span2.textContent = "Sapor ut paradisus";

h1.appendChild(span1);
h1.appendChild(span2);

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lobortis elementum nibh tellus molestie nunc non.";

const button = document.createElement("button");
button.textContent = "Book a table";

section.appendChild(h1);
section.appendChild(p);
section.appendChild(button);

const children = section.children;

for (let i = 0; i < children.length; i += 1) {
    children[i].style.animationDelay = 200 * (i + 1) + "ms";
}

contentContainer.appendChild(section);
