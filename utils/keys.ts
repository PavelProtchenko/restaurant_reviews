export function getKeyName(...args: string[]) {
    return `restaurant_reviews:${args.join(":")}`;
}

export const restaurantKeyById = (id: string) => getKeyName("restaurants", id);
