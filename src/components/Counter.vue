<template>
  <h1>Count: {{ store.count }}</h1>
  <button class="counter" @click="store.increment()">Increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
</script>

<style>
.counter {
  @apply px-6 py-2 bg-primary-100 font-medium text-sm hover:bg-indigo-600 text-primary-10 rounded;
}
</style>
