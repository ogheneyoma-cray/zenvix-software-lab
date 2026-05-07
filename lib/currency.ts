import { Product } from "./products";

export type Currency = "USD" | "NGN";

// Estimated exchange rate: 1 USD = 1500 NGN (you can update this as needed)
export const EXCHANGE_RATE = 1500;

/**
 * Formats the product price into either US Dollars ($) or Nigerian Naira (₦).
 * Accepts either a Product object or a direct number.
 */
export function getProductPrice(productOrPrice: Product | number, currency: Currency = "USD"): string {
  const price = typeof productOrPrice === "number" ? productOrPrice : productOrPrice.price;
  
  if (currency === "NGN") {
    return `₦${(price * EXCHANGE_RATE).toLocaleString()}`;
  }
  return `$${price.toLocaleString()}`;
}