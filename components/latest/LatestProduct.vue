<script setup lang="ts">
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetSlide } from "@/composables/useGetSlide";
import { useGetScreenSize } from "../../composables/useGetScreen";
const { screenWidth } = useGetScreenSize();
import { Navigation } from "swiper/modules";
import { ProductLatest } from "../../utils/data/Product";

const { data } = (await useFetch(
  "https://dummyjson.com/products?limit=10"
)) as any;
</script>

<template>
  <div class="p-8 relative">
    <Section text="Latest Product" />
    <div class="flex py-[24px]">
      <div
        class="rounded-[8px] bg-[#28A0F6] md:w-[652px] p-[32px] md:h-[494px] hidden md:block"
      >
        <p class="text-[#fff] font-normal">Discount</p>
        <p class="font-bold text-[48px] text-[#fff]">More And More</p>
        <div class="mt-[60px]">
          <p class="font-normal text-[#fff]">Up To</p>
          <span class="font-bold text-[#FCE834] text-[72px]">50%</span>
        </div>
      </div>
      <Swiper
        class="flex justify-between flex-wrap md:ml-[-50px] swiper-content"
        :slides-per-view="useGetSlide(screenWidth)"
        :space-between="screenWidth < 376 ? 40 : 10"
        :scrollbar="{ draggable: true }"
        :loop="true"
        :navigation="{
          enabled: true,
          nextEl: '.swiper-next',
          prevEl: '.swiper-button-prev',
        }"
        :modules="[Navigation]"
      >
        <swiper-slide
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
        </swiper-slide>
        <div
          class="absolute content top-[50%] right-[0%] z-[2] bg-[#0000004D] p-[8px] rounded-[99px] text-[#fff] swiper-next"
        >
          <img src="~/assets/chevron.svg" alt="chevron" />
        </div>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .swiper-content {
    margin-left: -70px;
  }
}
</style>
