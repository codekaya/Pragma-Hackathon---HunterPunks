/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      width: {
        dojo: "1100px",
      },
    },
    // width: {
    //   dojo: "1100px",
    // },
    maxWidth: {
      dojo: "1100px",
    },
    boxShadow: {
      button_1: "0px 0px 14px 4px rgba(0,67,152, 0.638822)",
      button_2: "0px 0px 14px 4px rgba(169,207,255, 0.638822)",
      border_1:
        "0px 0px 4px 1px rgba(97,255,252, 1) inset, 0px 0px 4px 1px rgba(40,211,255, 0.778382)",
      border_2: "0px 0px 3px rgba(0,231,255, 0.819083)",
    },
  },
  plugins: [],
};
