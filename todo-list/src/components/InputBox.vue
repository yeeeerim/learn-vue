<template>
  <section class="inputBox">
    <div class="topBox"></div>

    <div class="bodyBox">
      <div class="inputBoxTitle">
        <p class="mainTitle roboto">Title</p>
        <input v-model="title" type="text" placeholder="제목" />
      </div>
      <div class="inputBoxContent">
        <p class="miniTitle roboto">Content</p>
        <textarea
          class="inputTextArea poor"
          v-model="body"
          placeholder="내용"
        ></textarea>
      </div>
      <div class="btnBox">
        <button @click="onSubmitHandler()">+</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import store from "@/store/store";

const title = ref("");
const body = ref("");

const onSubmitHandler = () => {
  if (!title.value) {
    alert("Please enter a title");
    return;
  } else {
    const newTodo = {
      id: Math.random().toString(36).substring(2, 16),
      title: title.value,
      body: body.value,
      completed: false,
    };

    store.commit("addTodo", newTodo);

    title.value = "";
    body.value = "";
  }
};
</script>

<style lang="css">
@import "../styles/style.css";
</style>
