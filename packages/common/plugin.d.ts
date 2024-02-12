import { type Config } from "tailwindcss";

declare const plugin: { handler: () => void; config?: Config };
export = plugin;
