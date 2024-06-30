import type { Plugin } from "vue"
import { Locale, StyleMode } from "../types"

import { FixWindowOption } from "fishtvue/fixwindow"

export declare function useFishtVue(): {
  config: FishtVueConfiguration
}

declare const plugin: Plugin
export default plugin

declare module "vue/types/vue" {
  interface Vue {
    $fishtVue: {
      config: FishtVueConfiguration
    }
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $fishtVue: {
      config: FishtVueConfiguration
    }
  }
}

export declare interface FishtVueConfiguration {
  inputStyle?: StyleMode
  zIndex?: Partial<ZIndexOptions>
  locale?: Record<string | "en", Partial<DefaultLocale>>
  theme?: any
  componentsOptions?: ComponentsOptions
}
type ZIndexOptions = {
  modal: number
  overlay: number
  menu: number
  tooltip: number
}
type ComponentsOptions = {
  fixWindow: FixWindowOption
}
interface DefaultLocale extends Locale {
  startsWith: string
  contains: string
  notContains: string
  endsWith: string
  equals: string
  notEquals: string
  noFilter: string
  lt: string
  lte: string
  gt: string
  gte: string
  dateIs: string
  dateIsNot: string
  dateBefore: string
  dateAfter: string
  clear: string
  apply: string
  matchAll: string
  matchAny: string
  addRule: string
  removeRule: string
  accept: string
  reject: string
  choose: string
  upload: string
  cancel: string
  completed: string
  pending: string
  fileSizeTypes: string[]
  dayNames: string[]
  dayNamesShort: string[]
  dayNamesMin: string[]
  monthNames: string[]
  monthNamesShort: string[]
  chooseYear: string
  chooseMonth: string
  chooseDate: string
  prevDecade: string
  nextDecade: string
  prevYear: string
  nextYear: string
  prevMonth: string
  nextMonth: string
  prevHour: string
  nextHour: string
  prevMinute: string
  nextMinute: string
  prevSecond: string
  nextSecond: string
  am: string
  pm: string
  today: string
  weekHeader: string
  dateFormat: string
  weak: string
  medium: string
  strong: string
  passwordPrompt: string
  searchMessage: string
  selectionMessage: string
  emptySelectionMessage: string
  emptySearchMessage: string
  emptyMessage: string
  aria: {
    trueLabel: string
    falseLabel: string
    nullLabel: string
    star: string
    stars: string
    selectAll: string
    unselectAll: string
    close: string
    previous: string
    next: string
    navigation: string
    scrollTop: string
    moveTop: string
    moveUp: string
    moveDown: string
    moveBottom: string
    moveToTarget: string
    moveToSource: string
    moveAllToTarget: string
    moveAllToSource: string
    pageLabel: string
    firstPageLabel: string
    lastPageLabel: string
    nextPageLabel: string
    prevPageLabel: string
    rowsPerPageLabel: string
    jumpToPageDropdownLabel: string
    jumpToPageInputLabel: string
    selectRow: string
    unselectRow: string
    expandRow: string
    collapseRow: string
    showFilterMenu: string
    hideFilterMenu: string
    filterOperator: string
    filterConstraint: string
    editRow: string
    saveEdit: string
    cancelEdit: string
    listView: string
    gridView: string
    slide: string
    slideNumber: string
    zoomImage: string
    zoomIn: string
    zoomOut: string
    rotateRight: string
    rotateLeft: string
  }
}
