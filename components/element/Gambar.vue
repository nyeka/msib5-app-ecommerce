<template>
  <div>
    <Tabs :tabs="prop.images" />
  </div>
</template>

<script setup lang="ts">
import Tabs from './Tabs.vue'
const prop = defineProps<{
  images: string[]
}>()
</script>
