"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Currency } from "@/lib/currency";
import { EXCHANGE_RATE } from "@/lib/currency";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  exchangeRate: number;
  rateLoading: boolean;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [exchangeRate, setExchangeRate] = useState(EXCHANGE_RATE);
  const [rateLoading, setRateLoading] = useState(true);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates?.NGN) setExchangeRate(Math.round(data.rates.NGN));
      })
      .catch(() => {})
      .finally(() => setRateLoading(false));
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate, rateLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
