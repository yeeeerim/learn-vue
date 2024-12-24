<template lang="">
  <section>
    <div class="topBox">
      <span class="btn redOne"></span>
      <span class="btn yellowOne"></span>
      <span class="todoIdInfo">{{ todo.id }}</span>
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
      const todoId = route.params.id;
      todo.value = store.state.todos.find((todo) => todo.id === todoId);
    });

    return { todo };
  },
};
</script>
<style lang=""></style>
