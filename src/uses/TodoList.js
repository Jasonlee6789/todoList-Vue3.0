import { reactive } from "vue";
function useTodoList() {
  let id = 4;
  let todos = reactive([
    { id: 1, title: "任务一", completed: false },
    { id: 2, title: "任务二", completed: true },
    { id: 3, title: "任务三", completed: false },
  ]);
  return {
    todos,
  };
}
export default useTodoList;
