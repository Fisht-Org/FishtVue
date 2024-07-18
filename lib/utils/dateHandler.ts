export function isDate<T>(value: T): boolean {
  return value instanceof Date && value.constructor === Date
}
