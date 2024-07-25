import { inject, reactive } from "vue"
import { linksTheme, NamesTheme } from "fishtvue/theme/theme"
import DefaultTheme from "fishtvue/theme/themes/DefaultTheme"
import Aurora from "fishtvue/theme/themes/Aurora"
import { deepMerge, deepFreeze, deepCopyObject } from "fishtvue/utils/objectHandler"
import Locales from "fishtvue/locale/locale"
import type { ObjectPlugin } from "vue"
import { Theme, ThemeComponents } from "fishtvue/theme"
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

function getDefaultOptions(options: FishtVueConfiguration): FishtVueConfiguration {
  const nameTheme = <keyof typeof NamesTheme | "DefaultTheme">(
    (Object.keys(NamesTheme).includes(options?.optionsTheme?.nameTheme ?? "")
      ? options?.optionsTheme?.nameTheme
      : "DefaultTheme")
  )
  let theme: Theme | undefined
  switch (nameTheme) {
    case "Aurora":
      theme = Aurora
      break
    default:
      theme = DefaultTheme
  }
  return {
    theme: theme,
    locale: {
      en: Locales.en
    }
  }
}

export default {
  install: (app, options: FishtVueConfiguration) => {
    const defaultOptions = getDefaultOptions(options)
    const FishtVue: FishtVue = {
      config: reactive(options ? deepMerge(defaultOptions, options) : defaultOptions),
      useFishtVue: useFishtVue,
      getOptions: getOptions as FishtVue["getOptions"],
      getStyle: getStyle as FishtVue["getStyle"]
    }
    FishtVue.config.theme = linksTheme(FishtVue.config.theme)
    FishtVueSymbol = Symbol("FishtVue")
    // @ts-ignore
    window.FishtVue = FishtVue
    app.provide(FishtVueSymbol, FishtVue)
    app.config.globalProperties.$fishtVue = FishtVue
  }
} as ObjectPlugin
