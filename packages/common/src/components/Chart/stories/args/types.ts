/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import { type SVGProps } from "react";

type SVGKeys = Exclude<
  keyof SVGProps<SVGElement>,
  "type" | "fill" | "fillOpacity" | "stroke" | "strokeWidth" | "className"
>;
export type OmitSVGElement<T> = Omit<T, SVGKeys>;

export type Flatten<T> = NonNullable<
  {
    [K in keyof T]: T[K] extends never
      ? never
      : {
          [P in keyof T[K]]: T[K][P] extends never
            ? {
                [Q in `${Exclude<K, symbol>} ${Exclude<P, symbol>}`]: never;
              } // Stop here, don't flatten further
            : {
                [Q in `${Exclude<K, symbol>} ${Exclude<P, symbol>}`]: T[K][P];
              }; // Flatten key-value pair
        }[keyof T[K]]; // Flatten first level key-value pair
  }[keyof T]
>;
