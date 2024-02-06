import createBanner from "./banner/banner";
import createHeroSection from "./hero/hero";
import createAboutSection from "./about/about";

const contentContainer = document.querySelector('#content');
const banner = createBanner();
const hero = createHeroSection(banner);
const about = createAboutSection();

const removeChildElements = function(parentElement) {
    while (parentElement.firstChild) {
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
    about: document.querySelector('nav').children[1]
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

navButtons.about.addEventListener('mousedown', () => {
    if (activeSection === 'about') {
        return;
    }
    banner.removeAttribute('id');
    removeChildElements(banner);

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    banner.appendChild(h1);
    
    contentContainer.appendChild(about);
    setActiveSection('about');
})

contentContainer.appendChild(hero);
