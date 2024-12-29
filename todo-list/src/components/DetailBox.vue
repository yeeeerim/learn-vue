<template>
  <section class="detailBox">
    <div class="topBox">
      <span class="btn redOne"></span>
      <span class="btn yellowOne"></span>
      <span class="todoIdInfo">{{ todo.id }}</span>
    </div>
    <div class="listContent">
      <div class="conWrap">
        <p class="conStatus statusW" v-if="todo.completed == false">Working</p>
        <p class="conStatus statusD" v-if="todo.completed == true">Done</p>
        <p class="conTitle poor">{{ todo.title }}</p>
      </div>
      <p class="conContent poor">{{ todo.body }}</p>
    </div>
    <div class="btnBox">
      <Button @click="$router.push(`/`)">🏠</Button>
    </div>
  </section>
</template>

<script setup>
import store from "@/store/store";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const todo = ref({});
const route = useRoute();

onMounted(() => {
  const todoId = route.params.id;
  todo.value = store.state.todoList.find((item) => item.id === todoId);
});
</script>

<style lang="css">
@import "../styles/style.css";
</style>
