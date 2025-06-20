module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === "production" ? {} : false, // Minifies CSS in production for better performance
    "postcss-color-function": process.env.NODE_ENV !== "production" ? {} : false, // Enhances color processing in development
    "postcss-custom-properties": {}, // Handles CSS custom properties in older browsers
    "postcss-discard-comments": process.env.NODE_ENV === "production" ? {} : false, // Removes comments to optimize CSS size
    "postcss-extend-rule": {}, // Enables rule extension
    "postcss-flexbugs-fixes": {}, // Fixes known flexbox issues
    "postcss-import": {}, // Supports importing other CSS files
    "postcss-logical": {}, // Supports logical properties
    "postcss-nested": {}, // Enables nesting support in CSS
    "postcss-preset-env": {}, // Enables modern CSS features with fallbacks for older browsers
    "postcss-rtlcss": {}, // Supports RTL layout conversion
    "postcss-sort-media-queries": {}, // ✅ Optimizes media queries
    tailwindcss: {},
  },
};
