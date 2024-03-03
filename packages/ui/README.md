
So here it is, I have gotten really bored creating UI component from scratch for the many projects I work on.
It is high time I have a unified component library - so here it is.
I have built this to be highly opinionated on certain libraries I love to use like typescript, tailwind, date-fns, and react.

I believe in future this UI component library may extend to meta frameworks like [Remix](https://remix.run/) and even [Nuxt](https://nuxt.com/) (and naturally [Vue.js](https://vuejs.org/) as well).


# Description

The library is written using [React](https://react.dev/), [Tailwind](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/). The library is uncooked which means there is no build step involved which means you'd have to cater for building the components into your library.

# Consuming the library

1. Ensure you have react and typescript install and setup in your project.
Then install the library

```bash
pnpm add @mbao01/ui
```

or

```bash
npm install @mbao01/ui
```

2. Install tailwind - do so by following the [installation guide](https://tailwindcss.com/docs/installation)

3. Configure tailwind

```typescript
export default {
  content: [
    "node_modules/@mbao01/(common|ui)/src/**/*", // -> ensure to add this to allow tailwind to scan the library for classes
    ...
  ],
  "plugins": [
    ...require("@mbao01/common/plugin"), // -> import the tailwind library plugin
    ...
  ]
}
```