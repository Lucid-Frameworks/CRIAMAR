module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {},
    tailwindcss: {},

    // Optimization & compatibility
    cssnano: process.env.NODE_ENV === "production" ? {} : false,
    "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false,
    "postcss-custom-properties": {},
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,
    "postcss-flexbugs-fixes": {},
    "postcss-logical": {},
    "postcss-preset-env": {
      stage: 1, // Use stage 1 features for broader compatibility
    },

    // Features & syntax sugar
    "postcss-extend-rule": {},
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-rtlcss": {},
    "postcss-sort-media-queries": {},
  },
};
