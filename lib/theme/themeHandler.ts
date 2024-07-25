import { Theme } from "fishtvue/theme/TypesTheme"
import { deepCopy } from "fishtvue/utils/objectHandler"

const fieldNameTheme: Array<keyof Theme> = ["primitive", "semantic", "components"]
const mask = new RegExp("{([^}]*)}", "g")
const replacer = (match: string, route: string, theme: Theme): string => {
  const keys = route.split(".")

  function getToValue(obj: any): string | undefined {
    let value = obj
    for (const key of keys) {
      value = value[key]
      if (value === undefined) return undefined
    }
    return value
  }

  for (const key of fieldNameTheme) {
    const value = getToValue(theme[key])
    if (value !== undefined) return value
  }
  return match
}

function setLinksTheme<T>(obj: any, theme: Theme): T {
  for (const key in obj) {
    if (obj[key] instanceof Array || obj[key] instanceof Object) obj[key] = setLinksTheme(obj[key], theme)
    if (typeof obj[key] === "string" && mask.test(obj[key]))
      obj[key] = (obj[key] as string).replace(mask, (match: string, route: string) => replacer(match, route, theme))
  }
  return obj
}

export function linksTheme<T extends Theme>(theme: Theme | undefined): T | undefined {
  // TODO проработать вариант когда ссылка ссылается на другую ссылку
  if (!theme) return
  const copyTheme = deepCopy(theme) as T
  copyTheme.primitive = setLinksTheme<Theme["primitive"]>(copyTheme.primitive, copyTheme)
  copyTheme.semantic = setLinksTheme<Theme["semantic"]>(copyTheme.semantic, copyTheme)
  copyTheme.components = setLinksTheme<Theme["components"]>(copyTheme.components, copyTheme)
  return copyTheme
}

export function toVarsCss<T extends Record<string, string | T>>(obj: T, prefix = ""): string {
  function flattenObject(obj: T, parentKey = "", result = {}): Record<string, string> {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = parentKey ? `${parentKey}-${key}` : key
        if (typeof obj[key] === "object" && obj[key] !== null) {
          flattenObject(obj[key] as T, newKey, result)
        } else {
          // @ts-ignore
          result[newKey] = obj[key]
        }
      }
    }
    return result
  }

  const resultCss = flattenObject(obj)
  return (
    Object.keys(resultCss).reduce(
      (res: string, item: string) => (res += `\n    --${prefix ? prefix + "-" : ""}${item}: ${resultCss[item]};`),
      ""
    ) + "\n  "
  )
}
