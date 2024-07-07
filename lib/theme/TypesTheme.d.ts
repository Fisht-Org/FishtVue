import { DeepPartial, Size, ThemeColor } from "../types"
import { FixWindowStyle } from "fishtvue/fixwindow"

// ----------------------
declare type Theme = {
  primitive: ThemePrimitive
  semantic: ThemeSemantic
  components: ThemeComponents
}
// ----------------------
type ThemePrimitive = Margin | Padding | Colors | Border | Rounded
type ThemeSemantic = {
  primary: ThemeColor
  customThemeColor: number
  customThemeColorContrast: number
}
type ThemeComponents = {
  fixWindow: FixWindowStyle
}
// ----------------------
type ColorScheme<Light extends object, Dark extends object> = DeepPartial<{
  root?: Record<string, string>
  light?: Light
  dark?: Dark
}>
// ----------------------
type Margin = Record<"m" | "mx" | "my" | "mt" | "mb" | "ml" | "mr", Record<keyof Length, string>>
type Padding = Record<"p" | "px" | "py" | "pt" | "pb" | "pl" | "pr", Record<keyof Length, string>>
type Border = Record<"borderWidth", BorderWidth>
type Rounded = Record<"rounded", ThemeRounded>
type Colors = Record<
  | string
  | "emerald"
  | "green"
  | "lime"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone",
  ThemeColor
>

interface ThemeRounded extends Record<Size, string> {
  none: string
  full: string
}

interface BorderWidth extends Record<2 | 4 | 6 | 8, string> {
  none: "0px"
}

type Length = {
  0: "0px"
  0.25: "1px"
  0.5: "2px"
  1: "4px"
  1.5: "6px"
  2: "8px"
  2.5: "10px"
  3: "12px"
  3.5: "14px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "28px"
  8: "32px"
  9: "36px"
  10: "40px"
  11: "44px"
  12: "48px"
  14: "56px"
  16: "64px"
  20: "80px"
  24: "96px"
  28: "112px"
  32: "128px"
  36: "144px"
  40: "160px"
}
