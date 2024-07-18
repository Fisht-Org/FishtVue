export function isFunction<T>(value: T): boolean {
  return !!(value && value.constructor === Function && value instanceof Function && value.apply)
}
