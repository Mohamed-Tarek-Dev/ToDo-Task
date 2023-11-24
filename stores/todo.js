export const useTodoStore = defineStore("todo", () => {
  // States
  const tasks = ref([]);

  // Getters
  const getTasks = computed(() => tasks.value);
  const totalTasksCount = computed(() => tasks.value.length);
  const doneTasksCount = computed(
    () => tasks.value.filter((task) => task.status.done).length
  );

  // Actions
  let lastId = 0;
  const addTask = (name) => {
    lastId++;
    const newTask = {
      id: lastId,
      name,
      status: { done: false },
    };
    tasks.value.push(newTask);
    persistTasks();
  };

  const removeTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    persistTasks();
  };

  const removeAllTasks = () => {
    tasks.value = [];
    persistTasks();
  };

  const removeDoneTasks = () => {
    tasks.value = tasks.value.filter((task) => !task.status.done);
    persistTasks();
  };

  const toggleTaskStatus = (id) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) {
      task.status.done = !task.status.done;
      persistTasks();
    }
  };

  const persistTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  const initializeTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks);
    }
  };

  initializeTasks();

  return {
    tasks,
    getTasks,
    addTask,
    removeTask,
    removeAllTasks,
    removeDoneTasks,
    toggleTaskStatus,
    totalTasksCount,
    doneTasksCount,
  };
});
