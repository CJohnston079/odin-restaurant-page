import {
	// createStarter,
	createSide,
	// createMain,
	// createDessert,
} from "../src/modules/menu/createFood";

describe("createStarter", () => {});
describe("createSide", () => {
	const testSide = createSide({
		name: "sautéed garlic vegetables",
		price: 4.95,
		allergens: { isGlutenFree: true, isVegan: true },
		description: "french beans, tenderstem broccoli & chantenay carrots",
		course: "side",
	});
	it("should return a new wine object with provided properties", () => {
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
