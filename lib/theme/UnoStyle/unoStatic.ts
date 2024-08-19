export const baseFilter = `filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);`
export const baseBackdropFilter = `-webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);`
export const baseTransition = `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;`
export const baseTransform = `transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`

export const singleStyles: Record<string, string> = {
  italic: "font-style: italic;",
  "not-italic": "font-style: normal;",
  "bg-none": "background-image: none;",
  "normal-nums": "font-variant-numeric: normal;",
  ordinal: "font-variant-numeric: ordinal;",
  "slashed-zero": "font-variant-numeric: slashed-zero;",
  "lining-nums": "font-variant-numeric: lining-nums;",
  "oldstyle-nums": "font-variant-numeric: oldstyle-nums;",
  "proportional-nums": "font-variant-numeric: proportional-nums;",
  "tabular-nums": "font-variant-numeric: tabular-nums;",
  "diagonal-fractions": "font-variant-numeric: diagonal-fractions;",
  "stacked-fractions": "font-variant-numeric: stacked-fractions;",
  underline: "text-decoration-line: underline;",
  overline: "text-decoration-line: overline;",
  "line-through": "text-decoration-line: line-through;",
  "no-underline": "text-decoration-line: none;",
  uppercase: "text-transform: uppercase;",
  lowercase: "text-transform: lowercase;",
  capitalize: "text-transform: capitalize;",
  "normal-case": "text-transform: none;",
  truncate: "overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;",
  "text-ellipsis": "text-overflow: ellipsis;",
  "text-clip": "text-overflow: clip;",
  rounded: "border-radius: 0.25rem;",
  border: "border-width: 1px;",
  "outline-none": "outline: 2px solid transparent;\n  outline-offset: 2px;",
  outline: "outline-style: solid;",
  "ring-inset": "--tw-ring-inset: inset;",
  ring: "box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
  shadow: "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
  blur: `--tw-blur: blur(8px);\n  ${baseFilter}`,
  "drop-shadow": `--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  ${baseFilter}`,
  grayscale: `--tw-grayscale: grayscale(100%);\n  ${baseFilter}`,
  invert: `--tw-invert: invert(100%);\n  ${baseFilter}`,
  sepia: `--tw-sepia: sepia(100%);\n  ${baseFilter}`,
  "backdrop-blur": `--tw-backdrop-blur: blur(8px);\n  ${baseBackdropFilter}`,
  "backdrop-grayscale": `--tw-backdrop-grayscale: grayscale(100%);\n  ${baseBackdropFilter}`,
  "backdrop-invert": `--tw-backdrop-invert: invert(100%);\n  ${baseBackdropFilter}`,
  "backdrop-sepia": `--tw-backdrop-sepia: sepia(100%);\n  ${baseBackdropFilter}`,
  "transition-none": `transition-property: none;`,
  "transition-shadow": `transition-property: box-shadow;\n  ${baseTransition}`,
  transition: `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  ${baseTransition}`,
  resize: "resize: both;",
  block: "display: block;",
  inline: "display: inline;",
  flex: "display: flex;",
  table: "display: table;",
  grid: "display: grid;",
  contents: "display: contents;",
  hidden: "display: none;",
  "flow-root": "display: flow-root;",
  "list-item": "display: list-item;",
  isolate: "isolation: isolate;",
  "isolation-auto": "isolation: auto;",
  static: "position: static;",
  fixed: "position: fixed;",
  absolute: "position: absolute;",
  relative: "position: relative;",
  sticky: "position: sticky;",
  visible: "visibility: visible;",
  invisible: "visibility: hidden;",
  collapse: "visibility: collapse;",
  grow: "flex-grow: 1;",
  shrink: "flex-shrink: 1;"
}
export const specialValues: Record<string, string> = {
  px: "1px",
  "3xs": "16rem",
  "2xs": "18rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "screen-sm": "640px",
  "screen-md": "768px",
  "screen-lg": "1024px",
  "screen-xl": "1280px",
  "screen-2xl": "1536px",
  auto: "auto",
  none: "none",
  full: "100%",
  screen: "100vw",
  prose: "65ch",
  svw: "1svw",
  lvw: "1lvw",
  dvw: "1dvw",
  min: "min-content",
  max: "max-content",
  fit: "fit-content"
}

