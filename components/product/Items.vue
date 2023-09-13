<template>
  <div
    class="sm:w-[224px] rounded-[8px] cursor-pointer"
    :key="props.id"
    @click="gotoDetails(props.id)"
  >
    <div
      class="flex justify-center items-center bg-gray-300 border-x-2 border-t-2 rounded-[8px] rounded-b-none h-[224px]"
    >
      <img :src="props.thumbnail" alt="botol" />
    </div>
    <div
      class="bg-[#fff] p-[24px] rounded-b-[8px] border-b-2 border-l-2 border-r-2"
    >
      <label
        class="rounded-[16px] bg-[#F2F4F7] font-semibold px-[12px] py-[4px]"
        >{{ props.category }}</label
      >
      <p class="font-normal mt-[16px] line-clamp-1">{{ props.title }}</p>
      <div class="flex justify-between mt-[8px]">
        <p class="font-bold">{{ formatToUSD(props.price) }}</p>
        <span class="font-normal text-[12px] text-[#98A2B3]">450ML</span>
      </div>
      <div class="flex gap-[12px] mt-[4px] text-[12px]">
        <p class="line-through text-[#98A2B3]">
          {{
            formatToUSD(
              calculateOriginalPrice(props.price, props.discountPercentage)
            )
          }}
        </p>
        <p class="text-[#B42318] py-[2px] px-[8px] bg-[#FEF3F2] rounded-[16px]">
          -{{ props.discountPercentage }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Iproduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  category: string;
  discountPercentage: number;
}
import { useRouter } from "vue-router";
import { formatToUSD } from "../../utils/convertToUsd";
import { calculateOriginalPrice } from "../../utils/countDiscount";
const props = defineProps<Iproduct>();
const route = useRouter();

const gotoDetails = (id: number) => {
  route.push({ path: `/products/${id}`, params: { id } });
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
