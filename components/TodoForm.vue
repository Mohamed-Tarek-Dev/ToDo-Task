<template>
  <div class="bg-[#e8e8e8] w-full p-6">
    <form class="relative">
      <input type="text" placeholder="New Task" v-model.trim="newTask" />
      <button type="submit" @click.prevent="handleAddTask">
        <Icon name="mdi:plus" class="icon" />
      </button>
    </form>
  </div>
</template>

<script setup>
const todoStore = useTodoStore();
const newTask = ref("");

const handleAddTask = () => {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value);
    newTask.value = "";
  }
};
</script>

<style lang="scss" scoped>
form {
  input {
    @apply p-4 rounded-[30px] text-[#266eb8] font-medium outline-none border-[3px] border-[#266eb8] w-full;

    &::placeholder {
      @apply font-medium;
    }
  }

  .icon {
    @apply absolute top-[50%] right-[1.2rem] translate-y-[-50%] text-white cursor-pointer bg-[#266eb8] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center transition-all ease-in-out duration-200;

    &:hover,
    &:focus {
      @apply bg-[#1e5a9c];
    }
  }
}
</style>
