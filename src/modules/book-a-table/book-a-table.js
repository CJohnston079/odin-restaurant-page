import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    const form = document.createElement("form");

    const inputs = {
        dateInput: createLabelledDropdown('date', 'Date', ['Saturday', 'Sunday']),
        timeInput: createLabelledDropdown('time', 'Time', ['12:00', '17:00']),
        guestsInput: createLabelledDropdown('number', 'Number of guests', [1, 2, 3, 4, 5, 6]),
        nameInput: createLabelledInput('text', 'Full name'),
        emailInput: createLabelledInput('email', 'Email address')
    }

    for (const input in inputs) {
        form.appendChild(inputs[input].label);
    }

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Confirm reservation";
    form.appendChild(submitButton);

    section.appendChild(form);

    return section;
};

const createLabelledInput = function(type, labelText) {
    const label = document.createElement('label');
    label.textContent = `${labelText}:`;

    const input = document.createElement('input');
    input.type = type;

    label.appendChild(input);

    return { label, input };
};

const createLabelledDropdown = function(name, labelText, options) {
    const label = document.createElement('label');
    label.textContent = `${labelText}:`;

    const select = document.createElement('select');
    select.name = name;

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    label.appendChild(select);

    return { label, select };
};


export default createBookSection;
