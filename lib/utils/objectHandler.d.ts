export declare function equals(obj1: any, obj2: any, field: string): boolean
export declare function deepEquals(a: any, b: any): boolean
export declare function resolveFieldData(data: any, field: string): any
export declare function filter(value: any, fields: any, filterValue: any): any
export declare function reorderArray(value: any, from: number, to: number): void
export declare function findIndexInList(value: any, list: any[], dataKey?: string): number
export declare function contains(value: any, list: any[]): boolean
export declare function insertIntoOrderedArray(item: any, index: number, arr: any[], sourceArr: any[]): void
export declare function removeAccents(str: any): string
export declare function toFlatCase(str: string): string
export declare function toCapitalCase(str: string): string
export declare function toKebabCase(str: string): string
export declare function isEmpty(value: any): boolean
export declare function isNotEmpty(value: any): boolean
export declare function isFunction(value: any): boolean
export declare function isObject(value: any, empty?: boolean): boolean
export declare function isDate(value: any): boolean
export declare function isArray(value: any, empty?: boolean): boolean
export declare function isString(value: any, empty?: boolean): boolean
export declare function isPrintableCharacter(char: string): boolean
export declare function findLast(value: any[], callback: () => any): any
export declare function findLastIndex(value: any[], callback: () => any): number
export declare function sort(
  value1: any,
  value2: any,
  order: number,
  comparator: (a: any, b: any) => any,
  nullSortOrder: number
): number
export declare function compare(value1: any, value2: any, comparator: (a: any, b: any) => any, order: number): number
export declare function nestedKeys(obj: object, parentKey?: string): string[]
export declare function stringify(value: any, indent?: number, currentIndent?: number): string
