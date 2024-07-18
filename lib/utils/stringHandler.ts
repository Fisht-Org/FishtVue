import { isDate } from "./dateHandler"
import { isArray } from "./arrayHandler"
import { isObject } from "./objectHandler"
import { isFunction } from "./functionHandler"

export function isString<T>(value: T, empty = true): boolean {
  return typeof value === "string" && (empty || value !== "")
}

export function toFlatCase(str: string): string {
  // convert snake, kebab, camel and pascal cases to flat case
  return isString(str) ? str.replace(/([-_])/g, "").toLowerCase() : str
}

export function toKebabCase(str: string): string {
  // convert snake, camel and pascal cases to kebab case
  return isString(str)
    ? str
        .replace(/(_)/g, "-")
        .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : "-" + c.toLowerCase()))
        .toLowerCase()
    : str
}

export function toCapitalCase(str: string): string {
  return isString(str, false) ? str[0].toUpperCase() + str.slice(1) : str
}

export function stringify(value: any, indent = 2, currentIndent = 0): string {
  const currentIndentStr = " ".repeat(currentIndent)
  const nextIndentStr = " ".repeat(currentIndent + indent)

  if (isArray(value)) {
    return "[" + value.map((v: any) => stringify(v, indent, currentIndent + indent)).join(", ") + "]"
  } else if (isDate(value)) {
    return value.toISOString()
  } else if (isFunction(value)) {
    return value.toString()
  } else if (isObject(value)) {
    return (
      "{\n" +
      Object.entries(value)
        .map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`)
        .join(",\n") +
      `\n${currentIndentStr}` +
      "}"
    )
  } else {
    return JSON.stringify(value)
  }
}
