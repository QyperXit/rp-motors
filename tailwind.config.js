/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatWithTranslate: {
          "0%, 100%": {
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y))",
          },
          "50%": {
            transform:
              "translate(calc(var(--tw-translate-x) + 0px), calc(var(--tw-translate-y) - 10px))",
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatWithTranslate: "floatWithTranslate 4s ease-in-out infinite",
      },
      colors: {
        primary: "#101828",
        secondary: "#667085",
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#dedede",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
