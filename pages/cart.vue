<template>
  <div class="bg-gradient-to-b from-[#C5E5FD] to-[#fff]">
    <Navbar />
    <div class="p-8">
      <div class="flex flex-col gap-[24px] mt-[120px] flex-wrap">
        <p class="font-bold text-[40px]">Shoping Cart</p>
        <div v-if="store.Products.length > 0" class="flex gap-[24px] flex-wrap">
          <div class="flex flex-col gap-[24px] basis-2/3">
            <div
              v-for="product in store.Products"
              class="flex gap-[24px] w-full bg-[#FFF] p-2 rounded-[4px] flex-wrap md:flex-nowrap"
            >
              <div
                class="flex md:w-[288px] md:h-[162px] justify-center items-center bg-gray-300 border-x-2 border-t-2 rounded-[8px] rounded-b-none"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-fit h-fit"
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
                <div class="flex justify-between">
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
            <button class="bg-primary p-[12px] text-white font-bold">
              Checkout
            </button>
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/store/Product";
import { formatIDR } from "~/utils/ConvertNumber";
import { formatToUSD } from "~/utils/convertToUsd";

const store = useProductStore();
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
</script>
