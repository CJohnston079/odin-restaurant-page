import createBanner from "./banner/banner";
import createHeroSection from "./hero/hero";
import createAboutSection from "./about/about";

const contentContainer = document.querySelector('#content');
const hero = createHeroSection();
const banner = createBanner();
const about = createAboutSection();

const clearContent = function() {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
}

const navButtons = document.querySelector('nav').children;

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mousedown', clearContent);
}

navButtons[0].addEventListener('mousedown', () => {
    contentContainer.appendChild(hero);
});
    
navButtons[1].addEventListener('mousedown', () => {
    contentContainer.appendChild(banner);
    contentContainer.appendChild(about);
})

contentContainer.appendChild(hero);
