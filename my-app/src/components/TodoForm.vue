<template>
  <form class="todo-form" @submit="submitTodo">
    <input
      class="todo-input"
      name="todo"
      v-model="todo"
      placeholder="Start typing..."
      required
    />
    <button class="todo-btn" type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    submitTodo(){
    //   event.preventDefault();
    //   console.log(this.todo)
    this.$store.commit("addTodo", this.todo);
    }
  }
};
</script>