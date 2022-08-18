module.exports = {
  "stories": [
    "../../**/stories/*.stories.@(js|jsx|ts|tsx)",
    "../../**/stories/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  }
}