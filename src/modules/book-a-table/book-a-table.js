import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    const form = document.createElement("form");
    
    // Name input
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    form.appendChild(nameInput);

    // Date input
    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.placeholder = "Date";
    form.appendChild(dateInput);

    // Time input
    const timeInput = document.createElement('input');
    timeInput.type = "time";
    timeInput.placeholder = "Time";
    form.appendChild(timeInput);

    // Number of guests input
    const guestsInput = document.createElement('input');
    guestsInput.type = "number";
    guestsInput.placeholder = "Number of Guests";
    form.appendChild(guestsInput);

    // Email input
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.placeholder = "Email Address";
    form.appendChild(emailInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    section.appendChild(form);

    return section;
}



export default createBookSection;
