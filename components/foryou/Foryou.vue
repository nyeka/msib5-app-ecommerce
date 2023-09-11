<script setup lang="ts">
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetSlide } from "@/composables/useGetSlide";
import { ProductLatest } from "../../utils/data/Product";
import { useGetScreenSize } from "../../composables/useGetScreen";
const { screenWidth } = useGetScreenSize();
import { Navigation } from "swiper/modules";

const { data } = (await useFetch(
  "https://dummyjson.com/products?limit=10"
)) as any;
</script>

<template>
  <div class="p-8">
    <Section text="For You" />
    <div
      v-if="screenWidth > 1024"
      class="flex gap-8 flex-wrap mt-[24px] justify-between"
    >
      <div v-for="items in data.products" class="flex items-center">
        <Items
          :title="items.title"
          :price="items.price"
          :thumbnail="items.thumbnail"
          :description="items.description"
          :id="items.id"
          :images="items.images"
          :category="items.category"
          :discountPercentage="items.discountPercentage"
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
        v-for="items in data.products"
        class="flex items-center animation-slide"
      >
        <Items
          :title="items.title"
          :price="items.price"
          :thumbnail="items.thumbnail"
          :description="items.description"
          :id="items.id"
          :images="items.images"
          :category="items.category"
          :discountPercentage="items.discountPercentage"
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
