import './about.css'

function createAboutSection() {
    const section = document.createElement("section");
    section.id = "about";

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    section.appendChild(h1);

    const paragraphContents = [
        'Aliquam sem et tortor consequat id. Viverra adipiscing at in tellus integer. Aliquam vestibulum morbi blandit cursus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mauris ultrices eros in cursus turpis.',
        'Vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nulla facilisi etiam dignissim diam.',
        'Tellus in metus vulputate eu. Amet luctus venenatis lectus magna fringilla urna. Diam maecenas ultricies mi eget mauris. Porta lorem mollis aliquam ut porttitor. Elit sed vulputate mi sit amet. Ullamcorper malesuada proin libero nunc consequat.'
    ];
      
    for (const content of paragraphContents) {
        const p = document.createElement('p');
        p.textContent = content;
        section.appendChild(p);
    }

    return section;
}

export default createAboutSection;