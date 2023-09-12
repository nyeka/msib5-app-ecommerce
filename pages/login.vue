<template>
  <div class="flex justify-between flex-wrap">
    <div
      v-if="screenWidth > 768"
      class="bg-[#F9FAFB] basis-1/2 h-[100vh] flex items-center"
    >
      <LoginSideText />
    </div>
    <div
      class="bg-[#fff] p-4 h-[100vh] flex justify-center basis-1/2 items-center"
    >
      <Login />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetScreenSize } from "~/composables/useGetScreen";
const { screenWidth } = useGetScreenSize();

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
</script>
