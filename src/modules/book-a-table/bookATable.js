import './book-a-table.css';

import getNextTwoWeeks from '../utils/getNextTwoWeeks';
import getTimes from '../utils/getTimes';
import getGuests from '../utils/getGuests';

const createBookDialog = function() {
    const dialog = document.createElement("dialog");
    dialog.id = "book-a-table";

    const form = document.createElement("form");

    const inputs = {
        dateInput: createLabelledDropdown('date', 'Date', getNextTwoWeeks()),
        timeInput: createLabelledDropdown('time', 'Time', getTimes()),
        guestsInput: createLabelledDropdown('number', 'Number of guests', getGuests(8)),
        nameInput: createLabelledInput('text', 'Full name'),
        emailInput: createLabelledInput('email', 'Email address')
    }

    for (const input in inputs) {
        form.appendChild(inputs[input].label);
    }

    const submitButton = createButton('Confirm reservation', 'submit',);
    form.appendChild(submitButton);

    const closeButton = createButton('×');
    closeButton.classList.add('close');
    dialog.appendChild(closeButton);
    closeButton.addEventListener('mousedown', () => dialog.close());

    dialog.appendChild(form);

    return dialog;
};

const createButton = function(buttonText, type='button') {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = buttonText;

    return button
}

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


export default createBookDialog;
