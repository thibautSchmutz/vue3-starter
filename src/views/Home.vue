<script setup lang="ts">
import Button from '@components/UI/Button.vue';
import { useUserStore } from '@store/user';
const user = useUserStore();
</script>

<template>
  <h1>Accueil</h1>
  <p v-if="user.name">{{ user.name }}</p>
  <Button />
</template>

<style></style>