export const attachmentBackground = {
  fixed: "fixed",
  local: "local",
  scroll: "scroll"
}
export const sizesBackground = {
  auto: "auto",
  cover: "cover",
  contain: "contain"
}
export const positionsBackground = {
  "left-bottom": "left-bottom",
  "left-top": "left-top",
  "right-bottom": "right-bottom",
  "right-top": "right-top",
  bottom: "bottom",
  center: "center",
  left: "left",
  right: "right",
  top: "top"
}
export const textSize: Record<string, string> = {
  xs: "font-size: 0.75rem;\n  line-height: 1rem;",
  sm: "font-size: 0.875rem;\n  line-height: 1.25rem;",
  base: "font-size: 1rem;\n  line-height: 1.5rem;",
  lg: "font-size: 1.125rem;\n  line-height: 1.75rem;",
  xl: "font-size: 1.25rem;\n  line-height: 1.75rem;",
  "2xl": "font-size: 1.5rem;\n  line-height: 2rem;",
  "3xl": "font-size: 1.875rem;\n  line-height: 2.25rem;",
  "4xl": "font-size: 2.25rem;\n  line-height: 2.5rem;",
  "5xl": "font-size: 3rem;\n  line-height: 1;",
  "6xl": "font-size: 3.75rem;\n  line-height: 1;",
  "7xl": "font-size: 4.5rem;\n  line-height: 1;",
  "8xl": "font-size: 6rem;\n  line-height: 1;",
  "9xl": "font-size: 8rem;\n  line-height: 1;"
}
export const fontFamily: Record<string, string> = {
  sans: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
}
export const fontWeights: Record<string, string> = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
}
export const letterSpacing: Record<string, string> = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}
export const lineHeight: Record<string, string> = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
}

export const specialColor: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent"
}
export const wordBreak: Record<string, string> = {
  normal: "overflow-wrap: normal;\n  word-break: normal;",
  words: "overflow-wrap: break-word;",
  all: "word-break: break-all;",
  keep: "word-break: keep-all;"
}
export const borderSize: Record<string, string> = {
  none: "0px",
  sm: "0.125rem",
  undefined: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}
