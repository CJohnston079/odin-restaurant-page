import createBanner from "./banner/banner";
import createHeroSection from "./hero/hero";
import createAboutSection from "./about/about";
import createMenuSection from "./menu/menu";
import createBookSection from "./book-a-table/bookATable";

const contentContainer = document.querySelector('#content');
const banner = createBanner();

const sections = {
    hero: createHeroSection(banner),
    about: createAboutSection(),
    menu: createMenuSection(),
    book: createBookSection()
}

const removeChildElements = function(parentElement) {
    while (parentElement.firstChild && !parentElement.lastChild.classList.contains('banner')) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

let activeSection = 'hero';

const setActiveSection = function(section) {
    activeSection = section;
    for (const key in navButtons) {
        const navButton = navButtons[key];
        if (key === activeSection) {
            navButton.classList.add('active');
        } else {
            navButton.classList.remove('active');
        }
    }
}

const navButtons = {
    hero: document.querySelector('nav').children[0],
    about: document.querySelector('nav').children[1],
    menu: document.querySelector('nav').children[2],
    book: document.querySelector('nav').children[3]
}

navButtons.hero.addEventListener('mousedown', () => {
    if (activeSection === 'hero') {
        return;
    }
    contentContainer.removeChild(contentContainer.lastChild);
    removeChildElements(banner);
    createHeroSection(banner);
    setActiveSection('hero');
});

function appendSection(sectionName, headingText) {
    if (activeSection === sectionName) {
        return;
    }
    banner.removeAttribute('id');
    removeChildElements(banner);
    removeChildElements(contentContainer);

    const h1 = document.createElement("h1");
    h1.textContent = headingText;
    banner.appendChild(h1);
    
    contentContainer.appendChild(sections[sectionName]);
    setActiveSection(sectionName);
}

navButtons.about.addEventListener('mousedown', () => appendSection('about', 'About Us'));
navButtons.menu.addEventListener('mousedown', () => appendSection('menu', 'Menu'));
navButtons.book.addEventListener('mousedown', () => appendSection('book', 'Book a table'));

contentContainer.appendChild(sections.hero);
