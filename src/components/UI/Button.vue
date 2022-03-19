<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@store/user';

const store = useUserStore();
const username = ref('');
</script>

<template>
  <div>
    <div class="mb-4">
      <label class="label" for="username"> Username </label>
      <input
        class="input"
        v-model="username"
        id="username"
        type="text"
        placeholder="Username"
        @keydown.enter="store.setName(username)"
        autocomplete="off"
      />
    </div>
    <button @click="store.setName(username)">Set Name</button>
  </div>
</template>

<style>
.label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