export const boxShadow: Record<string, string> = {
  sm: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
  md: "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
  lg: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
  xl: "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
  "2xl": "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);",
  inner: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
  none: "box-shadow: 0 0 #0000;"
}
export const blend: Record<string, string> = {
  normal: "normal",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "color-dodge": "color-dodge",
  "color-burn": "color-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
  "plus-darker": "plus-darker",
  "plus-lighter": "plus-lighter"
}
export const blur: Record<string, string | number> = {
  none: "",
  sm: 4,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 40,
  "3xl": 64
}
export const dropShadow: Record<string, string> = {
  sm: "--tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));",
  md: "--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));",
  lg: "--tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));",
  xl: "--tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));",
  "2xl": "--tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));",
  none: "--tw-drop-shadow: drop-shadow(0 0 #0000);"
}
export const transitionProperty: Record<string, string> = {
  all: `all`,
  colors: `color, background-color, border-color, text-decoration-color, fill, stroke`,
  opacity: `opacity`,
  shadow: `box-shadow`,
  transform: `transform`
}
export const transitionFunction: Record<string, string> = {
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  linear: "linear"
}
export const cursor: string[] = [
  "auto",
  "default",
  "pointer",
  "wait",
  "text",
  "move",
  "help",
  "not-allowed",
  "none",
  "context-menu",
  "progress",
  "cell",
  "crosshair",
  "vertical-text",
  "alias",
  "copy",
  "no-drop",
  "grab",
  "grabbing",
  "all-scroll",
  "col-resize",
  "row-resize",
  "n-resize",
  "e-resize",
  "s-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "zoom-in",
  "zoom-out"
]
export const resize: Record<string, string> = {
  none: "none",
  y: "vertical",
  x: "horizontal"
}
export const snapAlign: Record<string, string> = {
  start: "start",
  end: "end",
  center: "center",
  "align-none": "none"
}
export const bgClip: Record<string, string> = {
  border: "border-box",
  padding: "padding-box",
  content: "content-box",
  text: "text"
}
export const bgOrigin: Record<string, string> = {
  border: "border-box",
  padding: "padding-box",
  content: "content-box"
}
export const bgRepeat: Record<string, string> = {
  x: "repeat-x",
  y: "repeat-y",
  round: "round",
  space: "space"
}
export const snapType: Record<string, string> = {
  none: "scroll-snap-type: none;",
  x: "scroll-snap-type: x var(--tw-scroll-snap-strictness);",
  y: "scroll-snap-type: y var(--tw-scroll-snap-strictness);",
  both: "scroll-snap-type: both var(--tw-scroll-snap-strictness);",
  mandatory: "--tw-scroll-snap-strictness: mandatory;",
  proximity: "--tw-scroll-snap-strictness: proximity;"
}
export const willChange: Record<string, string> = {
  auto: "auto",
  scroll: "scroll-position",
  contents: "contents",
  transform: "transform"
}
export const aspect: Record<string, string> = {
  auto: "auto",
  square: "1 / 1",
  video: "16 / 9"
}
export const floatAndClear: Record<string, string> = {
  start: "inline-start",
  end: "inline-end",
  right: "right",
  left: "left",
  none: "none"
}
export const flex: Record<string, string> = {
  1: "1 1 0%",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none"
}
export const order: Record<string, string> = {
  first: "-9999",
  last: "9999",
  none: "0"
}
export const gridAuto: Record<string, string> = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
}
export const justifyContent: Record<string, string> = {
  normal: "normal",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch"
}
export const alignContent: Record<string, string> = {
  normal: "normal",
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  baseline: "baseline",
  stretch: "stretch"
}
export const alignSelf: Record<string, string> = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}
export const placeContent: Record<string, string> = {
  center: "center",
  start: "start",
  end: "end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  baseline: "baseline",
  stretch: "stretch"
}
export const borderLogical: Record<string, (value: string) => string> = {
  undefined: (value) => `border-radius: ${value};`,
  ss: (value) => `border-start-start-radius: ${value};`,
  se: (value) => `border-start-end-radius: ${value};`,
  es: (value) => `border-end-start-radius: ${value};`,
  ee: (value) => `border-end-end-radius: ${value};`,
  tl: (value) => `border-top-left-radius: ${value};`,
  tr: (value) => `border-top-right-radius: ${value};`,
  br: (value) => `border-bottom-right-radius: ${value};`,
  bl: (value) => `border-bottom-left-radius: ${value};`,
  e: (value) => `border-start-end-radius: ${value};\n  border-end-end-radius: ${value};`,
  s: (value) => `border-start-start-radius: ${value};\n  border-end-start-radius: ${value};`,
  t: (value) => `border-top-left-radius: ${value};\n  border-top-right-radius: ${value};`,
  b: (value) => `border-bottom-left-radius: ${value};\n  border-bottom-right-radius: ${value};`,
  r: (value) => `border-top-right-radius: ${value};\n  border-bottom-right-radius: ${value};`,
  l: (value) => `border-top-left-radius: ${value};\n  border-bottom-left-radius: ${value};`
}
export const borderSides: Record<string, (value: string) => string> = {
  undefined: (value) => `border-width: ${value};`,
  x: (value) => `border-left-width: ${value};\n  border-right-width: ${value};`,
  y: (value) => `border-top-width: ${value};\n  border-bottom-width: ${value};`,
  s: (value) => `border-inline-start-width: ${value};`,
  e: (value) => `border-inline-end-width: ${value};`,
  t: (value) => `border-top-width: ${value};`,
  b: (value) => `border-bottom-width: ${value};`,
  r: (value) => `border-right-width: ${value};`,
  l: (value) => `border-left-width: ${value};`
}
export const positionPaddingOrMargin: Record<string, (styleName: string, value: string) => string> = {
  undefined: (styleName, value) => `${styleName}: ${value};`,
  x: (styleName, value) => `${styleName}-left: ${value};\n  ${styleName}-right: ${value};`,
  y: (styleName, value) => `${styleName}-top: ${value};\n  ${styleName}-bottom: ${value};`,
  s: (styleName, value) => `${styleName}-inline-start: ${value};`,
  e: (styleName, value) => `${styleName}-inline-end: ${value};`,
  r: (styleName, value) => `${styleName}-right: ${value};`,
  l: (styleName, value) => `${styleName}-left: ${value};`,
  t: (styleName, value) => `${styleName}-top: ${value};`,
  b: (styleName, value) => `${styleName}-bottom: ${value};`
}
export const scale: Record<string, (value: string) => string> = {
  undefined: (value) => `--tw-scale-x: ${value};\n  --tw-scale-y: ${value};\n  ${baseTransform}`,
  x: (value) => `--tw-scale-x: ${value};\n  ${baseTransform}`,
  y: (value) => `--tw-scale-y: ${value};\n  ${baseTransform}`
}
export const translate: Record<string, (value: string) => string> = {
  undefined: (value) => `--tw-translate-x: ${value};\n  --tw-translate-y: ${value};\n  ${baseTransform}`,
  x: (value) => `--tw-translate-x: ${value};\n  ${baseTransform}`,
  y: (value) => `--tw-translate-y: ${value};\n  ${baseTransform}`
}
export const skew: Record<string, (value: string) => string> = {
  x: (value) => `--tw-skew-x: ${value};\n  ${baseTransform}`,
  y: (value) => `--tw-skew-y: ${value};\n  ${baseTransform}`
}
