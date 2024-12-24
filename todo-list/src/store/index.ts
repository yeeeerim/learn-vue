import { createStore } from "vuex";

const store = createStore({
  state: {
    todoList: [
      {
        id: Math.random().toString(36).substring(2, 16),
        title: "Learn Vue 3",
        body: "Vue 3 is the latest version of Vue",
        completed: true,
      },
      {
        id: Math.random().toString(36).substring(2, 16),
        title: "Learn Vuex 4",
        body: "Vuex is the state management library for Vue",
        completed: false,
      },
      {
        id: Math.random().toString(36).substring(2, 16),
        title: "Learn Vue Router 4",
        body: "Vue Router is the official router for Vue",
        completed: false,
      },
    ],
  },
  getters: {},
  mutations: {
    addTodo: (state, todo) => {
      state.todoList.push(todo);
    },
    deleteTodo: (state, id) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, todo) => {
      const index = state.todoList.findIndex((t) => t.id === todo.id);
      state.todoList[index] = todo;
    },
  },
  actions: {},
  modules: {},
});

export default store;
