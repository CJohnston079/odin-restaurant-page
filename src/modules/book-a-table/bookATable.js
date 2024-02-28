import "./book-a-table.css";

import { createDialog, closeDialog } from "./dialogElements";
import { createForm, createButton } from "./formElements";

const createBookDialog = function () {
	const dialog = createDialog();
	const form = createForm();
	const closeButton = createButton("×");

	closeButton.classList.add("close");
	closeButton.addEventListener("mousedown", () => closeDialog(dialog));

	dialog.appendChild(closeButton);
	dialog.appendChild(form);

	return dialog;
};

export default createBookDialog;
