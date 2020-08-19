import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import autoprefixer from "autoprefixer";
import assetPlugin from "./lib/assets-plugin";
import createHTMLPlugin from "./lib/create-html";

export default {
  input: "src/index.js",
  output: [
    {
      dir: "public",
      format: "es",
      plugins: [terser()],
    },
  ],
  preserveEntrySignatures: "strict",
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs(),
    assetPlugin(),
    postcss({
      minimize: true,
      namedExports: true,
      plugins: [autoprefixer],
    }),
    createHTMLPlugin(),
  ],
  watch: {
    exclude: ["node_modules/**"],
  },
};
