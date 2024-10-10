export type Flatten<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends never
    ? never
    : {
        [P in keyof T[K]]: T[K][P] extends never
          ? {
              [Q in `${Exclude<Prefix, symbol>}${Exclude<K, symbol>} ${Exclude<P, symbol>}`]: never;
            } // Stop here, don't flatten further
          : {
              [Q in `${Exclude<Prefix, symbol>}${Exclude<K, symbol>} ${Exclude<P, symbol>}`]: T[K][P];
            }; // Flatten key-value pair
      }[keyof T[K]]; // Flatten first level key-value pair
}[keyof T];
