<template>
  <div>
    <div class="flex w-fit gap-[12px] justify-center items-center list-none">
      <div v-if="!includesText" class="content flex gap-[12px] flex-wrap">
        <div
          id="tab"
          v-for="(tab, index) in prop.tabs"
          :key="index"
          @click="activeTab = tab"
          :class="activeTab === tab ? 'active' : 'not-active'"
        >
          <div class="flex w-full text-center gap-[24px] flex-wrap">
            <span
              v-if="prop.tabs.includes('Green')"
              class="w-[22px] h-[20px] flex rounded-full bg-[green]"
            ></span>
            {{ tab }} 
          </div>
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
import { ref } from "vue";
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
  width: 100%;
  height: 100%;
  background-color: #f9fafb;
  object-fit: cover;
  cursor: pointer;
}

.content {
  flex-wrap: wrap;
}
.active {
  border: 3px solid #28a0f6;
}

#content {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  width: 132px;
  height: 124px;
  border-radius: 8px;
}
@media screen and (max-width: 450px) {
  #content {
    width: fit-content;
    height: fit-content;
  }
}

#tab {
  cursor: pointer;
  background-color: #f9fafb;
  padding: 12px;
  width: max-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 8px;
  font-weight: 600;
}
</style>
