import { createWine, createCocktail, createSoftDrink } from "../src/modules/menu/createDrinks";

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
