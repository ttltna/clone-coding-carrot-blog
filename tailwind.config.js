/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        mobile_S: "320px",
        mobile_M: "375px",
        mobile_L: "425px",
        Laptop_L: "1440px",
      },
      margin: {
        "88px": "88px",
        "100px": "100px",
      },
      padding: {
        56.25: "56.25%",
      },
      minWidth: {
        48: "48rem",
      },
      maxWidth: {
        75: "75rem",
      },
      height: {
        "68px": "68px",
        "234px": "234px",
      },
      lineHeight: {
        0: "0",
        2.4375: "2.4375rem",
        4.5625: "4.5625rem",
        full: "100%",
      },
      colors: {
        carrothead: "#00B493",
        carrot: "#FF7E36",
      },
      strokeWidth: {
        6: "6px",
      },
      fontSize: {
        1.6: "1.6rem",
        1.625: "1.625rem",
        2.625: "2.625rem",
        3.375: "3.375rem",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  corePlugins: {},
  plugins: [],
};
