/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#ead112",
          secondary: "#f287f2",
          accent: "#5949b7",
          neutral: "#302833",
          "base-100": "#F9F5FA",
          info: "#78C6E8",
          success: "#5DDFC3",
          warning: "#D27C14",
          error: "#F04628"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
