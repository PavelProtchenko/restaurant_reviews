export function getKeyName(...args: string[]) {
    return `restaurant_reviews:${args.join(":")}`;
}
