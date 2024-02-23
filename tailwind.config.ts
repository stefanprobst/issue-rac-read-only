import type { Config } from "tailwindcss";
import racPlugin from "tailwindcss-react-aria-components";

const config: Config = {
  content: [
    "./components/**/*.@(css|ts|tsx)",
    "./app/**/*.@(css|ts|tsx)",
  ],
  plugins: [racPlugin],
};
export default config;
