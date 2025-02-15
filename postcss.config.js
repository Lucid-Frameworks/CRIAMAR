module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-nested": {}, 
      "postcss-import": {},
      "postcss-flexbugs-fixes": {}, // Fixes known flexbox issues
      "postcss-preset-env": {}, // Enables modern CSS features
      "cssnano": process.env.NODE_ENV === "production" ? {} : false // Minifies CSS in production
    },
};
