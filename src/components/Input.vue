<script setup lang="ts">
defineProps<{
  modelValue?: string
  label: string
  max?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event): void {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="input">
    <span class="input__label">{{ label }}</span>
    <input
      class="input__element"
      :value="modelValue"
      @input="onInput"
      type="text"
    />
  </label>
</template>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &__element {
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-primary-900);
    padding: var(--spacing-md);
  }
}
</style>
