import { inject, reactive } from "vue"
import { NamesTheme, linksTheme } from "fishtvue/theme"
import { deepMerge, deepFreeze, deepCopyObject } from "fishtvue/utils/objectHandler"
import Locales from "fishtvue/locale/locale"
import Aurora from "fishtvue/theme/themes/Aurora"
import Harmony from "fishtvue/theme/themes/Harmony"
import Sapphire from "fishtvue/theme/themes/Sapphire"
import type { ObjectPlugin } from "vue"
import type { Theme, ThemeComponents } from "fishtvue/theme"
import type { ComponentsOptions, FishtVue, FishtVueConfiguration } from "fishtvue/config/FishtVue"

let FishtVueSymbol = Symbol()

export function useFishtVue(): Readonly<FishtVue> | undefined {
  return isExistFishtVue<Readonly<FishtVue>>((FishtVue) => {
    FishtVue = deepCopyObject(FishtVue)
    deepFreeze(FishtVue)
    return FishtVue
  })
}

export function getOptions<T extends keyof ComponentsOptions>(component?: T) {
  return isExistFishtVue((FishtVue) => {
    let options = FishtVue?.config?.componentsOptions
    if (options) {
      options = deepCopyObject(options)
      deepFreeze(options)
      if (component && options?.[component]) return options[component]
      return options
    }
  })
}

export function getStyle<T extends keyof ThemeComponents>(component?: T) {
  return isExistFishtVue((FishtVue) => {
    let styles = FishtVue?.config?.theme
    if (styles) {
      styles = deepCopyObject(styles)
      deepFreeze(styles)
      if (component && styles.components?.[component]) {
        return styles?.components?.[component]
      }
      return styles
    }
  })
}

function isExistFishtVue<T>(fun: (FishtVue: FishtVue) => T): T | undefined {
  if (FishtVueSymbol.toString() === Symbol("FishtVue").toString()) {
    const FishtVue: FishtVue | undefined = inject(FishtVueSymbol)
    if (FishtVue) return fun(FishtVue)
  }
  console.warn("FishtVue is not installed!")
}

function getDefaultOptions(options: FishtVueConfiguration): FishtVueConfiguration {
  const nameTheme = <keyof typeof NamesTheme>(
    (Object.values(NamesTheme).includes(options?.optionsTheme?.nameTheme ?? "")
      ? options?.optionsTheme?.nameTheme
      : "Aurora")
  )
  let theme: Theme | undefined
  switch (nameTheme) {
    case "Aurora":
      theme = Aurora
      break
    case "Harmony":
      theme = Harmony
      break
    case "Sapphire":
      theme = Sapphire
      break
    default:
      theme = Aurora
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
      useFishtVue: useFishtVue as FishtVue["useFishtVue"],
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
