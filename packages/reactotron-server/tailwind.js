let defaultConfig = require("tailwindcss/defaultConfig")()

/**
 * This is the base palette for the colours. Try not to use these from your components
 * directly.  Use the roles that we define below within `textColors`, `backgroundColors`,
 * and `borderColors`.
 */
let colors = {
  transparent: "transparent",
  black: "#141414",
  greyDarkest: "#1E1E1E",
  greyDarker: "#2E2E2E",
  greyLight: "#AAAAAA",
  greyLighter: "#CCCCCC",
  greyLightest: "#EEEEEE",
  white: "#FFFFFF",
  primary: "#FFAA1E",
}

module.exports = {
  /**
   * Contradicting the advice above... we make these accessible incase you need them.
   */
  colors: colors,
  textColors: {
    /**
     * The default text color. You don't have to add this class, it will be the default. I
     * just added it here for completeness.
     */
    default: colors.white,
    /**
     * Used for secondary information: it's not important as the reason for displaying the data
     * but it's more important than not showing it at all.
     */
    subtle: colors.greyLight,
    /**
     * Used when you want to call something out. Use sparingly so we can keep this effective.
     */
    highlight: colors.primary,
  },
  backgroundColors: {
    sectionPicker: colors.black,
    content: colors.greyDarkest,
    expandButton: colors.greyDarker,
    expandButtonHover: colors.greyDarkest,
    expandButtonSelect: colors.primary,
  },
  borderColors: {
    default: colors.greyDarker,
  },
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  fonts: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    serif: [
      "Constantia",
      "Lucida Bright",
      "Lucidabright",
      "Lucida Serif",
      "Lucida",
      "DejaVu Serif",
      "Bitstream Vera Serif",
      "Liberation Serif",
      "Georgia",
      "serif",
    ],
    mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
  },
  textSizes: {
    xs: ".75rem", // 12px
    sm: ".875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  tracking: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.05em",
  },
  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
  },
  borderRadius: {
    none: "0",
    sm: ".125rem",
    default: ".25rem",
    lg: ".5rem",
    full: "9999px",
  },
  width: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "1/2": "50%",
    "1/3": "33.33333%",
    "2/3": "66.66667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.66667%",
    "5/6": "83.33333%",
    full: "100%",
    screen: "100vw",
  },
  height: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    full: "100%",
    screen: "100vh",
  },
  minWidth: {
    "0": "0",
    full: "100%",
  },
  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh",
  },
  maxWidth: {
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%",
  },
  maxHeight: {
    full: "100%",
    screen: "100vh",
  },
  padding: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
  },
  margin: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
  },
  negativeMargin: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
  },
  shadows: {
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
  zIndex: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50,
  },
  opacity: {
    "0": "0",
    "25": ".25",
    "50": ".5",
    "75": ".75",
    "100": "1",
  },
  svgFill: {
    current: "currentColor",
  },
  svgStroke: {
    current: "currentColor",
  },
  modules: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColors: ["responsive", "hover"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderColors: ["responsive", "hover"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidths: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    flexbox: ["responsive"],
    float: ["responsive"],
    fonts: ["responsive"],
    fontWeights: ["responsive", "hover"],
    height: ["responsive"],
    leading: ["responsive"],
    lists: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    opacity: ["responsive"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    shadows: ["responsive"],
    svgFill: [],
    svgStroke: [],
    textAlign: ["responsive"],
    textColors: ["responsive", "hover"],
    textSizes: ["responsive"],
    textStyle: ["responsive", "hover"],
    tracking: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"],
  },
  options: {
    prefix: "",
    important: false,
    separator: ":",
  },
}
