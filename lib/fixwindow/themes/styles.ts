const styles: string = `
  .fix-window {
    position: fixed;
    left: 0;
    top: 0;

    .fix-window-body {
      display: flex;
      align-items: center;
      padding: v-bind("styles?.body?.padding");
      border-radius: v-bind("styles?.body?.rounded");
      border-width: v-bind("styles?.body?.borderWidth");
      border-style: solid;
    }
  }

  @media (prefers-color-scheme: light) {
    .fix-window {
      color: v-bind("styles?.light?.root?.color");

      .fix-window-body {
        background-color: v-bind("styles?.light?.body?.background");
        color: v-bind("styles?.light?.body?.color");
        border-color: v-bind("styles?.light?.body?.border");
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .fix-window {
      color: v-bind("styles?.dark?.root?.color");

      .fix-window-body {
        background-color: v-bind("styles?.dark?.body?.background");
        color: v-bind("styles?.dark?.body?.color");
        border-color: v-bind("styles?.dark?.body?.border");
      }
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: v-bind("styles?.root?.duration");
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
`
export default styles
