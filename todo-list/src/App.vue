<template>
  <router-view></router-view>
</template>

<script lang="ts"></script>

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
