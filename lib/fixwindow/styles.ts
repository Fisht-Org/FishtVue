import type { StylesComponent } from "fishtvue/component/TypeComponent"

const styles: StylesComponent = (
  scope = "",
  prefix = "",
  lightModeSelector = "",
  darkModeSelector = "",
  varsCss = "",
  layers = "fishtvue"
) => `
  @layer ${layers};
  @layer fishtvue {
    .${prefix}fix-window[${scope}]{${varsCss}}
    .${prefix}fix-window[${scope}] {
      position: fixed;
      left: 0;
      top: 0;

      .${prefix}fix-window-body {
        display: flex;
        align-items: center;
        padding: var(--FixWindow-body-padding, 0 1rem 0 1rem);
        border-radius: var(--FixWindow-body-rounded, 0.25rem);
        border-width: var(--FixWindow-body-borderWidth, 1px);
        border-style: solid;
      }
    }

    ${lightModeSelector} {
      .${prefix}fix-window[${scope}] {
        color: var(--FixWindow-light-root-color, #262626);

        .${prefix}fix-window-body {
          background-color: var(--FixWindow-light-body-background, #f5f5f4);
          color: var(--FixWindow-light-body-color, #52525b);
          border-color: var(--FixWindow-light-body-border, #e5e5e5);
        }
      }
    }

    ${darkModeSelector} {
      .${prefix}fix-window[${scope}] {
        color: var(--FixWindow-dark-root-color, #d4d4d4);

        .${prefix}fix-window-body {
          background-color: var(--FixWindow-dark-body-background, #1c1917);
          color: var(--FixWindow-dark-body-color, #a1a1aa);
          border-color: var(--FixWindow-dark-body-border, #171717);
        }
    }

    .v-enter-active[${scope}],
    .v-leave-active[${scope}] {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: var(--FixWindow-root-duration, 250ms);
    }

    .v-enter-from[${scope}],
    .v-leave-to[${scope}] {
      opacity: 0;
    }
  }
`

export default styles
