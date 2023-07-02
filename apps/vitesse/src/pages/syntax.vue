<script setup lang="ts">
const text = ref('1');
const dynamic = ref<any>();

function inc(newVal: number) {
  text.value = String(newVal + 1);
  console.log(dynamic.value?.focus?.());
}
</script>

<template>
  <TheDynamic :ref="dynamic" :text="text" size="large" class="mt-10" @change="inc">
    <span>default</span>
    <template #item>item</template>
  </TheDynamic>
</template>
