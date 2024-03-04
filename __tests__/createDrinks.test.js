import {
	createWine,
	createCocktail,
	createSpirit,
	createBottledDrink,
	createSoftDrink,
	createHotDrink,
} from "../src/modules/menu/createDrinks";

describe("createWine", () => {
	const testWine = createWine({
		name: "chardonay",
		bottlePrice: 19.95,
		allergens: { isVegan: true },
		country: "chile",
		description: "fruity, tropical fruits",
		wineType: "white",
	});
	it("should return a new wine object with provided properties", () => {
		expect(testWine.name).toBe("chardonay");
		expect(testWine.price).toEqual({ "175ml": 5.95, "250ml": 7.95, "750ml": 19.95 });
		expect(testWine.allergens).toEqual({ isGlutenFree: false, isVegetarian: false, isVegan: true });
		expect(testWine.country).toBe("chile");
		expect(testWine.description).toBe("fruity, tropical fruits");
		expect(testWine.drinkType).toBe("wine");
		expect(testWine.wineType).toBe("white");
	});
});
describe("createCocktail", () => {
	const testWine = createCocktail({
		name: "virgin mojito",
		price: 7.95,
		allergens: { isGlutenFree: true, isVegan: true },
		ingredients: ["mint leaves", "sugar", "soda water", "lime"],
		isAlcoholic: false,
	});
	it("should return a new cocktail object with provided properties", () => {
		expect(testWine.name).toBe("virgin mojito");
		expect(testWine.price).toBe(7.95);
		expect(testWine.allergens).toEqual({ isGlutenFree: true, isVegetarian: false, isVegan: true });
		expect(testWine.ingredients).toEqual(["mint leaves", "sugar", "soda water", "lime"]);
		expect(testWine.drinkType).toBe("cocktail");
	});
});
describe("createSpirit", () => {
	const testSpirit = createSpirit({
		name: "pink gin",
		measurePrice: 7.95,
		allergens: { isGlutenFree: true, isVegan: true },
		mixer: "tonic",
		description: "small batch gin from the isle of wight",
		spiritType: "gin",
	});
	it("should return a new spirit object with provided properties", () => {
		expect(testSpirit.name).toBe("pink gin");
		expect(testSpirit.price).toEqual({ "25ml": 7.95, "50ml": 12.95 });
		expect(testSpirit.allergens).toEqual({
			isGlutenFree: true,
			isVegetarian: false,
			isVegan: true,
		});
		expect(testSpirit.mixer).toBe("tonic");
		expect(testSpirit.description).toBe("small batch gin from the isle of wight");
		expect(testSpirit.drinkType).toBe("spirit");
		expect(testSpirit.spiritType).toBe("gin");
	});
});
describe("createBottledDrink", () => {
	const testBottledDrink = createBottledDrink({
		name: "peroni",
		price: 4.95,
		allergens: { isVegan: true },
		size: "330ml",
		alcoholContent: 0.05,
	});
	expect(testBottledDrink.name).toBe("peroni");
	expect(testBottledDrink.price).toBe(4.95);
	expect(testBottledDrink.allergens).toEqual({
		isGlutenFree: false,
		isVegetarian: false,
		isVegan: true,
	});
	expect(testBottledDrink.size).toBe("330ml");
	expect(testBottledDrink.drinkType).toBe("bottled drink");
	expect(testBottledDrink.alcoholContent).toBe(0.05);
});
describe("createSoftDrink", () => {
	const testSoftDrink = createSoftDrink({
		name: "sparkling water",
		price: 2.95,
		allergens: { isGlutenFree: true, isVegan: true },
		size: "275ml",
	});
	it("should return a new soft drink with the provided properties", () => {
		expect(testSoftDrink.name).toBe("sparkling water");
		expect(testSoftDrink.price).toBe(2.95);
		expect(testSoftDrink.allergens).toEqual({
			isGlutenFree: true,
			isVegetarian: false,
			isVegan: true,
		});
		expect(testSoftDrink.size).toBe("275ml");
		expect(testSoftDrink.drinkType).toBe("soft drink");
	});
});
describe("createHotDrink", () => {
	const testHotDrink = createHotDrink({
		name: "tea",
		price: 2.95,
		allergens: { isGlutenFree: true, isVegan: true },
	});
	expect(testHotDrink.name).toBe("tea");
	expect(testHotDrink.price).toBe(2.95);
	expect(testHotDrink.allergens).toEqual({
		isGlutenFree: true,
		isVegetarian: false,
		isVegan: true,
	});
	expect(testHotDrink.drinkType).toBe("hot drink");
});
