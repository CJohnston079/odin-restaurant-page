import createHeroSection from "./hero";

const contentContainer = document.querySelector('#content');
const hero = createHeroSection();

contentContainer.appendChild(hero);
