module.exports = {
  darkMode: 'media', // Enables dark mode based on user's system preferences
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Added HTML support
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#F59E0B", // Added custom accent color
        darkBg: "#1F2937", // Custom background color for dark mode
        darkText: "#F3F4F6", // Custom text color for dark mode
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Added custom font
        serif: ["Merriweather", "serif"], // Added serif font option
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      }, // Extended spacing scale
      boxShadow: {
        custom: "0 10px 15px rgba(0, 0, 0, 0.1)", // Added custom shadow
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Adds better form styling
    require("@tailwindcss/typography"), // Improves typography styles
    require("@tailwindcss/aspect-ratio"), // Adds aspect ratio utilities
    require("@tailwindcss/line-clamp"), // Enables text truncation
    require("tailwindcss-animate"), // Replaced invalid animation plugin
  ],
};
