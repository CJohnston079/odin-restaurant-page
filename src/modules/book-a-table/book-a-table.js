import './book-a-table.css'

const createBookSection = function() {
    const section = document.createElement("section");
    section.id = "book-a-table";

    const form = document.createElement("form");

    // Date input
    const dateLabel = document.createElement('label');
    dateLabel.textContent = "Date: ";
    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateLabel.appendChild(dateInput);
    form.appendChild(dateLabel);

    // Time input
    const timeLabel = document.createElement('label');
    timeLabel.textContent = "Time: ";
    const timeInput = document.createElement('input');
    timeInput.type = "time";
    timeLabel.appendChild(timeInput);
    form.appendChild(timeLabel);

    // Number of guests input
    const guestsLabel = document.createElement('label');
    guestsLabel.textContent = "Number of Guests: ";
    const guestsInput = document.createElement('input');
    guestsInput.type = "number";
    guestsLabel.appendChild(guestsInput);
    form.appendChild(guestsLabel);

    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    // Email input
    const emailLabel = document.createElement('label');
    emailLabel.textContent = "Email Address: ";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    section.appendChild(form);

    return section;
}




export default createBookSection;
