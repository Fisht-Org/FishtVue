import { isArray, deepCopyArray } from "./arrayHandler"
import { isFunction } from "./functionHandler"

export function type(obj: any): string {
  // @ts-ignore
  return Object.prototype.toString
    .call(obj)
    .match(/\s(\w+)/i)[1]
    .toLowerCase()
}

export function isObject<T>(value: T, empty = true) {
  return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0)
}

export function isEmpty<T>(value: T) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (!(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0)
  )
}

export function isNotEmpty<T>(value: T) {
  return !isEmpty(value)
}

export function get<T>(obj: T, path: string | string[]): T | undefined {
  if (path === "" || path.length == 0) return undefined
  if (Array.isArray(path)) path = path.join(".")
  const exactPath: any[] = []
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "[" && path[i] !== "]" && path[i] !== ".") {
      exactPath.push(path[i])
    }
  }
  const value = exactPath.reduce((source, path) => source[path], obj)
  return value ? value : undefined
}

export function deepMerge(...objects: any[]): object {
  return objects.reduce((prev: Record<string, any>, obj: Record<string, any>) => {
    if (obj && Object.keys(obj)?.length)
      Object.keys(obj).forEach((key) => {
        const pVal = prev[key]
        const oVal = obj[key]

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal)
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = deepMerge(pVal, oVal)
        } else {
          prev[key] = oVal
        }
      })
    return prev
  }, {})
}

export function deepEquals<A, B>(a: A, b: B): boolean {
  if ((a as any) === (b as any)) return true

  if (a && b && typeof a == "object" && typeof b == "object") {
    const arrA = Array.isArray(a),
      arrB = Array.isArray(b)
    let i, length, key

    if (arrA && arrB) {
      length = a.length
      if (length != b.length) return false
      for (i = length; i-- !== 0; ) if (!deepEquals(a[i], b[i])) return false

      return true
    }

    if (arrA != arrB) return false

    const dateA = a instanceof Date,
      dateB = b instanceof Date

    if (dateA != dateB) return false
    if (dateA && dateB) return a.getTime() == b.getTime()

    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp

    if (regexpA != regexpB) return false
    if (regexpA && regexpB) return a.toString() == b.toString()

    const keys = Object.keys(a)

    length = keys.length

    if (length !== Object.keys(b).length) return false

    for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false

    for (i = length; i-- !== 0; ) {
      key = keys[i]
      if (!deepEquals((a as Record<string, any>)[key], (b as Record<string, any>)[key])) return false
    }

    return true
  }

  return a !== a && b !== b
}

export function resolveFieldData(data: any, field: any): any | null {
  if (!data || !field) return null
  if (field in data && isNotEmpty(data[field])) return data[field]
  if (Object.keys(data).length) {
    if (isFunction(field)) {
      return field(data)
    } else if (field.indexOf(".") === -1) {
      return data[field]
    } else {
      const fields = field.split(".")
      let value = data

      for (let i = 0, len = fields.length; i < len; ++i) {
        if (value == null) return null
        value = value[fields[i]]
      }
      return value
    }
  }
  return null
}

export function equals<A, B>(obj1: A, obj2: B, field?: string): boolean {
  if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field)
  else return deepEquals(obj1, obj2)
}

export function compare<A, B>(value1: A, value2: B, comparator: (a: A, b: B) => any, order = 1): number {
  let result
  const emptyValue1 = isEmpty(value1)
  const emptyValue2 = isEmpty(value2)
  if (emptyValue1 && emptyValue2) result = 0
  else if (emptyValue1) result = order
  else if (emptyValue2) result = -order
  else if (typeof value1 === "string" && typeof value2 === "string") result = comparator(value1, value2)
  else result = (value1 as any) < (value2 as any) ? -1 : (value1 as any) > (value2 as any) ? 1 : 0
  return result
}

export function deepCopyObject<T>(object: T): T {
  const result = {} as T
  for (const key in object) {
    const item = object[key]
    if (isArray(item)) {
      result[key] = deepCopyArray(item as any[]) as any
    } else if (item != null && item.constructor == Object) {
      result[key] = deepCopy(item)
    } else {
      result[key] = item
    }
  }
  return result
}

export function deepCopy<T>(value: T): T {
  if (isArray(value)) {
    return deepCopyArray(value as unknown[]) as T
  }
  if (value == null) {
    return value
  }
  if (value.constructor == Object) {
    return deepCopyObject(value)
  }
  return value
}

export function deepFreeze<T extends object>(obj: T): T {
  const propNames = Object.getOwnPropertyNames(obj)

  for (const name of propNames) {
    const value = obj[name as keyof typeof obj]

    if (value && typeof value === "object") {
      deepFreeze(value as Record<string, unknown>)
    }
  }

  return Object.freeze(obj)
}

export function freeze<T extends object>(obj: T): T {
  if (!Object.isFrozen(obj)) {
    Object.freeze(obj)
  }
  return obj
}

export function unFreeze<T extends object>(obj: T): T {
  if (!Object.isFrozen(obj)) return obj
  return deepCopyObject(obj)
}
