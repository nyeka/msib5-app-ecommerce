<template>
  <div class="content font-semibold">
    <Navbar />
    <div class="p-8">
      <div class="flex flex-col gap-[24px] mt-[120px] flex-wrap">
        <p class="font-bold text-[40px]">Shoping Cart</p>
        <div v-if="store.Products.length > 0" class="flex gap-[24px] flex-wrap">
          <div class="flex flex-col gap-[24px] md:basis-2/3 w-full">
            <div
              v-for="product in store.Products"
              class="flex gap-[24px] w-fit md:w-full bg-[#FFF] p-2 rounded-[4px] flex-wrap md:flex-nowrap"
            >
              <div
                class="flex md:w-[288px] md:h-[162px] justify-center items-center bg-gray-300 border-x-2 border-t-2 rounded-[8px] rounded-b-none"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-fit sm:w-[155px] object-contain"
                />
              </div>
              <div class="w-full flex-col flex justify-between py-3 px-[20px]">
                <div class="flex justify-between">
                  <div>
                    <p>{{ product.name }}</p>
                    <p class="font-normal text-[#98A2B3] text-[12px]">
                      Color Name
                    </p>
                  </div>
                  <p class="font-bold text-[20px]">
                    {{ formatToUSD(Number(product.price)) }}
                  </p>
                </div>
                <div class="flex justify-between font-normal">
                  <p>Qty: {{ product.quantity }}</p>
                  <button
                    class="text-[#B42318]"
                    @click="store.removeProduct(product.id)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-[#fff] w-full h-fit md:w-[430px] p-[20px] flex flex-col gap-[12px]"
          >
            <div class="flex justify-between">
              <p>Sub Total</p>
              <p class="font-bold text-[20px]">
                {{ formatToUSD(store.totalItemsPrice) }}
              </p>
            </div>
            <div class="font-normal text-[#98A2B3]">
              <p>Shipping And Taxes</p>
              <p>Calculated at checkout</p>
            </div>
            <div
              class="bg-primary cursor-pointer justify-center rounded px-[12px] py-[20px] text-white font-semibold flex gap-[12px]"
              @click="
                () => {
                  $router.push('/checkout');
                  store.clearItems();
                }
              "
            >
              <img src="~/assets/arrowright.svg" />
              <button>Checkout</button>
            </div>
          </div>
        </div>
        <div
          v-else
          class="font-bold text-[30px] text-center p-[32px] mt-[40px]"
        >
          Your Cart Is Empty
        </div>
      </div>
    </div>
    <FooterProductFooter />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/store/Product";
import { formatToUSD } from "~/utils/convertToUsd";

const store = useProductStore();
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<style scoped>
.content {
  background: linear-gradient(180deg, #d8eefd 14.05%, #fff 100%);
}
</style>
