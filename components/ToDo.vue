<template>
  <div class="container flex flex-col items-center justify-center h-screen">
    <h1 class="text-white text-7xl font-medium">Vue ToDo List</h1>
    <div class="mt-5 w-[600px] transition-all duration-300">
      <TodoHeader />
      <TodoList />
      <TodoForm />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
