module.exports = {
  plugins: {
    // Core styling tools
    autoprefixer: {
      overrideBrowserslist: "> 1%, last 2 versions, Firefox ESR", // Added browser list configuration
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
      stage: 2, // Keeping stage as 2
      autoprefixer: { grid: true }, // Added grid support for autoprefixer
    },

    // Conditionally loaded based on environment
    "cssnano": process.env.NODE_ENV === "production" ? {
      preset: ["default", { discardComments: { removeAll: true } }],
    } : false,
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false,

    // Updated purgecss for better support
    "postcss-purgecss": process.env.NODE_ENV === "production" ? {
      content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      defaultExtractor: content => content.match(/[\w-/:]+(?=\s*{)/g) || [],
    } : false,
  },
};
