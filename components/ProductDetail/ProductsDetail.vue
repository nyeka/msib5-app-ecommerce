<template>
  <div class="flex flex-col content">
    <Navbar />
    <div v-if="data.title" class="container p-8">
      <div class="mt-[120px] flex flex-col gap-[32px]">
        <div>
          <div class="flex justify-between items-center">
            <button
              class="text-[#000] border-2 border-[#D0D5DD] flex justify-center rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
              @click="$router.back()"
            >
              Back
            </button>
            <p class="font-bold text-[16px] md:text-[34px]">Product Detail</p>
            <button
              class="text-[#fff] bg-[#0984DD] flex justify-center rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
              @click="
                addProduct({
                  id: data?.id,
                  name: data?.title,
                  price: data?.price,
                  image: data?.thumbnail,
                  quantity: itemquantity,
                  totalPrice: data?.price * itemquantity,
                }),
                  $router.push('/cart')
              "
            >
              Add to cart
            </button>
          </div>
        </div>

        <div class="flex gap-[32px] flex-col md:flex-row">
          <div class="md:w-[506px] flex flex-col gap-[12px] basis-1/2">
            <div
              class="bg-gray-200 flex items-center justify-center rounded-[16px]"
            >
              <img
                :src="image ? image : data?.images[0]"
                alt="image"
                class="w-fit h-[650px] object-cover"
              />
            </div>
            <Tabs @change="handleCustomEvent" :tabs="data?.images" />
          </div>
          <div class="flex flex-col gap-[24px]">
            <div>
              <p class="font-bold text-[30px] text-[#101828]">
                {{ data?.title }}
              </p>
              <p class="font-bold text-[#0764A7]">
                {{ formatToUSD(Number(data?.price)) }}
              </p>
            </div>
            <div class="flex flex-col gap-[12px]">
              <p>Color</p>
              <Color />
            </div>
            <div class="flex flex-col gap-[12px]">
              <p>Size</p>
              <Size />
            </div>
            <div class="flex flex-col gap-[12px]">
              <p>Quantity</p>
              <div class="flex gap-[12px]">
                <button
                  class="bg-gray-300 p-2 rounded-[8px] md:w-[46px] md:h-[46px]"
                  @click="removeQuantity"
                >
                  -
                </button>
                <input
                  :value="itemquantity"
                  class="p-2 cursor-not-allowed rounded-[8px] w-fit md:w-[46px] md:h-[46px] text-center"
                  disabled
                />
                <button
                  class="bg-primary p-2 rounded-[8px] md:w-[46px] md:h-[46px]"
                  @click="addQuantity"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              {{ data?.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="my-[120px] flex flex-col gap-[32px] text-[30px] md:text-[80px] font-bold text-center"
    >
      Id Not Found
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../footer/Footer.vue";
import Navbar from "../navbar/Navbar.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
import { useProductStore } from "../../store/Product";
import Color from "../element/Color.vue";
import Size from "../element/Size.vue";
import Tabs from "../element/Tabs.vue";
import { formatToUSD } from "../../utils/convertToUsd";
const id = route.params.id;
const { addProduct } = useProductStore();
const { data } = (await useFetch(
  `https://dummyjson.com/products/${id}`
)) as any;

const itemquantity = ref(1);

const addQuantity = () => {
  itemquantity.value++;
};
var image = ref("");

const handleCustomEvent = (data: string) => {
  image.value = data;
};

const removeQuantity = () => {
  if (itemquantity.value > 0) {
    itemquantity.value--;
  }
};
</script>

<style scoped>
.content {
  background: linear-gradient(180deg, #d8eefd 14.05%, #fff 100%);
}
</style>
