/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "blue-pulse": "pulse 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
