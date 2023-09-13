<template>
  <div class="content font-semibold">
    <Navbar />
    <div
      class="container mx-auto p-8 flex flex-col items-center justify-center gap-[24px]"
    >
      <p class="text-[#101828] font-bold md:text-[40px] mt-[80px]">
        Product List
      </p>
      <div class="flex gap-[12px] w-full justify-center">
        <input placeholder="Search" v-model="query" class="flex basis-2/3" />
        <button>Sort By</button>
      </div>
      <div
        v-if="ProductData.value.length > 0"
        class="flex flex-col gap-[24px] justify-center items-center"
      >
        <div class="flex justify-center items-center gap-[24px] flex-wrap">
          <div v-for="item in ProductData.value as Iproduct[]">
            <ProductItems
              :title="item.title"
              :price="item.price"
              :thumbnail="item.thumbnail"
              :description="item.description"
              :id="item.id"
              :images="item.images"
              :category="item.category"
              :discountPercentage="item.discountPercentage"
            />
          </div>
        </div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          variant="text"
          :showLast="false"
          :showFirst="false"
          class="flex justify-between"
        >
          <template #btnPrev @click="goToTop">Prev</template>
          <template #btnNext @click="goToTop">Next</template>
        </VPagination>
      </div>
      <div v-else>
        <p>Theres No Data</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from "vue";
const query = ref("");
const ProductData = reactive({ value: [] });
const page = ref(1);
const totalItems = ref(0);
const itemsPerPage = ref(15);

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

const fetchData = async ({ value }: { value?: string }) => {
  const controller = new AbortController();

  try {
    // if (controller) {
    //   controller.abort();
    // }
    fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=${
        itemsPerPage.value
      }&skip=${page.value - 1}`,
      {
        signal: controller.signal,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        ProductData.value = res.products;
        totalItems.value = res.total;
        page.value = res.skip + 1;
      });
    console.log(ProductData.value);
  } catch (error) {
    console.log(error);
  }
};
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  fetchData({ value: query.value });
});

watch([query, page], ([value, page]) => {
  fetchData({ value });
});
</script>

<style scoped>
input,
button {
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d0d5dd);
  background: var(--base-white, #fff);
  padding: 10px 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.content {
  background: linear-gradient(180deg, #d8eefd 14.05%, #fff 100%);
}
</style>
