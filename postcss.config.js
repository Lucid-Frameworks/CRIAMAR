module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {},
    tailwindcss: {},

    // Features & syntax sugar
    "postcss-extend-rule": {},
    "postcss-import": {}, // Added postcss-import
    "postcss-nested": {},
    "postcss-rtlcss": {},
    "postcss-sort-media-queries": {},
    "postcss-logical": {},
    "postcss-custom-properties": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      stage: 2, // Changed stage to 2 for more features
    },

    // Conditionally loaded based on environment
    // "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false,
    "cssnano": process.env.NODE_ENV === "production" ? {} : false,
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,

    // New plugin for purging unused CSS
    "postcss-purgecss": process.env.NODE_ENV === "production" ? {
      content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      defaultExtractor: content => content.match(/[\w-/:]+(?=\s*{)/g) || [],
    } : false, // Only in production
  },
};
