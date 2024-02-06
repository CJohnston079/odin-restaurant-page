import './banner.css';

const createBanner = function() {
    const section = document.createElement("section");
    section.classList.add("banner");

    return section;
}

export default createBanner;