import createHeroSection from "./hero/hero";
import createAboutSection from "./about/about";

const contentContainer = document.querySelector('#content');
const hero = createHeroSection();
const about = createAboutSection();

contentContainer.appendChild(about);
