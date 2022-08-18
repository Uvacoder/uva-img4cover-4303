<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>

<style lang="scss">
.button {
  background-color: var(--color-primary-900);
  color: var(--color-primary-50);
  padding: var(--spacing-md);

  border: none;
  font-size: 1rem;
  font: inherit;
  border-radius: var(--border-radius);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);

  &:focus-visible {
    outline: 2px solid var(--color-primary-300);
  }

  svg {
    height: 1rem;
    aspect-ratio: 1;
  }
}
</style>
