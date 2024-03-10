import {
	createStarter,
	createSide,
	createMain,
	createDessert,
} from "../src/modules/menu/createFood";

describe("createStarter", () => {
	const testStarter = createStarter({
		name: "pesto pomodoro bread",
		price: 5.95,
		allergens: { isVegetarian: true },
		description: "brushed with garlic and parsley butter",
	});
	it("should return a starter course object with provided properties", () => {
		expect(testStarter.name).toBe("pesto pomodoro bread");
		expect(testStarter.price).toBe(5.95);
		expect(testStarter.allergens).toEqual({
			isGlutenFree: false,
			isVegetarian: true,
			isVegan: false,
		});
		expect(testStarter.description).toBe("brushed with garlic and parsley butter");
		expect(testStarter.course).toBe("starter");
		expect(testStarter.isSpecial).toBe(false);
	});
});
describe("createSide", () => {
	const testSide = createSide({
		name: "sautéed garlic vegetables",
		price: 4.95,
		allergens: { isGlutenFree: true, isVegan: true },
		description: "french beans, tenderstem broccoli & chantenay carrots",
	});
	it("should return a new side dish object with provided properties", () => {
		expect(testSide.name).toBe("sautéed garlic vegetables");
		expect(testSide.price).toBe(4.95);
		expect(testSide.allergens).toEqual({ isGlutenFree: true, isVegetarian: false, isVegan: true });
		expect(testSide.description).toBe("french beans, tenderstem broccoli & chantenay carrots");
		expect(testSide.course).toBe("side");
		expect(testSide.isSpecial).toBe(false);
	});
});
describe("createMain", () => {
	const testMain = createMain({
		name: "calabrese",
		price: 16.95,
		description: "dry-cured pork sausage, speck, Milano salami, cherry bell peppers",
		isSpecial: true,
	});
	it("should return a new main dish object with provided properties", () => {
		expect(testMain.name).toBe("calabrese");
		expect(testMain.price).toBe(16.95);
		expect(testMain.allergens).toEqual({
			isGlutenFree: false,
			isVegetarian: false,
			isVegan: false,
		});
		expect(testMain.description).toBe(
			"dry-cured pork sausage, speck, Milano salami, cherry bell peppers"
		);
		expect(testMain.course).toBe("main");
		expect(testMain.isSpecial).toBe(true);
	});
});
describe("createDessert", () => {
	const testDessert = createDessert({
		name: "tiramisu",
		price: 6.95,
		allergens: { isVegetarian: true },
		description: "coffee-flavoured Italian dessert",
	});
	it("should return a new dessert dish object with provided properties", () => {
		expect(testDessert.name).toBe("tiramisu");
		expect(testDessert.price).toBe(6.95);
		expect(testDessert.allergens).toEqual({
			isGlutenFree: false,
			isVegetarian: true,
			isVegan: false,
		});
		expect(testDessert.description).toBe("coffee-flavoured Italian dessert");
		expect(testDessert.course).toBe("dessert");
		expect(testDessert.isSpecial).toBe(false);
	});
});
