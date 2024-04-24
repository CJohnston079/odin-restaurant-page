import {
	createWine,
	// createCocktail,
	// createSpirit,
	// createBottledDrink,
	// createSoftDrink,
	// createHotDrink,
} from "../src/modules/menu/createDrinks";

const testWine = createWine({
	name: "chardonay",
	bottlePrice: 19.95,
	allergens: { isVegan: true },
	country: "chile",
	description: "fruity, tropical fruits",
	wineType: "white",
});

export default testWine;
