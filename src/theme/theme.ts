import { Theme } from "theme-ui";

import tailwind from "./tailwind";
// @theme-ui/preset-tailwind

const baseFonts: Theme["fonts"] = {
  sans: "'Inter', sans-serif",
  serif: "Georgia,Cambria,serif",
  mono: "Menlo,Monaco,Consolas,monospace",
};

const fonts: Theme["fonts"] = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: "inherit",
  monospace: baseFonts.mono,
};

const theme: Theme = {
  ...tailwind,
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
      boxShadow: "sm",
    },
  },
  fonts,
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
  buttons: {
    ...tailwind.buttons,
    primary: tailwind.buttons.simple,
  },
  badges: {
    primary: {
      color: "background",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  layout: {
    container: {
      maxWidth: "80rem",
    },
  },
  // ...tailwind,
  // breakpoints: [...tailwind.breakpoints, "1520px"],
  // styles: {
  //   h1: {
  //     fontSize: 32,
  //     fontFamily: "heading",
  //     fontWeight: "heading",
  //     color: "primary",
  //     mt: 4,
  //     mb: 2,
  //   },
  // },
};

// console.log(theme);

export default theme;
