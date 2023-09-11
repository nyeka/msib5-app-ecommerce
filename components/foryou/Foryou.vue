<script setup lang="ts">
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetSlide } from "@/composables/useGetSlide";
import { ProductLatest } from "../../utils/data/Product";
import { useGetScreenSize } from "../../composables/useGetScreen";
const { screenWidth } = useGetScreenSize();
import { Navigation } from "swiper/modules";
</script>

<template>
  <div class="p-8">
    <Section text="For You" />
    <div
      v-if="screenWidth > 1024"
      class="flex gap-8 flex-wrap mt-[24px] justify-between"
    >
      <div v-for="items in ProductLatest" class="flex items-center">
        <Items
          :name="items.name"
          :price="items.price"
          :image="items.image"
          :description="items.description"
          :id="items.id"
          :list-img="items.listImg"
        />
      </div>
    </div>
    <Swiper
      v-else
      :slides-per-view="useGetSlide(screenWidth)"
      :space-between="screenWidth < 376 ? 40 : 10"
      :scrollbar="{ draggable: true }"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :navigation="{
        enabled: true,
        nextEl: '.swiper-next-button',
      }"
      :modules="[Navigation]"
      backtodropdown
      class="mt-[24px]"
    >
      <SwiperSlide
        v-for="items in ProductLatest"
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
      </SwiperSlide>
      <div
        class="absolute content top-[50%] right-[0%] z-[2] bg-[#0000004D] p-[8px] rounded-[99px] text-[#fff] swiper-next-button"
      >
        <img src="~/assets/chevron.svg" alt="chevron" />
      </div>
    </Swiper>
  </div>
</template>
