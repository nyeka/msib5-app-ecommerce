export function formatToUSD(nilai: number) {
  return nilai.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
