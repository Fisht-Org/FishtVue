<script setup lang="ts">
  import { computed } from "vue"
  // import Button from "fishtvue/button"
  import { XMarkIcon } from "@heroicons/vue/20/solid"
  import type { BadgeProps, BadgeEmits, BadgeExpose } from "./Badge"
  import { cn } from "fishtvue/utils/tailwindHandler"
  import stylesComp from "./styles"
  import Component from "fishtvue/component"
  // ---BASE-COMPONENT----------------------
  const Badge = new Component<"Badge">()
  Badge.initStyle(stylesComp)
  const options = Badge.getOptions()
  const prefix = Badge.getPrefix()
  // ---PROPS-EMITS-SLOTS-------------------
  const props = defineProps<BadgeProps>()
  const emit = defineEmits<BadgeEmits>()
  // ---PROPS-------------------------------
  const mode = computed<NonNullable<BadgeProps["mode"]>>(() => props.mode ?? options?.mode ?? "primary")
  const isPoint = computed<NonNullable<BadgeProps["point"]>>(() => props.point ?? options?.point ?? false)
  const isCloseButton = computed<NonNullable<BadgeProps["closeButton"]>>(
    () => props.closeButton ?? options?.closeButton ?? false
  )
  const modeStyle = computed<string>(() => {
    if (mode.value === "primary") {
      return `${prefix}badge-primary bg-theme-600 text-theme-100 dark:bg-theme-700 dark:text-theme-100`
    } else if (mode.value === "secondary") {
      return "bg-theme-100 text-theme-900 dark:bg-theme-950 dark:text-theme-100"
    } else if (mode.value === "neutral") {
      return "ring-1 ring-inset"
    } else if (mode.value === "outline") {
      if (!isPoint.value && !isCloseButton.value) {
        return "ring-1 ring-inset bg-theme-50 dark:bg-theme-900 text-theme-600 dark:text-theme-400 ring-theme-500/10"
      } else {
        return "ring-1 ring-inset text-neutral-600 dark:text-neutral-200 ring-neutral-500/30"
      }
    }
    return ""
  })
  const classBadgeContent = computed(() => {
    const arrayClasses = []
    !(mode.value === "primary") || arrayClasses.push("fill-theme-100 dark:fill-theme-300")
    !(mode.value === "secondary") || arrayClasses.push("fill-theme-600 dark:fill-theme-300")
    !(mode.value === "outline") || arrayClasses.push("fill-theme-500 dark:fill-theme-600")
    !(mode.value === "neutral") || arrayClasses.push(props.classContent)
    return arrayClasses
  })
  // ---EXPOSE------------------------------
  defineExpose<BadgeExpose>({
    // ---PROPS-------------------------
    mode,
    isPoint,
    isCloseButton,
    // ---METHODS-----------------------
    deleteBadge
  })

  // ---METHODS-----------------------------
  function deleteBadge() {
    emit("delete")
  }
</script>

<template>
  <div
    :class="
      cn(
        `${prefix}badge`,
        (isPoint || isCloseButton) && `${prefix}badge-gap`,
        isPoint && isCloseButton
          ? `${prefix}badge-is-point-and-close-button`
          : isPoint && !isCloseButton
            ? `${prefix}badge-is-point`
            : !isPoint && isCloseButton
              ? `${prefix}badge-close-button`
              : '',
        modeStyle,
        props.class
      )
    ">
    <svg v-if="isPoint" :class="cn(`${prefix}badge-point`, classBadgeContent)" viewBox="0 0 6 6" aria-hidden="true">
      <circle cx="3" cy="3" r="3"></circle>
    </svg>
    <slot />
    <Button v-if="isCloseButton" mode="ghost" class="m-0 rounded-[5px] h-4 w-4 px-0" @click="deleteBadge">
      <XMarkIcon aria-hidden="true" :class="cn('h-4 w-4', classBadgeContent)" />
    </Button>
  </div>
</template>
<style></style>
