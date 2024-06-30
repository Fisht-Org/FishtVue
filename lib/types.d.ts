/**
 * # `FishtVue` Global Types
 */
import {
  AllowedComponentProps,
  ComponentCustomProps,
  ObjectEmitsOptions,
  VNodeProps,
  type Ref,
  type UnwrapRef
} from "vue"
/**
 * ### Defining dependent types for `ClassComponent`
 */
export declare type GlobalComponentConstructor<T> = {
  new (): T
}
declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> =
  Options extends Array<infer V>
    ? (event: V, ...args: any[]) => void
    : object extends Options
      ? (event: string, ...args: any[]) => void
      : UnionToIntersection<
          {
            [key in Event]: Options[key] extends (...args: infer Args) => any
              ? (event: key, ...args: Args) => void
              : (event: key, ...args: any[]) => void
          }[Event]
        >
export declare class ClassComponent<Props, Slots, Emits, Expose> {
  $props: Props & PublicProps
  $slots: Slots
  $emit: EmitFn<Emits>
  $expose: Expose
}
/**
 * ### Define useful alias types
 */
export declare type ReadRef<T = any> = Readonly<Ref<UnwrapRef<T>>>
export declare type Locale = { [key: string]: string | string[] | Locale }
export declare type StyleClass = string | Array<string>
export declare type TWidth = number | string | "500px" | "50rem" | "50em" | "50vw"
export declare type THeight = number | string | "500px" | "50rem" | "50em" | "50vh"
export declare type RefLink = string | HTMLElement | Element
export declare type _key = string
export declare type TLoading = boolean
export declare type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
export declare type StyleMode = "filled" | "outlined" | "underlined"
// ----declare --------------------------------------------------------------------
export declare type PositionShort =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "bottom-left"
  | "top-left"
  | "bottom-right"
  | "top-right"
export declare type Position =
  | "center"
  | "center-top"
  | "center-bottom"
  | "center-right"
  | "center-left"
  | "top"
  | "top-right"
  | "top-left"
  | "bottom"
  | "bottom-right"
  | "bottom-left"
  | "right"
  | "right-top"
  | "right-bottom"
  | "left"
  | "left-top"
  | "left-bottom"
