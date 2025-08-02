module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#fbbf24",
        accent: "#6b7280",
        dark: "#000000",
        "dark-gray": "#1a1a1a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "subtle-gradient": "subtleGradient 12s ease infinite",
        "subtle-float": "subtleFloat 8s ease-in-out infinite",
      },
      keyframes: {
        subtleGradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
