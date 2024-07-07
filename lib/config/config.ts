import { inject, reactive } from "vue"
import type { ObjectPlugin } from "vue"
import type { ComponentsOptions, FishtVue, FishtVueConfiguration } from "fishtvue/config/FishtVue"
import Locales from "fishtvue/locale/locale"
import { defaultTheme } from "fishtvue/theme/theme"

const FishtVueSymbol = Symbol()

export function useFishtVue<T extends keyof ComponentsOptions>(component?: T) {
  const FishtVue: FishtVue | undefined = inject(FishtVueSymbol)
  if (!FishtVue) {
    console.warn("FishtVue is not installed!")
    return {}
  }
  if (component && FishtVue?.config?.componentsOptions?.[component]) {
    return FishtVue.config.componentsOptions[component]
  }
  return FishtVue
}

export default {
  install: (app, options) => {
    const configOptions = options ? { ...defaultOptions, ...options } : { ...defaultOptions }
    const FishtVue = {
      config: reactive(configOptions)
    }

    app.config.globalProperties.$fishtVue = FishtVue
    app.provide(FishtVueSymbol, FishtVue)
  }
} as ObjectPlugin
export const defaultOptions: FishtVueConfiguration = {
  theme: defaultTheme,
  locale: {
    en: Locales.en
  }
}
