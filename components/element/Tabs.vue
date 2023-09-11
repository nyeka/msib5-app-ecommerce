<template>
  <div>
    <ul class="flex w-fit gap-[12px] justify-center items-center">
      <li
        v-if="!includesText"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        :class="activeTab === tab ? 'active' : 'not-active'"
      >
        {{ tab }}
      </li>
      <li
        v-else
        id="content"
        v-for="(tab, index) in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="activeTab === tab ? 'not-active' : 'not-active'"
      >
        <img :src="tab" alt="gambar" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const prop = defineProps<{
  tabs: string[]
}>()
const includesText = prop.tabs.some((item) => item.includes('/assets' || '/src'))
const activeTab = ref(prop.tabs[0])
</script>

<style scoped>
.active {
  border: 3px solid #28a0f6;
}
.not-active {
  background-color: rgb(209 213 219);
}
#content {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  width: fit-content;
  border-radius: 8px;
}
li {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  width: max-content;
  border-radius: 8px;
  font-weight: 600;
}
</style>
