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
    .${prefix}badge[${scope}]{${varsCss}}
    .${prefix}badge[${scope}] {
      display: inline-flex;
      align-items: center;
      margin: 0.125rem/* 2px */;
      padding-left: 0.5rem/* 8px */;
      padding-right: 0.5rem/* 8px */;
      padding-top: 0.25rem/* 4px */;
      padding-bottom: 0.25rem/* 4px */;
      font-size: 0.75rem/* 12px */;
      line-height: 1rem/* 16px */;
      font-weight: 500;
      border-radius: var(--Badge-body-rounded, 0.375rem)/* 6px */;
      background: #ff0;
      .${prefix}badge-point{
        height: 0.375rem/* 6px */;
        width: 0.375rem/* 6px */;
        margin-left: 0.25rem/* 4px */;
        margin-right: 0.25rem/* 4px */;
      }
    }
    .${prefix}badge-gap{
      column-gap: 2px;
    }
    .${prefix}badge-is-point-and-close-button{
      padding-left: 0.25rem/* 4px */;
      padding-right: 0.25rem/* 4px */;
    }
    .${prefix}badge-is-point{
      padding-left: 0.25rem/* 4px */;
    }
    .${prefix}badge-close-button{
      padding-right: 0.25rem/* 4px */;
    }
    ${lightModeSelector} {
      .${prefix}badge-primary{
        background-color: var(--${prefix}Badge-light-body-background)
      }
      .${prefix}badge-secondary{
      }
      .${prefix}badge-neutral{
      }
      .${prefix}badge-outline{
      }
      .${prefix}badge-default{
      }
    }
    ${darkModeSelector} {}
  }
`
export default styles
