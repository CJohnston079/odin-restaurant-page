import {
	createWine,
	// createCocktail,
	// createSpirit,
	// createBottledDrink,
	// createSoftDrink,
	// createHotDrink,
} from "../src/modules/menu/createDrinks";

const winesData = [
	{
		name: "Trebbiano",
		bottlePrice: 20.45,
		country: "Italy",
		description: "",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Chenin Blanc",
		bottlePrice: 22.95,
		country: "South Africa",
		description: " gravida.",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Picpoul De Pinet",
		bottlePrice: 26.75,
		country: "France",
		description: "",
		wineType: "white",
	},
	{
		name: "Pinot Grigio",
		bottlePrice: 26.5,
		country: "Italy",
		description: " ",
		wineType: "white",
	},
	{
		name: "Sauvignon Blanc",
		bottlePrice: 27.75,
		country: "Spain",
		description: "",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Chardonnay",
		bottlePrice: 24.45,
		country: "Chile",
		description: "",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Gavi",
		bottlePrice: 35.45,
		country: "Italy",
		description: "",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Albariño",
		bottlePrice: 27.25,
		country: "Spain",
		description: "",
		wineType: "white",
		allergens: { vegan: true },
	},
	{
		name: "Pouilly-Fumé",
		bottlePrice: 29.9,
		country: "France",
		description: "",
		wineType: "white",
	},
];

const testWine = createWine({ ...winesData[0] });

export default testWine;
