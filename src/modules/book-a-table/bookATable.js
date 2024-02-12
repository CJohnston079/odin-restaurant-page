import './book-a-table.css';

import getNextTwoWeeks from '../utils/getNextTwoWeeks';
import getTimes from '../utils/getTimes';
import getGuests from '../utils/getGuests';

const createBookDialog = function() {
    const section = document.createElement("dialog");
    section.id = "book-a-table";

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

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Confirm reservation';
    form.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.type = 'button';
    closeButton.textContent = '×'
    form.appendChild(closeButton);

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


export default createBookDialog;
