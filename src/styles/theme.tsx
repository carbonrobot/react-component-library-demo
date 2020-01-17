import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  breakpoints: {
    mobile: `(min-width: 320px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
  },

  gutter: "20px",
  globalTransition: "all 0.3s ease 0s",

  colors: {
    blue: "#0096D6",
    darkBlue: "#015f8a",
    violet: "#7246BF",
    purple: "#A33FA3",
    pink: "#E51869",
    red: "#F9350F",
    orange: "#E07800",
    yellow: "#FCDD1F",
    lightGreen: "#84C43E",
    green: "#4FA33D",
    turquoise: "#2DD1C8",
    success: "#1ca727",
    info: "#0096D6",
    warning: "#F9FFD9",
    error: "#E32E13",
    body: "#666666",
    bodyDark: "#333333",
    background: "#F2F2F2",
    border: "#E6E6E6",
    white: "#ffffff",
    black: "#000000",
    gray: "4D4D4D",
  },
};

export default theme;
export type Theme = typeof theme;
