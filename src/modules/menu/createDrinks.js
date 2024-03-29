import { createDrink } from "./menuItems";

const createWine = function ({
	name,
	bottlePrice,
	country,
	description,
	wineType,
	allergens = {},
}) {
	const newWine = createDrink({
		name,
		price: {
			"175ml": Math.ceil(bottlePrice * 0.3) - 0.05,
			"250ml": Math.ceil(bottlePrice * 0.4) - 0.05,
			"750ml": bottlePrice,
		},
		allergens,
	});

	return { ...newWine, drinkType: "wine", wineType, country, description };
};

const createCocktail = function ({ name, price, ingredients, isAlcoholic = true, allergens = {} }) {
	const newCocktail = createDrink({ name, price, allergens });

	return { ...newCocktail, drinkType: "cocktail", ingredients, isAlcoholic };
};

const createSpirit = function ({
	name,
	measurePrice,
	description,
	spiritType,
	mixer,
	allergens = {},
}) {
	const newSpirit = createDrink({
		name,
		price: {
			"25ml": measurePrice,
			"50ml": Math.ceil(measurePrice) * 1.5 + 0.95,
		},
		allergens,
	});

	return { ...newSpirit, drinkType: "spirit", spiritType, mixer, description };
};

const createBottledDrink = function ({ name, price, size, alcoholContent, allergens = {} }) {
	const newBottledDrink = createDrink({ name, price, allergens });

	return { ...newBottledDrink, drinkType: "bottled drink", size, alcoholContent };
};

const createSoftDrink = function ({ name, price, size, allergens = {} }) {
	const newSoftDrink = createDrink({ name, price, allergens });

	return { ...newSoftDrink, drinkType: "soft drink", size };
};

const createHotDrink = function ({ name, price, allergens = {} }) {
	const newHotDrink = createDrink({ name, price, allergens });
	return { ...newHotDrink, drinkType: "hot drink" };
};

export {
	createWine,
	createCocktail,
	createSpirit,
	createBottledDrink,
	createSoftDrink,
	createHotDrink,
};
