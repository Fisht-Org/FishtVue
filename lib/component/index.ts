import {
  getCurrentInstance,
  onBeforeMount as vueOnBeforeMount,
  onMounted as vueOnMounted,
  onBeforeUpdate as vueOnBeforeUpdate,
  onUpdated as vueOnUpdated,
  onBeforeUnmount as vueOnBeforeUnmount,
  onUnmounted as vueOnUnmounted
} from "vue"
import { useStyle, tailwind } from "fishtvue/theme"
import { cn } from "fishtvue/utils/tailwindHandler"
import { toKebabCase } from "fishtvue/utils/stringHandler"
import { fieldsPick } from "fishtvue/utils/objectHandler"
import { minifyCSS } from "fishtvue/utils/domHandler"
import type { ComponentInternalInstance } from "vue"
import type { Theme, ThemeComponents } from "fishtvue/theme"
import type { ComponentsOptions, FishtVue, OptionsTheme } from "fishtvue/config"
import type { PublicFields, StylesComponent } from "./TypeComponent"
import { UniqueKeySetCollection } from "fishtvue/utils/uniqueCollection"

const listComponents = new Set<keyof ComponentsOptions | undefined>()
const listOfStyledComponents = new UniqueKeySetCollection<keyof ComponentsOptions | undefined, string>()
/**
 * ## Class: Component
 *
 * The `Component` class is an exported default class that represents a component in the application.
 *
 * ### Properties
 *
 * - `name`: The name of the component.
 * - `scopeId`: The scope ID of the component.
 * - `prefix`: The prefix for the component.
 *
 * ### Constructor
 *
 * The constructor initializes the `Component` class and sets the necessary properties.
 *
 * ### Methods
 *
 * - `onBeforeMount(hook)`: A method that sets a hook to be executed before the component is mounted.
 * - `onMounted(hook)`: A method that sets a hook to be executed after the component is mounted.
 * - `onBeforeUpdate(hook)`: A method that sets a hook to be executed before the component is updated.
 * - `onUpdated(hook)`: A method that sets a hook to be executed after the component is updated.
 * - `onBeforeUnmount(hook)`: A method that sets a hook to be executed before the component is unmounted.
 * - `onUnmounted(hook)`: A method that sets a hook to be executed after the component is unmounted.
 * - `getOptions()`: A method that returns the options for the component.
 * - `getStyles()`: A method that returns the styles for the component.
 * - `getPrefix()`: A method that returns the prefix for the component.
 * - `initStyle(stylesComp)`: A method that initializes the style for the component.
 */
export default class Component<T extends keyof ComponentsOptions> {
  private readonly __instance: ComponentInternalInstance | null
  private readonly __globalConfig?: FishtVue
  private readonly __globalTheme?: Theme
  private readonly __globalOptionsTheme?: OptionsTheme
  private readonly __options?: ComponentsOptions[T]
  private readonly __styles?: ThemeComponents[T]
  private __stylesComp?: StylesComponent
  private readonly __CSSBase: string[]
  private __CSS: string[]
  private readonly __arrayPublicFields: Array<keyof this> = [
    "name",
    "scopeId",
    "prefix",
    "getOptions",
    "getStyles",
    "getPrefix",
    "initStyle"
  ]
  public readonly name?: T
  public readonly scopeId?: string
  public readonly prefix?: OptionsTheme["prefix"]

  constructor() {
    this.__instance = getCurrentInstance()
    this.__globalConfig = this.__instance?.appContext.config.globalProperties.$fishtVue
    this.__globalTheme = this.__globalConfig?.config?.theme
    this.__globalOptionsTheme = this.__globalConfig?.config?.optionsTheme
    this.name = this.__instance?.type.__name as T
    this.scopeId = `data-fisht-${(this.__instance?.type as any).__hmrId}`
    this.prefix = this.__globalOptionsTheme?.prefix ? `${this.__globalOptionsTheme?.prefix}-` : ""
    this.__options = this.__globalConfig?.getOptions(this.name) as ComponentsOptions[T]
    this.__styles = this.__globalConfig?.getStyle(this.name) as ThemeComponents[T]
    this.__stylesComp = undefined
    this.__CSSBase = []
    this.__CSS = []
    this.__lifeCycle()
  }

