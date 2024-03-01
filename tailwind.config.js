module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        darkBg: "#1F2937",
        darkText: "#F3F4F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem", // ✅ Added new spacing value
      },
      boxShadow: {
        custom: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      textColor: {
        light: "#374151", // Text color for light mode
        dark: "#E5E7EB", // Text color for dark mode
      },
      backgroundColor: {
        light: "#F9FAFB", // Background color for light mode
        dark: "#111827", // Background color for dark mode
      },
      screens: {
        xs: "475px", // ✅ Added extra-small breakpoint
        "2xl": "1440px", // ✅ Added extra-large breakpoint
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
};
 