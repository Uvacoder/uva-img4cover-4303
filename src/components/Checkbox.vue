<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/solid'

const props = defineProps<{
  modelValue: boolean
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const checked = ref(props.modelValue)

function onInput(event: Event): void {
  emit('update:modelValue', checked.value)
}
</script>

<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      v-model="checked"
      @change="onInput"
      type="checkbox"
    />
    <div class="checkbox__element">
      <CheckIcon />
    </div>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss">
.checkbox {
  --size: 1.1rem;
  display: flex;
  align-items: center;

  &__input {
    appearance: none;
    margin: 0;
    width: 0px;
    height: 0px;

    &:checked + .checkbox__element {
      background-color: var(--color-primary-900);
    }

    &:focus-visible + .checkbox__element {
      outline: 2px solid var(--color-primary-500);
    }
  }

  &__element {
    display: inline-grid;
    place-items: center;
    margin-right: var(--spacing-sm);

    width: var(--size);
    aspect-ratio: 1;
    border: 1px solid var(--color-primary-900);
    border-radius: var(--border-radius-sm);
    color: var(--color-primary-50);
  }
}
</style>
