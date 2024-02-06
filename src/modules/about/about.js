import createBanner from '../banner/banner';

import './about.css'

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

    section.appendChild(container);
}

const createP = function(section) {
    const container = document.createElement('div');
    container.classList.add('p-container');

    const h2 = document.createElement('h2');
    h2.textContent = 'Fabula nostra'
    container.appendChild(h2)

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

export default createAboutSection;
