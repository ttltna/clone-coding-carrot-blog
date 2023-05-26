/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "75rem": "75rem",
      },
      lineHeight: {
        0: "0",
        full: "100%",
      },
      colors: {
        carrothead: "#00B493",
        carrot: "#FF7E36",
        menu: "#212124",
      },
      strokeWidth: {
        6: "6px",
      },
      fontSize: {
        1.625: "1.625rem",
      },
    },
  },
  plugins: [],
};
