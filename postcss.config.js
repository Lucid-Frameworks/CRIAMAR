module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {},
    tailwindcss: {},

    // Features & syntax sugar
    "postcss-extend-rule": {},
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-rtlcss": {},
    "postcss-sort-media-queries": {},
    "postcss-logical": {},
    "postcss-custom-properties": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      stage: 1,
    },

    // Conditionally loaded based on environment
    "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false,
    "cssnano": process.env.NODE_ENV === "production" ? {} : false,
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,
  },
};
