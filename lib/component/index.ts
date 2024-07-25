import {
  getCurrentInstance,
  onBeforeMount as vueOnBeforeMount,
  onMounted as vueOnMounted,
  onBeforeUpdate as vueOnBeforeUpdate,
  onUpdated as vueOnUpdated,
  onBeforeUnmount as vueOnBeforeUnmount,
  onUnmounted as vueOnUnmounted
} from "vue"
import { useStyle } from "fishtvue/theme/useStyle"
import { toVarsCss } from "fishtvue/theme/themeHandler"
import { fieldsPick } from "fishtvue/utils/objectHandler"
import type { ComponentInternalInstance } from "vue"
import type { ThemeComponents } from "fishtvue/theme"
import type { ComponentsOptions, FishtVue, OptionsTheme } from "fishtvue/config"
import type { PublicFields, StylesComponent } from "./TypeComponent"

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
  private readonly __globalOptionsTheme?: OptionsTheme
  private readonly __options?: ComponentsOptions[T]
  private readonly __styles?: ThemeComponents[T]
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
    this.name = this.__instance?.type.__name as T
    this.scopeId = `data-fisht-${(this.__instance?.type as any).__hmrId}`
    this.prefix = this.__globalOptionsTheme?.prefix ? `${this.__globalOptionsTheme?.prefix}-` : ""
    this.__globalConfig = this.__instance?.appContext.config.globalProperties.$fishtVue
    this.__globalOptionsTheme = this.__globalConfig?.config?.optionsTheme
    this.__options = this.__globalConfig?.getOptions(this.name) as ComponentsOptions[T]
    this.__styles = this.__globalConfig?.getStyle(this.name) as ThemeComponents[T]
    this.__lifeCycle()
  }

  private __lifeCycle() {
    vueOnMounted(() => {
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
  public initStyle = (stylesComp: StylesComponent): void => {
    if (!listOfStyledComponents.has(this.name)) this.__setStyle(stylesComp)
  }

  private __setStyle(stylesComp: StylesComponent): void {
    const lightModeSelector = this.__globalOptionsTheme?.lightModeSelector
      ? `.${this.__globalOptionsTheme?.lightModeSelector}`
      : "@media (prefers-color-scheme: light)"
    const darkModeSelector = this.__globalOptionsTheme?.darkModeSelector
      ? `.${this.__globalOptionsTheme?.darkModeSelector}`
      : "@media (prefers-color-scheme: dark)"
    const varsCss = toVarsCss({ [this.name as string]: this.__styles } as any)
    if (this.scopeId) {
      const style = useStyle(stylesComp(this.scopeId, this.prefix, lightModeSelector, darkModeSelector, varsCss), {
        name: this.name
      })
      if (style.isLoaded) listOfStyledComponents.add(this.name)
    }
  }
}

const listOfStyledComponents = new Set<keyof ComponentsOptions | undefined>()
