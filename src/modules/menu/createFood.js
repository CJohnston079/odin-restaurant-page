import { createFood } from "./menuItems";

const createStarter = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "starter", description, isSpecial };
};

const createSide = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "side", description, isSpecial };
};

const createMain = function () {
	return;
};

const createDessert = function () {
	return;
};

export { createStarter, createSide, createMain, createDessert };
