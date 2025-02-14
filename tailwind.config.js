module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Added HTML support
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
          accent: "#F59E0B", // Added custom accent color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Added custom font
          serif: ["Merriweather", "serif"], // Added serif font option
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Adds better form styling
      require("@tailwindcss/typography"), // Improves typography styles
      require("@tailwindcss/aspect-ratio"), // Adds aspect ratio utilities
    ],
};
