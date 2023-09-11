<template>
  <div>
    <Tabs :tabs="data" />
  </div>
</template>

<script setup lang="ts">
import Tabs from './Tabs.vue'
const data = ['S', 'M', 'L', 'XL']
</script>
