export declare function isArray<T>(value: T, empty?: boolean): boolean

export declare function contains<T>(value: T, list: T[]): boolean

export declare function nestedKeys(obj: object, parentKey?: string): string[]

export declare function sort(
  value1: any,
  value2: any,
  order: number,
  comparator: (a: any, b: any) => any,
  nullSortOrder: number
): number

export declare function filter<T>(value: T[], fields: T[], filterValue: string): T[]

export declare function reorderArray<T>(value: T[], from: number, to: number): void

export declare function findLast<T>(value: T[], callback: () => T): T | undefined

export declare function findLastIndex<T>(value: T[], callback: () => T): number

export declare function findIndexInList<T>(value: T, list: T[]): number

export declare function insertIntoOrderedArray<T>(item: T, index: number, arr: T[], sourceArr: T[]): void

export declare function deepCopyArray<T>(array: T[]): T[]
