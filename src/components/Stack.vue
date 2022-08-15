<script setup lang="ts">
defineProps<{
  gap?: string
}>()
</script>

<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style lang="scss">
.stack {
  display: flex;
  flex-direction: column;
  gap: v-bind(gap);
}
</style>
