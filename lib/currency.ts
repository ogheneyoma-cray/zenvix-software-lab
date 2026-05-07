import { Product } from "./products";

export type Currency = "USD" | "NGN";

// Estimated exchange rate: 1 USD = 1500 NGN (you can update this as needed)
export const EXCHANGE_RATE = 1500;

/**
 * Formats a price into either US Dollars ($) or Nigerian Naira (₦).
 * Accepts either a Product object or a direct number.
 * Pass the live exchangeRate from CurrencyContext; falls back to the static EXCHANGE_RATE.
 */
export function getProductPrice(
  productOrPrice: Product | number,
  currency: Currency = "USD",
  exchangeRate: number = EXCHANGE_RATE,
): string {
  const price = typeof productOrPrice === "number" ? productOrPrice : productOrPrice.price;
  if (currency === "NGN") {
    return `₦${(price * exchangeRate).toLocaleString()}`;
  }
  return `$${price.toLocaleString()}`;
}