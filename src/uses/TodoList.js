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
  // homework
  let filteredTodos = computed(() =>
    todos.filter((todo) => (todo = visibility.value))
  );

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

  return {
    todos,
    allDone,

    newTodo,
    addNewTodo,

    filteredTodos,

    visibility,
    changeVisibility,
  };
}
export default useTodoList;
