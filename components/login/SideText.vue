<template>
  <div class="w-[640px] p-8 flex flex-col items-center justify-center">
    <p class="font-semibold mb-[12px] text-[#101828] text-center text-[30px]">
      We’ve been using Morpheme to kick start every new project and can’t
      imagine working without it.
    </p>
    <VAvatar
      src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/09/09/r8sWEB0/karakter-raiden-shogun-di-genshin-impact-dibully-komunitas-gara-gara-tak-bisa-masak96.jpg"
      alt="John Doe"
      size="xl"
      class="mb-[12px]"
    />
    <p class="font-bold">Raiden Shogun</p>
    <p class="mb-[12px]">Head of Inazuma</p>
    <VRating v-model:rating="rating" class="mt-[16px]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rating = ref(5);
</script>
