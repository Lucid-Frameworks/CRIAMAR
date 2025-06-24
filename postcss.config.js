module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {},
    tailwindcss: {},

    // Optimization & compatibility
    cssnano: process.env.NODE_ENV === "production" ? {} : false, // Minifies CSS
    "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false,
    "postcss-custom-properties": {},
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,
    "postcss-flexbugs-fixes": {},
    "postcss-logical": {},
    "postcss-preset-env": {},

    // Features & syntax sugar
    "postcss-extend-rule": {},
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-rtlcss": {},
    "postcss-sort-media-queries": {},
  },
};
