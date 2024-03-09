import {
	createStarter,
	createSide,
	// createMain,
	// createDessert,
} from "../src/modules/menu/createFood";

describe("createStarter", () => {
	const testStarter = createStarter({
		name: "pesto pomodoro bread",
		price: 5.95,
		allergens: { isVegetarian: true },
		description: "brushed with garlic and parsley butter",
		course: "starter",
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
		course: "side",
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
describe("createMain", () => {});
describe("createDessert", () => {});
