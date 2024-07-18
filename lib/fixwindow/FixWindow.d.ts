import { VNode } from "vue"
import {
  ClassComponent,
  GlobalComponentConstructor,
  StyleMode,
  Position,
  ReadRef,
  RefLink,
  StyleClass,
  DeepPick
} from "../types"
import { ColorScheme } from "fishtvue/theme/TypesTheme"
// ---------------------------------------
export type FixWindowEvent = "hover" | "click" | "mousedown" | "mouseup" | "dblclick" | "contextmenu" | "none"
export declare type FixWindowProps = {
  modelValue?: boolean
  el?: RefLink
  scrollableEl?: RefLink
  position?: Position
  class?: StyleClass
  classBody?: StyleClass
  styles?: FixWindowStyle
  mode?: StyleMode
  eventOpen?: FixWindowEvent
  eventClose?: FixWindowEvent
  delay?: number | 1 | 5 | 10 | 15 | 20
  marginPx?: number | 2 | 5 | 10
  translatePx?: number | 2 | 5 | 10
  paddingWindow?: number | 2 | 5 | 10
  byCursor?: boolean
  closeButton?: boolean
}
export declare type FixWindowSlots = {
  default(): VNode[]
}
export declare type FixWindowEmits = {
  (event: "update:modelValue", isOpen: boolean): void
  (event: "open", env: MouseEvent): void
  (event: "close", env: MouseEvent): void
}
export declare type FixWindowExpose = {
  // ---STATE-------------------------
  x: ReadRef<string>
  y: ReadRef<string>
  isOpen: ReadRef<boolean>
  // ---PROPS-------------------------
  position: ReadRef<FixWindowProps["position"]>
  delay: ReadRef<FixWindowProps["delay"]>
  marginPx: ReadRef<FixWindowProps["marginPx"]>
  isCloseButton: ReadRef<FixWindowProps["closeButton"]>
  eventOpen: ReadRef<FixWindowEvent>
  eventClose: ReadRef<FixWindowEvent>
  element: ReadRef<HTMLElement>
  // ---METHODS-----------------------
  open(): void
  close(): void
  updatePosition(): void
}
export declare type FixWindowOption = Pick<
  FixWindowProps,
  | "position"
  | "class"
  | "classBody"
  | "mode"
  | "eventOpen"
  | "eventClose"
  | "delay"
  | "marginPx"
  | "translatePx"
  | "paddingWindow"
  | "byCursor"
  | "closeButton"
>
type ClassesScheme = "body" | "root"
// export declare type FixWindowStyle = DeepPartial<ColorScheme<ClassesScheme>>
export declare type FixWindowStyle = DeepPick<
  ColorScheme<ClassesScheme>,
  | "root.duration"
  | "body.padding"
  | "body.rounded"
  | "body.borderWidth"
  | "light.root.color"
  | "light.body.background"
  | "light.body.color"
  | "light.body.border"
  | "dark.root.color"
  | "dark.body.background"
  | "dark.body.color"
  | "dark.body.border"
>

// ---------------------------------------
declare class FixWindow extends ClassComponent<FixWindowProps, FixWindowSlots, FixWindowEmits, FixWindowExpose> {}

declare module "vue" {
  export interface GlobalComponents {
    FixWindow: GlobalComponentConstructor<FixWindow>
  }
}

export default FixWindow
