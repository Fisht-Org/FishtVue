import { Plugin } from "vue"
import { StyleMode } from "../types"

import { Locale } from "fishtvue/locale"
import { Theme, ThemeComponents } from "fishtvue/theme/TypesTheme"

import { FixWindowOption } from "fishtvue/fixwindow"

export declare type FishtVue = {
  config: FishtVueConfiguration
}

export declare function useFishtVue<T extends FishtVue>(): Readonly<T> | undefined

export declare function getOptions<T extends keyof ComponentsOptions>(
  component?: T
): keyof ComponentsOptions extends T ? Readonly<ComponentsOptions> : Readonly<ComponentsOptions[T]>

export declare function getStyle<T extends keyof ThemeComponents>(
  component?: T
): keyof ThemeComponents extends T ? Readonly<Theme> | undefined : Readonly<ThemeComponents[T]> | undefined

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
  theme?: Theme
  componentsOptions?: Partial<ComponentsOptions>
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
