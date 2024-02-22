import { createDrink } from "./menuItems";

const createWine = function({
    name,
    bottlePrice,
    country,
    description,
    wineType
}) {
    const newWine = createDrink({
        name,
        price: {
            '175ml': Math.ceil(bottlePrice * 0.3) - 0.05,
            '250ml': Math.ceil(bottlePrice * 0.4) - 0.05,
            '750ml': bottlePrice
        }
    });

    return { ...newWine, drinkType: 'wine', wineType, country, description }
}

export { createWine };