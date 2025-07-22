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
        error: "#DC2626", // Added error color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"], // Modified serif font
        mono: ["Fira Code", "monospace"], // Added
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem", // Added
        132: "33rem", // Added
        140: "35rem", // Added custom spacing
      },
      boxShadow: {
        custom: "0 10px 15px rgba(0, 0, 0, 0.1)",
        refined: "0 12px 20px rgba(0, 0, 0, 0.12)",
        light: "0 4px 6px rgba(0, 0, 0, 0.1)", // Added refined light shadow
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
        "4xl": "1920px", // Added
        xl2: "1600px", // Added custom screen size
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/custom-forms"), // Added custom forms plugin
  ],
};
