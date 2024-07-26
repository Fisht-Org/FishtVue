import { FixWindowStyle } from "fishtvue/fixwindow/FixWindow"

export default {
  root: {
    duration: "{duration.300}"
  },
  body: {
    padding: "{px.1}",
    rounded: "{rounded.none}",
    borderWidth: "{borderWidth.1}"
  },
  light: {
    root: {
      color: "{neutral.800}"
    },
    body: {
      background: "{stone.50}",
      color: "{zinc.600}",
      border: "{neutral.200}"
    }
  },
  dark: {
    root: {
      color: "{neutral.300}"
    },
    body: {
      background: "{stone.950}",
      color: "{zinc.400}",
      border: "{neutral.900}"
    }
  }
} as FixWindowStyle
