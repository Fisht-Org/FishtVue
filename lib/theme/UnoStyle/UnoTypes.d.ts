export declare type StyleType = {
  styleName?: string
  reg?: RegExp | Record<string, RegExp>
  getValue(value: string): string | undefined
}

export declare type GroupsRegExp = {
  style: string
  special: string
  abstract: string
  [key: string]: string
}
