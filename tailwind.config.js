module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        success: "#10B981", // Added
        darkBg: "#1F2937",
        darkText: "#F3F4F6",
        light: "#F9FAFB",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"], // Added
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
      },
      boxShadow: {
        custom: "0 10px 15px rgba(0, 0, 0, 0.1)",
        refined: "0 12px 20px rgba(0, 0, 0, 0.12)",
      },
      textColor: {
        light: "#374151",
        dark: "#E5E7EB",
      },
      backgroundColor: {
        light: "#F9FAFB",
        dark: "#111827",
      },
      screens: {
        xs: "475px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-typography"),
    // Removed unnecessary plugin
  ],
};
