<template>
  <div
    class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    @click="$emit('click')"
  >
    <img :src="song.cover" alt="cover" class="rounded-t-lg w-full h-auto object-cover" />
    <div class="p-4">
      <h3 class="font-bold text-lg">{{ song.title }}</h3>
      <p class="text-sm text-gray-600">{{ song.artist }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['song'])
</script>
