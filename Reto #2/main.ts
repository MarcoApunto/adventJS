/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>
): string[] {
  const validGifts = giftsToProduce.filter(
    (e: { toy: string; quantity: number }) =>
      Number.isFinite(e.quantity) && e.quantity > 0
  );

  const expanded = validGifts.map((e: { toy: string; quantity: number }) =>
    new Array(e.quantity).fill(e.toy)
  );

  return expanded.flat();
}
