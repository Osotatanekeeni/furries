import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
          furriesGreen: "rgba(0, 109, 119, 1)",
          furriesOrange: "rgba(255, 111, 97, 1)"

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
