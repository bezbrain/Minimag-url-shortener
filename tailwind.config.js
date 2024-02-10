/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        surfaceDuo: "540px",
        iPhone: "420px",
        smallPhone: "330px",
      },
    },
  },
  plugins: [],
};
