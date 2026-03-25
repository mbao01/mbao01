import { useMemo } from "react";
import { cn } from "../../utilities";
import type { AmountProps } from "./types";

const Amount = ({
  value,
  className,
  currency,
  locale = "en-US",
  notation = "standard",
  minimumFractionDigits,
  maximumFractionDigits,
  signDisplay = "auto",
  colored = false,
  ...props
}: AmountProps) => {
  const formatted = useMemo(() => {
    const options: Intl.NumberFormatOptions = {
      notation,
      signDisplay,
      minimumFractionDigits,
      maximumFractionDigits,
    };

    if (currency) {
      options.style = "currency";
      options.currency = currency;
    }

    return new Intl.NumberFormat(locale, options).format(value);
  }, [value, currency, locale, notation, minimumFractionDigits, maximumFractionDigits, signDisplay]);

  return (
    <span
      className={cn(
        "tabular-nums",
        colored && value > 0 && "text-success",
        colored && value < 0 && "text-error",
        className
      )}
      {...props}
    >
      {formatted}
    </span>
  );
};

Amount.displayName = "Amount";

export { Amount };
