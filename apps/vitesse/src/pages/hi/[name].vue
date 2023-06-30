<script setup lang="ts">
const props = defineProps<{ name: string }>();
const router = useRouter();
</script>

<template>
  <div>
    <div class="i-carbon-pedestrian inline-block text-4xl" />
    <p>Hi, {{ props.name }}</p>
    <p class="text-sm op50">
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">Back</button>
    </div>
  </div>
</template>
