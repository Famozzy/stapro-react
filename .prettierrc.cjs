/** @type {import('prettier').Options} */
const config = {
  printWidth: 120,
  semi: false,
  singleQuote: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
