export declare function type(obj: any): string
export declare function isObject<T>(value: T, empty?: boolean): boolean

export declare function isEmpty<T>(value: T): boolean

export declare function isNotEmpty<T>(value: T): boolean

export declare function get<T>(obj: T, path: string | string[]): T | undefined

export declare function deepMerge(...objects: any[]): object

export declare function deepEquals<A, B>(a: A, b: B): boolean

export declare function resolveFieldData(data: any, field: string): any | null

export declare function equals<A, B>(obj1: A, obj2: B, field?: string): boolean

export declare function compare<A, B>(value1: A, value2: B, comparator: (a: A, b: B) => any, order: number): number

export declare function deepCopyObject<T extends object>(object: T): T

export declare function deepCopy<T>(value: T): T

export declare function deepFreeze<T extends object>(obj: T): T

export declare function freeze<T extends object>(obj: T): T

export declare function unFreeze<T extends object>(obj: T): T
