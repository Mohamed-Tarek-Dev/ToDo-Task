<template>
  <div class="bg-white p-5 h-[275px] max-h-[275px] overflow-y-scroll">
    <transition-group name="task" tag="ul" class="flex flex-col gap-[1rem] relative">
      <li :class="{ done: todo.status.done }" class="relative" v-for="todo in tasks" :key="todo.id">
        <button>
          <Icon name="mdi:check-bold"
          class="check text-xl bg-[#32a07a] text-white rounded-[50%] w-[30px] h-[30px] p-[0.2rem] cursor-pointer"
          @click="todoStore.toggleTaskStatus(todo.id)" />
        </button>
        <span class="text-xl mb-2">{{ todo.name }}</span>
        <button class="ml-auto" @click="todoStore.removeTask(todo.id)">
          <Icon name="ic:baseline-delete"
          class="delete-icon text-3xl text-[#d24e45] cursor-pointer hover:text-[#e95c52] transition-all duration-200 opacity-0" />
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
const todoStore = useTodoStore();
const { tasks } = storeToRefs(todoStore);
</script>

<style lang="scss">
ul {
  li {
    @apply overflow-hidden flex items-center gap-4 p-4 border border-[#a1a1a1] border-dotted rounded-[5px] bg-white w-full transition-all duration-300;

    &.done {
      .check {
        @apply grayscale;
      }

      span {
        @apply line-through text-[#808080];
      }
    }

    &:hover {
      .delete-icon {
        @apply opacity-100;
      }
    }
  }
}

.task-enter-active,
.task-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.task-enter-from {
  opacity: 0;
  transform: translate(20px, 20px);
  width: 100%;
}

.task-leave-to {
  opacity: 0;
  transform: translate(-20px, -20px);
  width: 100%;
}

.task-leave-active {
  position: absolute;
}
</style>
