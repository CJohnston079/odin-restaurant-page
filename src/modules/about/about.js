import './about.css'

function createAboutSection() {
    const section = document.createElement("section");
    section.id = "about";

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.textContent = 'Aliquam sem et tortor consequat id. Viverra adipiscing at in tellus integer. Aliquam vestibulum morbi blandit cursus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mauris ultrices eros in cursus turpis.';
    p2.textContent = 'Vel quam elementum pulvinar etiam non. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nulla facilisi etiam dignissim diam.';
    p3.textContent = 'Tellus in metus vulputate eu. Amet luctus venenatis lectus magna fringilla urna. Diam maecenas ultricies mi eget mauris. Porta lorem mollis aliquam ut porttitor. Elit sed vulputate mi sit amet. Ullamcorper malesuada proin libero nunc consequat.';

    section.appendChild(h1);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);

    return section;
}

export default createAboutSection;