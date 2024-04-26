import winesData from "../../../data/drinks/wines.json";
import { createWine } from "./menuItemFactories/createDrinks";

const wines = winesData.map(wineData => {
	const wine = createWine({ ...wineData });

	return wine;
});

export { wines };
