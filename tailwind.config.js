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
        spacing: {
          72: "18rem",
          84: "21rem",
          96: "24rem",
        }, // Extended spacing scale
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Adds better form styling
      require("@tailwindcss/typography"), // Improves typography styles
      require("@tailwindcss/aspect-ratio"), // Adds aspect ratio utilities
      require("@tailwindcss/line-clamp"), // Enables text truncation
    ],
};
