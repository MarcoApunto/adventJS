/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {

    return giftsToProduce
        .filter((element) => typeof element.quantity === 'number' && element.quantity > 0)
        .map((element) => new Array(element.quantity).fill(element.toy))
        .flat()
}
