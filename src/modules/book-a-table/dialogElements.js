const createDialog = function () {
	const dialog = document.createElement("dialog");

	dialog.id = "book-a-table";
	dialog.classList.add("dialog-closed");

	return dialog;
};

const closeDialog = function (dialog) {
	dialog.classList.remove("dialog-open");

	setTimeout(() => {
		dialog.classList.add("dialog-closed");
	}, 10);

	setTimeout(() => {
		dialog.close();
	}, 610);
};

export { createDialog, closeDialog };
