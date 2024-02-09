import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    // Date input
    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.placeholder = "Date";
    section.appendChild(dateInput);

    // Time input
    const timeInput = document.createElement('input');
    timeInput.type = "time";
    timeInput.placeholder = "Time";
    section.appendChild(timeInput);

    // Number of guests input
    const guestsInput = document.createElement('input');
    guestsInput.type = "number";
    guestsInput.placeholder = "Number of Guests";
    section.appendChild(guestsInput);

    // Name input
    const nameInput = document.createElement('input');
    nameInput.placeholder = "Name";
    section.appendChild(nameInput);

    // Email input
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.placeholder = "Email Address";
    section.appendChild(emailInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    section.appendChild(submitButton);

    return section;
}


export default createBookSection;
