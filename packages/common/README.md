
Shared react meta-framework agnostic components used by [@mbao01/ui](https://www.npmjs.com/package/@mbao01/ui) and [@mbao01/next](https://www.npmjs.com/package/@mbao01/next)


```bash
pnpm add @mbao01/common
```

or

```bash
npm install @mbao01/common
```

2. Install tailwind - do so by following the [installation guide](https://tailwindcss.com/docs/installation)

3. Configure tailwind

```typescript
export default {
  content: [
    "node_modules/@mbao01/common/src/**/*", // -> ensure to add this to allow tailwind to scan the library for classes
    ...
  ],
  "plugins": [
    require("@mbao01/common/plugin"), // -> import the library plugin
    ...
  ]
}
```
