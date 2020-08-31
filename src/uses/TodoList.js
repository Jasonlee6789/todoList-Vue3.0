import { reactive, computed, ref } from "vue";
function useTodoList() {
  let id = 4;

  let newTodo = ref("");

  let todos = reactive([
    { id: 1, title: "任务一", completed: false },
    { id: 2, title: "任务二", completed: true },
    { id: 3, title: "任务三", completed: false },
  ]);

  let allDone = computed({
    get() {
      return todos.every((todo) => todo.completed);
    },
    set(newVal) {
      todos.forEach((todo) => (todo.completed = newVal));
    },
  });

  const addNewTodo = function() {
    todos.unshift({
      id: id++,
      title: newTodo.value,
      completed: false,
    });

    newTodo.value = "";
  };

  let visibility = ref("all");
  // homework
  const changeVisibility = function(status) {
    visibility.value = status;
  };

  // homework
  let filteredTodos = computed(() => {
    switch (visibility.value) {
      default:
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  });
  // todos.filter((todo) => (todo = visibility.value))

  const removeTodo = (todo) => {
    let index = todos.findIndex((t) => t == todo);
    console.log("todo", index);
    todos.splice(index, 1);
  };
  return {
    todos,
    allDone,

    newTodo,
    addNewTodo,

    filteredTodos,

    visibility,
    changeVisibility,

    removeTodo,
  };
}
export default useTodoList;
