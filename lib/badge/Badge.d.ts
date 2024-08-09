import { ClassComponent, DeepPick, GlobalComponentConstructor, ReadRef, StyleClass } from "../types"
import { VNode } from "vue"
import { ColorScheme } from "fishtvue/theme"
// ---------------------------------------
export declare type BadgeProps = {
  mode?: "primary" | "secondary" | "outline" | "neutral"
  class?: StyleClass
  classContent?: StyleClass
  point?: boolean
  closeButton?: boolean
}
export declare type BadgeSlots = {
  default(): VNode[]
}
export declare type BadgeEmits = {
  (event: "delete"): void
}
export declare type BadgeExpose = {
  // ---PROPS-------------------------
  mode: ReadRef<BadgeProps["mode"]>
  isPoint: ReadRef<BadgeProps["point"]>
  isCloseButton: ReadRef<BadgeProps["closeButton"]>
  // ---METHODS-----------------------
  deleteBadge(): void
}
export declare type BadgeOption = Pick<BadgeProps, "mode" | "class" | "classContent" | "point" | "closeButton">

type ClassesScheme = "body" | "root"

export declare type BadgeStyle = DeepPick<ColorScheme<ClassesScheme>, "">

// ---------------------------------------
declare class Badge extends ClassComponent<BadgeProps, BadgeSlots, BadgeEmits, BadgeExpose> {}

declare module "vue" {
  export interface GlobalComponents {
    Badge: GlobalComponentConstructor<Badge>
  }
}

export default Badge
