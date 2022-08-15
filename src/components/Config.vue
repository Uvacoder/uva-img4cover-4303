<script setup lang="ts">
import { useStore } from '@/store'
import { toRefs } from 'vue'
import Stack from './Stack.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import Checkbox from './Checkbox.vue'

const store = useStore()
const { title, author, theme, showLogo, showPattern } = toRefs(store)
</script>

<template>
  <Stack gap="var(--spacing-md)">
    <Input label="Title" v-model="title" />
    <Input label="Author" v-model="author.name" />
    <Checkbox label="Show logo" v-model="showLogo" />
    <Checkbox label="Show background pattern" v-model="showPattern" />
    <Select label="Theme" v-model="theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </Select>
  </Stack>
</template>
