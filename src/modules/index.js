import createBanner from "./banner/banner";
import createHeroSection from "./hero/hero";
import createAboutSection from "./about/about";

const contentContainer = document.querySelector('#content');
const hero = createHeroSection();
const banner = createBanner();
const about = createAboutSection();

const removeChildElements = function(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

const navButtons = document.querySelector('nav').children;

navButtons[0].addEventListener('mousedown', () => {
    removeChildElements(contentContainer)
    contentContainer.appendChild(hero);
});
    
navButtons[1].addEventListener('mousedown', () => {
    removeChildElements(contentContainer)
    contentContainer.appendChild(banner);
    contentContainer.appendChild(about);
})

contentContainer.appendChild(hero);
