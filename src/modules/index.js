import createHeroSection from "./hero/hero";
import { createBanner, createAboutSection } from "./about/about";

const contentContainer = document.querySelector('#content');
const hero = createHeroSection();
const banner = createBanner();
const about = createAboutSection();

// contentContainer.appendChild(hero);
contentContainer.appendChild(banner);
contentContainer.appendChild(about);
