module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {}, // Enables nesting support in CSS
    "postcss-import": {}, // Supports importing other CSS files
    "postcss-flexbugs-fixes": {}, // Fixes known flexbox issues
    "postcss-preset-env": {}, // Enables modern CSS features with fallbacks for older browsers
    "cssnano": process.env.NODE_ENV === "production" ? {} : false, // Minifies CSS in production for better performance
    "postcss-custom-properties": {} // Added to handle CSS custom properties in older browsers
  },
};
