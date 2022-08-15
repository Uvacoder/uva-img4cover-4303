<script setup lang="ts">
import { ref } from 'vue'
import Stack from './components/Stack.vue'
import Preview from './components/Preview.vue'
import Config from './components/Config.vue'
import { useStore } from './store'
import { toPng } from 'html-to-image'

const el = ref(null)
const store = useStore()

const kebabCase = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

function downloadImage() {
  const el = document.querySelector('.preview') as HTMLElement
  if (!el) return
  toPng(el, {
    canvasHeight: 630 * 1.5,
    canvasWidth: 1200 * 1.5,
  })
    .then(dataUrl => {
      const link = document.createElement('a')
      link.download = kebabCase(store.title)
      link.href = dataUrl
      link.click()
    })
    .catch(console.error)
}
</script>

<template>
  <Stack gap="var(--spacing-lg)">
    <Preview />
    <Config />
    <button @click="downloadImage">Download</button>
  </Stack>
</template>

<style lang="scss">
button {
  color: var(--color-primary-50);
  padding: var(--spacing-md);
}
</style>
