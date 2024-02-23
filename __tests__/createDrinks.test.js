import { createWine } from "../src/modules/menu/createDrinks";

describe("createWine", () => {
	const testWine = createWine({
		name: "chardonay",
		bottlePrice: 19.95,
		allergens: { isVegan: true },
		country: "chile",
		description: "fruity, tropical fruits",
		wineType: "white",
	});
	console.log(testWine);
	it("should return an object with provided properties", () => {
		expect(testWine.name).toBe("chardonay");
		expect(testWine.price).toEqual({ "175ml": 5.95, "250ml": 7.95, "750ml": 19.95 });
		expect(testWine.allergens).toEqual({ isGlutenFree: false, isVegetarian: false, isVegan: true });
		expect(testWine.country).toBe("chile");
		expect(testWine.description).toBe("fruity, tropical fruits");
		expect(testWine.drinkType).toBe("wine");
		expect(testWine.wineType).toBe("white");
	});
});
