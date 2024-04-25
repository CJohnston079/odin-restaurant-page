import winesData from "../../../data/drinks/wines.json";
import { createWine } from "./menuItemFactories/createDrinks";

const wines = winesData.map(wine => createWine({ ...wine }));

export { wines };
