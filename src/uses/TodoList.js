import { reactive, computed, ref } from "vue";
function useTodoList() {
  let id = 4;

  let newTodo = ref("");

  let todos = reactive([
    { id: 1, title: "任务一", completed: false },
    { id: 2, title: "任务二", completed: true },
    { id: 3, title: "任务三", completed: false },
  ]);

  let allDone = computed(() => todos.every((todo) => todo.completed));

  const addNewTodo = function() {
    todos.unshift({
      id: id++,
      title: newTodo.value,
      completed: false,
    });

    newTodo.value = "";
  };

  return {
    todos,
    allDone,
    newTodo,
    addNewTodo,
  };
}
export default useTodoList;
