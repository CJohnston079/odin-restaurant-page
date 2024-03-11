import { createFood } from "./menuItems";

const createStarter = function ({
	name,
	price,
	description,
	calories,
	allergens = {},
	isSpecial = false,
}) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "starter", description, calories, isSpecial };
};

const createSide = function ({
	name,
	price,
	description,
	calories,
	allergens = {},
	isSpecial = false,
}) {
	const newSide = createFood({ name, price, allergens });
	return { ...newSide, course: "side", description, calories, isSpecial };
};

const createMain = function ({
	name,
	price,
	description,
	calories,
	allergens = {},
	isSpecial = false,
}) {
	const newMain = createFood({ name, price, allergens });
	return { ...newMain, course: "main", description, calories, isSpecial };
};

const createDessert = function ({
	name,
	price,
	description,
	calories,
	allergens = {},
	isSpecial = false,
}) {
	const newDessert = createFood({ name, price, allergens });
	return { ...newDessert, course: "dessert", description, calories, isSpecial };
};

export { createStarter, createSide, createMain, createDessert };
