const createMenuItem = function ({ name, type, price, allergens = {} }) {
	const { isGlutenFree = false, isVegetarian = false, isVegan = false } = allergens;

	return {
		name,
		type,
		price,
		allergens: { isGlutenFree, isVegetarian, isVegan },
	};
};

const createFood = function ({ name, price, ingredients, allergens = {} }) {
	const newFood = createMenuItem({ name, type: "food", price, allergens });

	return { ...newFood, ingredients };
};

const createDrink = function ({ name, price, allergens = {} }) {
	return createMenuItem({ name, type: "drink", price, allergens });
};

export { createFood, createDrink };
