import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    const form = document.createElement("form");

    const dateInput = createLabelledInput('date', 'Date');
    const timeInput = createLabelledInput('time', 'Time');
    const guestsInput = createLabelledInput('number', 'Number of guests');
    const nameInput = createLabelledInput('text', 'Full name');
    const emailInput = createLabelledInput('email', 'Email address');

    form.appendChild(dateInput.label);
    form.appendChild(timeInput.label);
    form.appendChild(guestsInput.label);
    form.appendChild(nameInput.label);
    form.appendChild(emailInput.label);

    // Submit button
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
