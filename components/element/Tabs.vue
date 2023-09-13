<template>
  <div>
    <div class="flex w-fit gap-[12px] justify-center items-center list-none">
      <div
        id="tab"
        v-if="!includesText"
        v-for="(tab, index) in prop.tabs"
        :key="index"
        @click="activeTab = tab"
        :class="activeTab === tab ? 'active' : 'not-active'"
      >
        <div class="flex gap-[24px]">
          <span
            v-if="prop.tabs.includes('Green')"
            class="w-[20px] h-[20px] flex rounded-full bg-[green]"
          ></span>
          {{ tab }}
        </div>
      </div>
      <div
        v-else
        id="content"
        v-for="(tab, index) in tabs"
        :key="tab"
        @click="
          () => {
            (activeTab = tab), $emit('change', prop.tabs[index]);
          }
        "
        :class="activeTab === tab ? 'active' : 'not-active'"
      >
        <img :src="tab" alt="gambar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const prop = defineProps<{
  tabs: string[];
}>();
const includesText = prop.tabs.some((item) =>
  item.includes("jpg" || "/assets" || "/src")
);
const activeTab = ref(prop.tabs[0]);
</script>

<style scoped>
img {
  width: 120px;
  height: 120px;
  background-color: #f9fafb;
  object-fit: contain;
  cursor: pointer;
}
.active {
  border: 3px solid #28a0f6;
}
.not-active {
  background-color: rgb(209 213 219) !important;
}
#content {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
}
#tab {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  width: max-content;
  border-radius: 8px;
  font-weight: 600;
}
</style>
