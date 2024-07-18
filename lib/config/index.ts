import { inject, reactive } from "vue"
import { defaultTheme, linksTheme } from "fishtvue/theme/theme"
import { deepMerge, deepFreeze, deepCopyObject } from "fishtvue/utils/objectHandler"
import Locales from "fishtvue/locale/locale"
import type { ObjectPlugin } from "vue"
import type { ThemeComponents } from "fishtvue/theme"
import type { ComponentsOptions, FishtVue, FishtVueConfiguration } from "fishtvue/config/FishtVue"

let FishtVueSymbol = Symbol()

export function useFishtVue<T extends FishtVue>(): T | undefined {
  if (FishtVueSymbol.toString() === Symbol("FishtVue").toString()) {
    let FishtVue = inject(FishtVueSymbol) as T
    if (FishtVue) {
      FishtVue = deepCopyObject(FishtVue)
      deepFreeze(FishtVue)
      return FishtVue
    }
  }
  console.warn("FishtVue is not installed!")
}

export function getOptions<T extends keyof ComponentsOptions>(component?: T) {
  if (FishtVueSymbol.toString() === Symbol("FishtVue").toString()) {
    const FishtVue: FishtVue | undefined = inject(FishtVueSymbol)
    if (FishtVue) {
      let options = FishtVue?.config?.componentsOptions
      if (options) {
        options = deepCopyObject(options)
        deepFreeze(options)
        if (component && options?.[component]) return options[component]
        return options
      }
    }
  }
  console.warn("FishtVue is not installed!")
}

export function getStyle<T extends keyof ThemeComponents>(component?: T) {
  if (FishtVueSymbol.toString() === Symbol("FishtVue").toString()) {
    const FishtVue: FishtVue | undefined = inject(FishtVueSymbol)
    if (FishtVue) {
      let styles = FishtVue?.config?.theme
      if (styles) {
        styles = deepCopyObject(styles)
        deepFreeze(styles)
        if (component && styles.components?.[component]) {
          return styles?.components?.[component]
        }
        return styles
      }
    }
  }
  console.warn("FishtVue is not installed!")
}

export default {
  install: (app, options) => {
    const FishtVue: FishtVue = {
      config: reactive(options ? deepMerge(defaultOptions, options) : defaultOptions)
    }
    FishtVue.config.theme = linksTheme(FishtVue.config.theme)
    FishtVueSymbol = Symbol("FishtVue")
    // @ts-ignore
    window.FishtVue = FishtVue
    app.provide(FishtVueSymbol, FishtVue)
    app.config.globalProperties.$fishtVue = FishtVue
  }
} as ObjectPlugin
export const defaultOptions: FishtVueConfiguration = {
  theme: defaultTheme,
  locale: {
    en: Locales.en
  }
}
