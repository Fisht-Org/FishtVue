import stylesRules from "./unoRules"
import { singleStyles, specialValues } from "./unoStatic"
import type { GroupsRegExp, StyleType } from "fishtvue/theme/UnoStyle/UnoTypes"

const singleStylesNames = new Set(Object.keys(singleStyles))
const RegSingleStyles = new RegExp(`(^|[^-a-z])(?<style>${[...singleStylesNames].join("|")})$`)
const StylesNames = new Set(Object.keys(stylesRules))
const RegStyles = new RegExp(`(?<style>${[...StylesNames].join("|")})[xyserltb]?-`)

export function tailwind(classStyle: string): string | undefined {
  if (typeof (classStyle as any) !== "string") return
  let value: string | undefined = undefined
  if (RegSingleStyles.test(classStyle)) {
    value = singleStyles[classStyle]
  } else {
    const styleName = classStyle.match(RegStyles)?.groups?.style
    if (!(styleName && StylesNames.has(styleName))) return
    value = stylesRules[styleName].getValue(classStyle)
  }
  return `.${classStyle}{\n  ${value}\n}`
}

export function getTemplate(
  style: StyleType,
  classStyle: string,
  toValue: (value: string) => string
): string | undefined {
  if (!style?.reg) return
  const groups = classStyle.match(style.reg as RegExp)?.groups as GroupsRegExp
  if (groups && (groups?.special || groups?.abstract)) {
    const template = (styleName: string, value: string) => `${styleName}: ${value};`
    return template(style.styleName ?? "", groups?.abstract ?? toValue(groups?.special))
  }
}

export function sizing(value: string): string {
  if (/(?<dividend>\d+)\/(?<divisor>\d+)/.test(value)) {
    const res = value.match(/(?<dividend>\d+)\/(?<divisor>\d+)/)
    if (res) {
      const { dividend, divisor } = res.groups as any
      if (dividend && divisor) {
        return `${parseFloat(((dividend / divisor) * 100).toFixed(4))}%`
      }
    }
  }
  if (parseFloat(value) === 0) return "0px"
  if (parseFloat(value) >= 0) return `${parseFloat(value) * 2 * 0.125}rem`
  if (/xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl/.test(value)) return specialValues[value]
  return specialValues[value]
}

// Space Between
// Font Smoothing
// Animation
