import './banner.css';

const createBanner = function() {
    const section = document.createElement("section");
    section.classList.add("banner");

    createH1(section);

    return section;
}

const createH1 = function(section) {
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    section.appendChild(h1);
}

export default createBanner;