  private __lifeCycle() {
    vueOnMounted(async () => {
      this.__setDataAttribute()
    })
  }

  private __getPublicFields = () => fieldsPick(this, this.__arrayPublicFields)
  /**
   * `onBeforeMount(hook)`: A method that sets a hook to be executed before the component is mounted.
   */
  public onBeforeMount = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnBeforeMount(() => hook(this.__getPublicFields()))
  /**
   * `onMounted(hook)`: A method that sets a hook to be executed after the component is mounted.
   */
  public onMounted = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnMounted(() => hook(this.__getPublicFields()))
  /**
   * `onBeforeUpdate(hook)`: A method that sets a hook to be executed before the component is updated.
   */
  public onBeforeUpdate = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnBeforeUpdate(() => hook(this.__getPublicFields()))
  /**
   * `onUpdated(hook)`: A method that sets a hook to be executed after the component is updated.
   */
  public onUpdated = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnUpdated(() => hook(this.__getPublicFields()))
  /**
   * `onBeforeUnmount(hook)`: A method that sets a hook to be executed before the component is unmounted.
   */
  public onBeforeUnmount = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnBeforeUnmount(() => hook(this.__getPublicFields()))
  /**
   * `onUnmounted(hook)`: A method that sets a hook to be executed after the component is unmounted.
   */
  public onUnmounted = (hook: (instance: Pick<this, PublicFields>) => any): void =>
    vueOnUnmounted(() => hook(this.__getPublicFields()))
  /**
   * `getOptions()`: A method that returns the options for the component.
   */
  public getOptions = (): ComponentsOptions[T] | undefined => this.__options
  /**
   * `getStyles()`: A method that returns the styles for the component.
   */
  public getStyles = (): ThemeComponents[T] | undefined => this.__styles
  /**
   * `getPrefix()`: A method that returns the prefix for the component.
   */
  public getPrefix = (): OptionsTheme["prefix"] => this.prefix

  private __setDataAttribute() {
    if (this.__instance?.vnode?.el && this.scopeId) this.__instance?.vnode?.el.setAttribute(this.scopeId, "")
  }

  /**
   * `initStyle(stylesComp)`: A method that initializes the style for the component.
   */
  public initStyle = (stylesComp?: StylesComponent): void => {
    this.__stylesComp = stylesComp ?? this.__stylesBase
    if (!listComponents.has(this.name)) this.__setStyle(this.__stylesComp)
  }
  public setStyle = <T extends string | string[]>(stylesComp: T | T[], isBaseClasses = false): string => {
    const styles = cn(stylesComp)
    const newClasses = styles.split(" ").filter((item) => !listOfStyledComponents.hasValue(this.name, item))
    if (newClasses?.length) {
      newClasses.forEach((item) => {
        listOfStyledComponents.add(this.name, [item])
        const css = tailwind(item, {
          selector: `.${this.prefix}${toKebabCase(this.name)}[${this.scopeId}]${isBaseClasses ? "" : " "}`,
          darkSelector: this.__globalOptionsTheme?.darkModeSelector ?? ""
        })
        if (css) this.__CSS.push(css)
      })
      if (this.__stylesComp) this.__setStyle(this.__stylesComp)
    }
    return styles
  }
  private __stylesBase: StylesComponent = (layers = "fishtvue", css = "", root = "") => `
  @layer ${layers};
  @layer fishtvue {
    ${root}
    ${css}
  }
`
  private __root = () => `:root {
  --theme: ${this.__globalTheme?.semantic?.customThemeColor};
  --theme-contrast: ${this.__globalTheme?.semantic?.customThemeColorContrast};
}`

  private __setStyle(stylesComp: StylesComponent): void {
    if (this.scopeId) {
      this.__CSS = this.__CSS.sort((a, b) => {
        const isMediaA = a.trim().includes("@media")
        const isMediaB = b.trim().includes("@media")
        if (isMediaA && !isMediaB) return 1
        if (!isMediaA && isMediaB) return -1
        return 0
      })
      const css = minifyCSS(
        stylesComp(this.__globalOptionsTheme?.layers ?? "fishtvue", this.__CSS.join("\n"), this.__root())
      )
      const style = useStyle(css, { name: this.name })
      if (style.isLoaded) listComponents.add(this.name)
    }
  }
}
