<script setup lang="ts">
const modelValue = defineModel();
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    class="p-(x-4 y-2) w-250px text-center bg-transparent border-(~ rounded gray-200 dark:gray-700) none active:none"
  />
</template>
