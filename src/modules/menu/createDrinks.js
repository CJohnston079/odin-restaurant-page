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

const createSoftDrink = function ({ name, price, size, allergens = {} }) {
	const newSoftDrink = createDrink({ name, price, allergens });

	return { ...newSoftDrink, drinkType: "soft drink", size };
};

export { createWine, createCocktail, createSoftDrink };
