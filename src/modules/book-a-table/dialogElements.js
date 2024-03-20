const createDialog = function () {
	const dialog = document.createElement("dialog");

	dialog.id = "book-a-table";
	dialog.classList.add("dialog-closed");

	return dialog;
};

const closeDialog = function (dialog, timeout = 610) {
	dialog.classList.remove("dialog-open");

	setTimeout(() => {
		dialog.classList.add("dialog-closed");
	}, 10);

	setTimeout(() => {
		dialog.close();
	}, timeout);
};

export { createDialog, closeDialog };
