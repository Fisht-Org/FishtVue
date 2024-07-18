import { FixWindowStyle } from "fishtvue/fixwindow/FixWindow"

export default {
  root: {
    duration: "250ms"
  },
  body: {
    padding: "0 1rem 0 1rem",
    rounded: "0.25rem",
    borderWidth: "1px"
  },
  light: {
    root: {
      color: "#262626"
    },
    body: {
      background: "#f5f5f4",
      color: "#52525b",
      border: "#e5e5e5"
    }
  },
  dark: {
    root: {
      color: "#d4d4d4"
    },
    body: {
      background: "#1c1917",
      color: "#a1a1aa",
      border: "#171717"
    }
  }
} as FixWindowStyle
