<template lang="">
  <!-- 진행중 -->
  <section class="workBox">
    <h2 class="listWrap">Working</h2>
    <ul class="list">
      <li v-for="todo in filteredWorkingTodos" :key="todo.id">
        <div class="topBox">
          <span class="btn redOne"></span>
          <span class="btn yellowOne"></span>
        </div>
        <div class="listContent poor">
          <p class="conTitle">{{ todo?.title }}</p>
          <p class="conContent">{{ todo?.body }}</p>
        </div>
        <div class="btnBox">
          <Button
            @click="$router.push({ name: 'detail', params: { id: todo.id } })"
            >🔎</Button
          >
          <Button @click="removeTodoHandler(todo)">🗑️</Button>
          <button @click="statusHandler(todo)">✅</button>
        </div>
      </li>
    </ul>
  </section>
  <!-- 완료 -->
  <section class="workBox">
    <h2 class="mainTitle">Done</h2>
    <ul class="listWrap">
      <li class="list" v-for="todo in filteredDoneTodos" :key="todo.id">
        <div class="topBox">
          <span class="btn redOne"></span>
          <span class="btn yellowOne"></span>
        </div>
        <div class="listContent poor">
          <p class="conTitle">{{ todo.title }}</p>
          <p class="conContent">{{ todo.body }}</p>
        </div>
        <div class="btnBox">
          <Button
            @click="$router.push({ name: 'detail', params: { id: todo.id } })"
            >🔎</Button
          >
          <Button @click="removeTodoHandler(todo)">🗑️</Button>
          <button @click="statusHandler(todo)">↩️</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import store from "@/store/store";
import { onMounted } from "vue";
export default {
  name: "WorkBox",

  setup() {
    onMounted(() => {
      console.log(store.state.todoList);
    });
  },
};
</script>
<style lang=""></style>
