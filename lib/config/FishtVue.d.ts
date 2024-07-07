import { Plugin } from "vue"
import { DeepPartial, StyleMode } from "../types"

import { Locale } from "fishtvue/locale"
import { Theme } from "fishtvue/theme/TypesTheme"

import { FixWindowOption } from "fishtvue/fixwindow"

export declare type FishtVue = {
  config: FishtVueConfiguration
}

export declare function useFishtVue<T extends keyof ComponentsOptions>(
  component?: T
): keyof ComponentsOptions extends T ? FishtVue : ComponentsOptions[T]

declare const plugin: Plugin
export default plugin

declare module "vue/types/vue" {
  interface Vue {
    $fishtVue: FishtVue
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $fishtVue: FishtVue
  }
}

export declare interface FishtVueConfiguration {
  inputStyle?: StyleMode
  zIndex?: Partial<ZIndexOptions>
  locale?: Locale
  theme?: DeepPartial<Theme>
  componentsOptions?: ComponentsOptions
}
type ZIndexOptions = {
  modal: number
  overlay: number
  menu: number
  tooltip: number
}
export type ComponentsOptions = {
  fixWindow: FixWindowOption
  test: string
}
