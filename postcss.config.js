module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {
      overrideBrowserslist: "> 1%, last 2 versions, Firefox ESR", // Keeping browser support
    },
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
      stage: 2, // Keeping stage 2
      autoprefixer: { grid: true }, // Enabling grid support
    },

    // Conditionally loaded based on environment
    "cssnano": process.env.NODE_ENV === "production" ? {
      preset: ["default", { discardComments: { removeAll: true } }],
    } : false,
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,

    // Removed postcss-purgecss due to Tailwind's built-in purge functionality
  },
};
