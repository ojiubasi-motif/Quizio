/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:"jit",
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"],
      },
      backgroundColor:{
        bgColor:"var(--bg-color-dark)",
        bgColorLight:"var(--bg-color-light)",
        bgColorGray:"var(--bg-color-gray)",
        bgWhite:"var(--bg-color-white)",
        btnBgColor:"var(--btn-bg-color)",
        yellowBtnBg:"var(--yellow-btn-bg)",
        hoverEffectBg:"var(--hoverBg)",
      },
      borderColor:{
        primaryBorderColor:"var(--border-color)",
        grayBorderColor:"var(--border-color-gray)",
      },
      textColor:{
        titleColor:"var(--title-color)",
        textColor:"var(--text-color-dark)",
        textColorLight:"var(--text-color-light)",
        textColorGray:"var(--text-color-gray)"
      },
      colors:{
        bodyColor:"var(--body-color)",
        containerColor:"var(--container-color)"
      },
      fontSize:{
        biggestFontSize:"var(--biggest-font-size)",
        h1FontSize:"var(--h1-font-size)",
        h2FontSize:"var(--h2-font-size)",
        h3FontSize:"var(--h3-font-size)",
        normalFontSize:"var(--normal-font-size)",
        smallFontSize:"var(--small-font-size)",
        smallerFontSize:"var(--smaller-font-size)"
      },
      fontWeight:{
        fontRegular:"var(--font-regular)",
        fontMedium:"var(--font-medium)",
        fontSemBold:"var(--font-semi-bold)"
      },
      zIndex:{
        zTooltip:"var(--z-tooltip)",
        zFixed:"var(--z-fixed)"
      }
    },
    screens:{
      'xs': {'max': '340px'},
      // => @media (max-width: 340px) { ... }
      'md': '576px',
      // =>@media (min-width:576px){...}
      'sl':'767px',
      // =>@media (min-width:767px){...}
      'lg':'1023px'
      // =>@media (min-width:1023px){...}
    }
  },
  plugins: [],
}

