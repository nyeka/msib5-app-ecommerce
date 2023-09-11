export function calculateOriginalPrice(
  discountedPrice: number,
  discountPercentage: number
): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Discount percentage must be between 0 and 100.");
  }

  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return originalPrice;
}
