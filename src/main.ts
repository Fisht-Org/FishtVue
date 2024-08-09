import { createApp } from "vue"
import "./style.css"
// @ts-ignore
import App from "./App.vue"
import FishtVue, { FishtVueConfiguration } from "fishtvue/config"

const app: App<Element> = createApp(App)
app.use<FishtVueConfiguration>(FishtVue, {
  componentsOptions: {
    FixWindow: {
      // class: "bg-red-400 py px-4 rounded"
      // delay: 100,
    }
  },
  optionsTheme: {
    prefix: "fisht",
    nameTheme: "Aurora",
    darkModeSelector: "dark-theme",
    lightModeSelector: "light-theme"
    // nameTheme: "Aurora"
  },
  theme: {
    semantic: {
      customThemeColor: 850,
      customThemeColorContrast: 60
    },
    components: {
      // FixWindow: {
      //   // body: {
      //   //   padding: ""
      //   // },
      //   root: {
      //     duration: "{duration.300}"
      //   },
      //   light: {
      //     body: {
      //       color: "{primary.500}"
      //     }
      //   },
      //   dark: {
      //     body: {
      //       color: "{primary.300}"
      //     }
      //   }
      // }
    }
  },
  locale: {
    en: {
      accept: ""
    }
  }
})
app.mount("#app")
