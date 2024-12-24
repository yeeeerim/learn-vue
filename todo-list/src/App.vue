<template>
  <router-view></router-view>
  <!-- <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
</template>

<script lang="ts">
import { useStore } from "vuex";

export default {
  name: "App",

  setup() {
    const store = useStore();

    return { store };
  },
};
// import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

// export default defineComponent({
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// });
</script>

<style lang="css">
@import "./styles/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
body {
  background-color: #f7eee4;
  color: #333;
  font-size: 14px;
}
body #app {
  width: 1200px;
  margin: 0px auto;
  padding: 25px;
}
.poor {
  font-family: "Poor Story", cursive;
}
.roboto {
  font-family: "Roboto", sans-serif;
}
</style>
