module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Lexend Deca", "sans-serif"],
      titles: ["Blinker", "sans-serif"],
    },
    filter: {
      "tech-hover":
        "invert(53%) sepia(68%) saturate(2878%) hue-rotate(567deg) brightness(104%) contrast(97%) drop-shadow(0px 0px 17px rgba(0, 102, 255, 0.8))",
      grayed: "grayscale(100%)",
      "blur-15": "blur(15px)",
      none: "none",
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
      "photo-shadow": "0 0 1rem #0066FF",
    },
    extend: {
      animation: {
        "appear-tech": "appear 1s ease-in-out",
        "subscribe-button": "stretch 0.7s ease-in-out",
        "circle-grow": "grow 3s ease-in-out",
        "horizontal-grow": "width-grow 3s ease-in-out",
        "vertical-grow": "height-grow 3s ease-in-out",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        stretch: {
          "0%": { width: "100%" },
          "50%": { width: "10%" },
          "100%": { width: "100%" },
        },
        grow: {
          "0%": { height: "0%" },
          "100%": { height: "75%" },
        },
        "height-grow": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        "width-grow": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      lineHeight: {
        "3.2h": "3.2vh",
      },
      spacing: {
        "2px": "2px",
        "95%": "95%",
        "7.5r": "7.5rem",
        "6.6r": "6.6rem",
        "3.3r": "3.3rem",
        "3.5r": "3.5rem",
        "95vh": "95vh",
        "22r": "22rem",
        "34r": "34rem",
        min100px: "-100px",
        "100px": "100px",
        "90vw": "90vw",
        "37.5r": "37.5rem",
        "30r": "30rem",
        "min6.5r": "-6.5rem",
        "15.6r": "15.6rem",
        "min5.5r": "-5.5rem",
        min10r: "-10rem",
        "min9.3r": "-9.3rem",
        "min10.6r": "-10.6rem",
      },
      colors: {
        "primary-bg": "#111",
        "glowy-blue": "#0066FF",
        subtext: "#c7c7c7",
        "offer-cards-hover": "#151515",
        "testimonial-card": "rgba(0, 102, 255, 0.2)",
        "footer-gray": "#727272",
      },
      maxWidth: {
        96: "96rem",
        56: "56rem",
      },
      width: {
        "4/5": "80%",
        "51.9r": "51.9rem",
      },
    },
  },
  variants: {
    filter: ["hover", "responsive", "group-hover"],
    extend: {
      scale: ["active", "group-hover", "hover"],
      width: ["group-hover"],
      height: [`group-hover`],
      translate: ["active", "group-hover"],
      zIndex: ["hover"],
      animation: ["group-hover"],
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
    require("tailwindcss-filters"),
  ],
};
