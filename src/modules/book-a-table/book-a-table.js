import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    const form = document.createElement("form");

    const inputs = {
        dateInput: createLabelledInput('date', 'Date'),
        timeInput: createLabelledInput('time', 'Time'),
        guestsInput: createLabelledInput('number', 'Number of guests'),
        nameInput: createLabelledInput('text', 'Full name'),
        emailInput: createLabelledInput('email', 'Email address')
    }

    for (const input in inputs) {
        form.appendChild(inputs[input].label);
    }

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    section.appendChild(form);

    return section;
};

const createLabelledInput = function(type, labelText) {
    const label = document.createElement('label');
    label.textContent = `${labelText}:`

    const input = document.createElement('input');
    input.type = type;

    label.appendChild(input);

    return { label, input };
};

export default createBookSection;
