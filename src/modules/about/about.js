import './about.css'

const createBanner = function() {
    const section = document.createElement("section");
    section.id = "banner";

    createH1(section);

    return section;
}

const createH1 = function(section) {
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    section.appendChild(h1);
}

const createAboutSection = function() {
    const section = document.createElement("section");
    section.id = "about";

    createImg(section);
    createP(section);

    return section;
}

const createImg = function(section) {
    const container = document.createElement('div');
    container.classList.add('img-container');
    // const img = document.createElement('img');
    // img.src = '../assets/images/restaurant-birds-eye.jpg';

    // container.append(img)
    section.appendChild(container);
}

const createP = function(section) {
    const container = document.createElement('div');
    container.classList.add('p-container');

    const paragraphContents = [
        'Aliquam sem et tortor consequat id. Viverra adipiscing at in tellus integer. Aliquam vestibulum morbi blandit cursus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mauris ultrices eros in cursus turpis.',
        'Vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nulla facilisi etiam dignissim diam.',
        'Tellus in metus vulputate eu. Amet luctus venenatis lectus magna fringilla urna. Diam maecenas ultricies mi eget mauris. Porta lorem mollis aliquam ut porttitor. Elit sed vulputate mi sit amet. Ullamcorper malesuada proin libero nunc consequat.'
    ];
      
    for (const content of paragraphContents) {
        const p = document.createElement('p');
        p.textContent = content;
        container.appendChild(p);
    }

    section.appendChild(container);
}

export { createBanner, createAboutSection };
