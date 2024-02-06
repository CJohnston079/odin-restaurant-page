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

const navButtons = document.querySelector('nav').children;

navButtons[0].addEventListener('mousedown', () => {
    contentContainer.removeChild(contentContainer.lastChild);
    removeChildElements(banner);
    createHeroSection(banner);
});
    
navButtons[1].addEventListener('mousedown', () => {
    banner.removeAttribute('id');
    removeChildElements(banner);

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    banner.appendChild(h1);
    
    contentContainer.appendChild(about);
})

contentContainer.appendChild(hero);
