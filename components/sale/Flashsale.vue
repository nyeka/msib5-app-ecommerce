<script setup lang="ts">
import { onMounted } from "vue";
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetScreenSize } from "../../composables/useGetScreen";
import { useGetSlide } from "@/composables/useGetSlide";
const { screenWidth } = useGetScreenSize();
import "swiper/css";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import { Navigation } from "swiper/modules";
import { Product } from "../../utils/data/Product";

onMounted(() => {
  register();
});
</script>

<template>
  <div class="p-8 bg-[#F9FAFB]">
    <div class="relative">
      <Section text="Flash Sale" />
      <swiper
        class="flex justify-between py-[24px] flex-wrap gap-[12px] w-full"
        :slides-per-view="useGetSlide(screenWidth)"
        :scrollbar="{ draggable: true }"
        :space-between="screenWidth < 376 ? 40 : 10"
        :navigation="{
          enabled: true,
          nextEl: '.swiper-next',
        }"
        :modules="[Navigation]"
      >
        <swiper-slide
          v-for="items in Product"
          class="flex items-center animation-slide"
        >
          <Items
            :name="items.name"
            :price="items.price"
            :image="items.image"
            :description="items.description"
            :id="items.id"
            :list-img="items.listImg"
          />
        </swiper-slide>
      </swiper>
      <div
        class="absolute content top-[50%] right-[0] z-[2] bg-[#0000004D] p-[8px] rounded-[99px] text-[#fff] swiper-next"
      >
        <img src="~/assets/chevron.svg" alt="chevron" />
      </div>
    </div>
  </div>
</template>
