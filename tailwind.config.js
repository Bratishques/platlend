module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ['Lexend Deca', "sans-serif"],
      titles: ['Blinker', "sans-serif" ]
    },
    filter: {
      "tech-hover": "invert(53%) sepia(68%) saturate(2878%) hue-rotate(567deg) brightness(104%) contrast(97%) drop-shadow(0px 0px 17px rgba(0, 102, 255, 0.8))",
      'grayed': "grayscale(100%)"
    },
    minHeight: {
      40: "10rem",
      56: "6rem",
    },
    textShadow: {
      "blue-offset": "0.5rem 0.3rem 0 rgba(0, 102, 255, 0.7)",
      none: "none",
    },
    boxShadow: {
      "blue-glow": "0 0.2rem 0.5rem rgba(0, 102, 255, 0.35)",
    },
    extend: {
      animation: {
        "appear-tech": "appear 1s ease-in-out"
      },
      keyframes: {
        appear: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"}
        }
      },
      spacing: {
        "95%": "95%",
        "7.5r": "7.5rem",
        "6.6r": "6.6rem",
        "3.3r": "3.3rem",
        "95vh": "95vh",
        "22r": "22rem",
        "34r": "34rem",
        'min100px': "-100px",
        "100px" : "100px"
      },
      colors: {
        "primary-bg": "#111",
        "glowy-blue": "#0066FF",
        subtext: "#c7c7c7",
        "offer-cards-hover": "#151515",
        "testimonial-card": "rgba(0, 102, 255, 0.2)"
      },
      maxWidth: {
        96: "96rem",
        56: "56rem",
      },
      width: {
        "4/5": "80%",
        "51.9r": "51.9rem"
      },
    },
  },
  variants: {
    filter: ["hover", "responsive", "group-hover"],
    extend: {
      scale: ["active", "group-hover"],
      width: ["group-hover"],
      height: [`group-hover`],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "c-", // the prefix to use for text style classes
    }),
    require('tailwindcss-filters'),
  ],
};
