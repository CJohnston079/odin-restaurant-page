import { createFood } from "./menuItems";

const createStarter = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "starter", description, isSpecial };
};

const createSide = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "side", description, isSpecial };
};

const createMain = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newMain = createFood({ name, price, allergens });
	return { ...newMain, course: "main", description, isSpecial };
};

const createDessert = function ({ name, price, description, allergens = {}, isSpecial = false }) {
	const newDessert = createFood({ name, price, allergens });
	return { ...newDessert, course: "dessert", description, isSpecial };
};

export { createStarter, createSide, createMain, createDessert };
