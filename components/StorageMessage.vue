<template>
  <div>
    <button v-if="!showMessage" @click="showMessage = true" class="show-info-button">Show Info</button>
    <transition name="fade">
      <div v-if="showMessage" class="storage-message">
        <p class="storage-message__text">This Application uses the browser's Local Storage to store data</p>
        <Icon name="mdi:close-thick" class="storage-message__icon" @click="showMessage = false" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showMessage = ref(true);
</script>


<style lang="scss" scoped>
.show-info-button {
  position: absolute;
  bottom: 25px;
  right: 25px;
  background-color: #23558b;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s;

  &:hover {
    background-color: #14304d;
  }
}

.storage-message {
  background-color: #14304d;
  padding: 8px 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  position: fixed;
  bottom: 25px;
  right: 25px;
  border-radius: 25px;
  gap: 12px;

  &__text {
    color: white;
    font-size: 1rem;
  }

  &__icon {
    position: relative;
    right: -13px;
    color: white;
    font-size: 1rem;
    background-color: black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      transition: all 0.2s;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0;
}
</style>