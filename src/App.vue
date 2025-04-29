<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="font-sans min-h-screen bg-gray-100">
    <RouterView />
  </div>
</template>

<style>
/* Tambahan global style opsional */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
