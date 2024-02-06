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

const toggleActiveNav = function(navButton) {
    navButton.classList.toggle('active')
}

const navButtons = {
    hero: document.querySelector('nav').children[0],
    about: document.querySelector('nav').children[1]
}

navButtons.hero.addEventListener('mousedown', () => {
    contentContainer.removeChild(contentContainer.lastChild);
    removeChildElements(banner);
    createHeroSection(banner);
});
    
navButtons.about.addEventListener('mousedown', () => {
    banner.removeAttribute('id');
    removeChildElements(banner);

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    banner.appendChild(h1);
    
    contentContainer.appendChild(about);
})

contentContainer.appendChild(hero);
