module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {}, // Enables nesting support in CSS
    "postcss-import": {}, // Supports importing other CSS files
    "postcss-flexbugs-fixes": {}, // Fixes known flexbox issues
    "postcss-preset-env": {}, // Enables modern CSS features with fallbacks for older browsers
    "cssnano": process.env.NODE_ENV === "production" ? {} : false, // Minifies CSS in production for better performance
    "postcss-custom-properties": {}, // Handles CSS custom properties in older browsers
    "postcss-logical": {}, // Supports logical properties
    "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false, // Enhances color processing in development
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false, // Removes comments to optimize CSS size
    "postcss-rtlcss": {}, // Supports RTL layout conversion
    "postcss-extend-rule": {}, // Enables rule extension
    "postcss-sort-media-queries": {}, // ✅ Optimizes media queries
  },
};
