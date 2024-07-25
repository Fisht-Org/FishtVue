import { FixWindowStyle } from "fishtvue/fixwindow/FixWindow"

export default {
  root: {
    duration: "{duration.1000}"
  },
  body: {
    padding: "{px.4}",
    rounded: "{rounded.sm}",
    borderWidth: "{borderWidth.1}"
  },
  light: {
    root: {
      color: "{neutral.800}"
    },
    body: {
      background: "{stone.100}",
      color: "{zinc.600}",
      border: "{neutral.200}"
    }
  },
  dark: {
    root: {
      color: "{neutral.300}"
    },
    body: {
      background: "{stone.900}",
      color: "{zinc.400}",
      border: "{neutral.900}"
    }
  }
} as FixWindowStyle
