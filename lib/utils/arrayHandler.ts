import { isObject, isNotEmpty, equals, resolveFieldData, isEmpty, compare, deepCopyObject } from "./objectHandler"

export function isArray<T>(value: T, empty = true): boolean {
  return Array.isArray(value) && (empty || value.length !== 0)
}

export function contains<T>(value: T, list: T[]): boolean {
  if (value != null && list && list.length) {
    for (const val of list) {
      if (equals(value, val)) return true
    }
  }
  return false
}

export function nestedKeys(obj = {}, parentKey = ""): string[] {
  return Object.entries(obj).reduce((o: string[], [key, value]) => {
    const currentKey: string = parentKey ? `${parentKey}.${key}` : key

    if (isObject(value)) {
      o = o.concat(nestedKeys(value as object, currentKey))
    } else {
      o.push(currentKey)
    }

    return o
  }, [])
}

export function sort(
  value1: any,
  value2: any,
  order = 1,
  comparator: (a: any, b: any) => any,
  nullSortOrder = 1
): number {
  const result = compare(value1, value2, comparator, order)
  let finalSortOrder = order

  // nullSortOrder == 1 means Excel like sort nulls at bottom
  if (isEmpty(value1) || isEmpty(value2)) {
    finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder
  }
  return finalSortOrder * result
}

export function filter<T>(value: T[], fields: T[], filterValue: string): T[] {
  const filteredItems: any[] = []

  if (value?.length) {
    for (const item of value) {
      for (const field of fields) {
        if (String(resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
          filteredItems.push(item)
          break
        }
      }
    }
  }

  return filteredItems
}

export function reorderArray<T>(value: T[], from: number, to: number): void {
  if (value && from !== to) {
    if (to >= value.length) {
      to %= value.length
      from %= value.length
    }
    value.splice(to, 0, value.splice(from, 1)[0])
  }
}

export function findLast<T>(arr: T[], callback: () => T): T | undefined {
  let item
  if (isNotEmpty(arr)) {
    try {
      item = arr.findLast(callback)
    } catch {
      item = [...arr].reverse().find(callback)
    }
  }
  return item
}

export function findLastIndex<T>(arr: T[], callback: () => T): number {
  let index: number = -1
  if (isNotEmpty(arr)) {
    try {
      index = arr.findLastIndex(callback)
    } catch {
      const searchElement = [...arr].reverse().find(callback)
      if (searchElement) {
        index = arr.lastIndexOf(searchElement)
      }
    }
  }
  return index
}

export function findIndexInList<T>(value: T, list: T[]): number {
  let index: number = -1
  if (list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === value) {
        index = i
        break
      }
    }
  }
  return index
}

export function insertIntoOrderedArray<T>(item: T, index: number, arr: T[], sourceArr: T[]): void {
  if (arr.length > 0) {
    let injected = false
    for (let i = 0; i < arr.length; i++) {
      const currentItemIndex = findIndexInList(arr[i], sourceArr)
      if (currentItemIndex > index) {
        arr.splice(i, 0, item)
        injected = true
        break
      }
    }
    if (!injected) arr.push(item)
  } else arr.push(item)
}
export function deepCopyArray<T>(array: T[]): T[] {
  const length = array.length,
    result = [] as T[]
  let index = -1
  while (++index < length) {
    const item = array[index]
    if (isArray(item)) {
      result[index] = deepCopyArray(item as T[]) as T
    } else if (item != null && isObject(item)) {
      result[index] = deepCopyObject(item)
    } else {
      result[index] = item
    }
  }
  return result
}
