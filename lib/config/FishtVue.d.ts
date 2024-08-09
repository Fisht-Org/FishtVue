import { Plugin } from "vue"
import { StyleMode } from "../types"

import { Locale } from "fishtvue/locale/TypesLocale"
import { Theme, ThemeComponents } from "fishtvue/theme"

import { NamesTheme } from "fishtvue/theme"
import { FixWindowOption } from "fishtvue/fixwindow"
import { BadgeOption } from "fishtvue/badge"

export declare type FishtVue = {
  config: FishtVueConfiguration
  useFishtVue(): Readonly<FishtVue> | undefined
  getOptions<T extends keyof ComponentsOptions>(
    component?: T
  ): keyof ComponentsOptions extends T ? Readonly<ComponentsOptions> : Readonly<ComponentsOptions[T]>
  getStyle<T extends keyof ThemeComponents>(
    component?: T
  ): keyof ThemeComponents extends T ? Readonly<Theme> | undefined : Readonly<ThemeComponents[T]> | undefined
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
  zIndex?: ZIndexOptions
  locale?: Locale
  optionsTheme?: OptionsTheme
  theme?: Theme
  componentsOptions?: ComponentsOptions
}

type ZIndexOptions = Partial<{
  modal: number
  overlay: number
  menu: number
  tooltip: number
}>

export type OptionsTheme = Partial<{
  /**
   * ## Available theme names `NamesTheme`
   *
   * Aurora => (заря)
   *
   * Larimar => (ларимар)
   *
   * Nimbus => (нимбус)
   *
   * Celestia => (селестия)
   *
   * Velvet => (бархат)
   *
   * Harmony => (гармония)
   *
   * Serenity => (безмятежность)
   *
   * Sapphire => (сапфир)
   *
   * Eclipse => (затмение)
   *
   * Iris => (ирис)
   *
   */
  nameTheme: keyof typeof NamesTheme
  /** ## PROPS-EMITS-SLOTS */
  prefix: string
  lightModeSelector: string
  darkModeSelector: string
  layers: string | "fishtvue"
}>

export type ComponentsOptions = Partial<{
  FixWindow: FixWindowOption
  Badge: BadgeOption
}>
