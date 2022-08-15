<script setup lang="ts">
defineProps<{
  modelValue?: string
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event): void {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="select">
    <span class="select__label">{{ label }}</span>
    <div class="select__wrapper">
      <select class="select__element" :value="modelValue" @input="onInput">
        <slot />
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="select__icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </label>
</template>

<style lang="scss">
.select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &__element {
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-primary-900);
    padding: var(--spacing-md);
    width: 100%;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }
  }

  &__wrapper {
    position: relative;
  }

  &__icon {
    position: absolute;
    right: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    aspect-ratio: 1;
  }
}
</style>
