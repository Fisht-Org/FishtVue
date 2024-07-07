import { VNode } from "vue"
import {
  ClassComponent,
  GlobalComponentConstructor,
  StyleMode,
  Position,
  ReadRef,
  RefLink,
  StyleClass,
  DeepPartial
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
  x: ReadRef<number>
  y: ReadRef<number>
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
export type FixWindowStyle = DeepPartial<
  ColorScheme<
    {
      root: {
        color: "{neutral.800}" | string
      }
    },
    {
      root: {
        color: "{neutral.300}" | string
      }
    }
  > & {
    body: {
      border: "{rounded.xs}" | string
    }
  }
>

// ---------------------------------------
declare class FixWindow extends ClassComponent<FixWindowProps, FixWindowSlots, FixWindowEmits, FixWindowExpose> {}

declare module "vue" {
  export interface GlobalComponents {
    FixWindow: GlobalComponentConstructor<FixWindow>
  }
}

export default FixWindow
