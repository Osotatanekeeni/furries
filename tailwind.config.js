import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
          furriesGreen: "rgba(0, 109, 119, 1)",
          furriesOrange: "rgba(255, 111, 97, 1)",
          darkPeach: "rgba(255, 183, 176, 1)",
          lightPeach: "rgba(255, 206, 201, 1)",
          teal: "rgba(77, 182, 177, 1)",
          lightBlue: "rgba(200, 233, 233, 1)"
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'super-wide': '0.4em',
        'ultra-wide': '0.6em',
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Playfair Display"],
      body: ["Urbanist", "Roboto", "Arial"]
    }
    },
  plugins: [flowbite.plugin()],
};
