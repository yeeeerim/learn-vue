<template lang="">
  <section>
    <div class="topBox">
      <span class="btn redOne"></span>
      <span class="btn yellowOne"></span>
      <span class="todoIdInfo">{{ todo?.id }}</span>
    </div>
    <div>
      <div class="listContent">
        <div class="conWrap">
          <p class="conStatus statusW" v-if="todo?.isDone === false">Working</p>
          <p class="conStatus statusD" v-if="todo?.isDone === true">Done</p>
          <p class="conTitle poor">{{ todo?.title }}</p>
        </div>
        <div class="btnBox"><button @click="$router.push('/')">🏠</button></div>
      </div>
    </div>
  </section>
</template>
<script>
import store from "@/store/index";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "DetailBox",

  setup() {
    const todo = ref({});
    const route = useRoute();

    onMounted(() => {
      const todoId = route.params?.id;
      todo.value = store.state.todos?.find((todo) => todo.id === todoId);
    });

    return { todo };
  },
};
</script>
<style lang=""></style>
