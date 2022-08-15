<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const checked = ref(props.modelValue)
</script>

<template>
  <label class="checkbox">
    <input
      class="checkbox__element"
      v-model="checked"
      @change="ev => emit('update:modelValue', checked)"
      type="checkbox"
    />
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss">
.checkbox {
  display: flex;
  align-items: start;
  gap: var(--spacing-sm);

  &__element {
    position: relative;
    appearance: none;
    margin: 0;
    width: 1.2rem;
    aspect-ratio: 1;
    border: 1px solid var(--color-primary-900);
    border-radius: var(--border-radius-sm);
    color: var(--color-primary-50);

    &:checked {
      background-color: var(--color-primary-900);
    }

    &:after {
      content: '✓';
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
    }
  }
}
</style>
