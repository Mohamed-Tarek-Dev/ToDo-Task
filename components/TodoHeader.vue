<template>
  <header class="header bg-[#e8e8e8] flex justify-end p-4">
    <div class="flex gap-4">
      <div class="header__tasks">
        <span class="header__tasks--title">Tasks</span>
        <span class="header__tasks--count">{{
          todoStore.totalTasksCount
        }}</span>
      </div>

      <div class="header__done">
        <span class="header__done--title">Tasks</span>
        <span class="header__done--count">{{ todoStore.doneTasksCount }}</span>
      </div>

      <button
        class="delete-done"
        @click="todoStore.removeDoneTasks"
        v-if="todoStore.doneTasksCount"
      >
        <Icon name="ic:baseline-delete" class="icon" />
        <span>Tasks Done</span>
      </button>

      <button class="delete-all" @click="todoStore.removeAllTasks">
        <Icon name="ic:baseline-delete" class="icon" />
        <span>Tasks</span>
      </button>
    </div>
  </header>
</template>

<script setup>
const todoStore = useTodoStore();
</script>

<style lang="scss" scoped>
.header__tasks,
.header__done {
  @apply text-[#fff] bg-[#266eb8] py-[0.2rem] px-[0.8rem] rounded-[25px] flex gap-1 items-center;

  &--title {
    @apply font-medium;
  }

  &--count {
    @apply bg-white text-[#266eb8] rounded-[50%] w-[20px] h-[20px] flex justify-center items-center font-medium;
  }
}

.delete-done,
.delete-all {
  @apply flex items-center gap-1 bg-[#e95c52] text-white py-1 px-2 cursor-pointer transition ease-in;

  &:hover,
  &:focus {
    @apply bg-[#d24e45];
  }
  .icon {
    @apply text-2xl;
  }
  span {
    @apply font-medium;
  }
}
</style>
