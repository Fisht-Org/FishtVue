<script setup lang="ts">
  import HelloWorld from "./components/HelloWorld.vue"
  import FixWindow from "fishtvue/fixwindow/FixWindow.vue"
  import { onMounted, ref } from "vue"
  import { palette } from "fishtvue/theme"
  import Badge from "fishtvue/badge/Badge.vue"

  console.log(palette("#10b981"))
  // console.log(palette("{blue}"))
  onMounted(() => {
    // console.log(my.value.red)
  })
  const isVisible = ref(false)

  function switchVisible() {
    isVisible.value = !isVisible.value
  }

  onMounted(() => {
    setTimeout(() => (isVisible.value = true), 1000)
  })

  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)")

  darkModePreference.addEventListener("change", (e) => {
    updateStyle(!e.matches)
  })

  function updateStyle(val) {
    switchTheme.value = val
  }

  const mycolor = ref("#1b10b9")
  const switchTheme = ref(!window.matchMedia("(prefers-color-scheme: dark)").matches)
</script>

<template>
  <div :class="switchTheme ? 'light-theme' : 'dark-theme'">
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" style="display: inline-flex">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      <FixWindow
        :model-value="true"
        class="font-istok"
        :styles="{
          light: { body: { color: '#f00' } }
        }"
        >Vue
      </FixWindow>
    </a>
    <a v-if="isVisible" href="https://vuejs.org/" target="_blank" style="display: inline-flex">
      <img src="./assets/fisht.svg" class="logo vue" alt="Fisht logo" />
      <FixWindow mode="filled" :model-value="true" class="font-istok"> Fisht</FixWindow>
    </a>
  </div>
  <HelloWorld :msg="isVisible ? 'Vite + Vue + Fisht' : 'Vite + Vue'" />
  <button type="button" @click="switchVisible">isVisible</button>
  <button type="button" @click="updateStyle(!switchTheme)">Update style</button>
  <div style="display: flex">
    <Badge point>Test</Badge>
  </div>
  <div class="parent-block">
    <div
      v-for="(color, item) of palette(mycolor)"
      :key="color + item"
      class="block bg-red-400 bg1-yellow-400 bg2-green-400"
      :style="`background-color: ${color}`">
      {{ item }}
    </div>
  </div>
  <input v-model="mycolor" type="color" />
  <p>Test</p>
  <div style="height: 25rem">/</div>
  <!--  <p>Текст должен быть красным</p>-->
</template>

<style lang="scss">
  @layer theme, state;

  @layer state {
    p {
      background-color: rgb(248 113 113);
    }
  }

  @layer theme {
    p {
      background-color: rgb(113, 248, 223);
    }
  }

  p {
    border-radius: 5px;
    //background-color: rgb(248, 246, 113);
  }

  .parent-block {
    margin: 5px;
    display: flex;
    gap: 5px;
    .bg-red-400 {
      background-color: rgb(248 113 113);
    }
  }

  .block {
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #6e6e6e;
    color: #d7d7d7;
  }

  .bg1-yellow-400 {
    background-color: rgb(248, 246, 113);
  }

  .bg2-green-400 {
    background-color: rgba(67, 182, 130);
  }

  @import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@700&display=swap");

  //p {
  //  color: v-bind("theme.color");
  //}

  :deep(.font-istok) {
    font-size: 1.5rem;
    line-height: 2rem;
    //font-family: "Istok Web", sans-serif;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
