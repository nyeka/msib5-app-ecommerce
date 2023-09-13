<script setup lang="ts">
import { ISODateString } from "next-auth/core/types";
import { useScrollPosition } from "../../composables/useScrollPosition";
import { RouterLink } from "vue-router";
const { scrollPosition } = useScrollPosition();
import { useProductStore } from "~/store/Product";

enum Status {
  Authenticated = "authenticated",
  Unauthenticated = "unauthenticated",
  Pending = "pending",
}

interface IStatus {
  value: Status;
  data: any;
}

interface IData {
  value: {
    user?: {
      name?: string | null;
      image?: string | null;
    };
    expires: ISODateString;
  };
}
const store = useProductStore();
const { status, data }: { status: IStatus; data: IData } = useAuth() as any;
const userImage = data?.value?.user?.image;
</script>
<template>
  <div
    :class="
      scrollPosition > 0
        ? 'bg-[#fff] fixed w-full flex justify-between items-center py-[18px] px-[32px] z-[10]'
        : 'fixed w-full flex justify-between items-center px-[32px] py-[18px]'
    "
  >
    <div class="flex gap-[12px] text-center text-[#475467]">
      <img src="~/assets/Logo.png" alt="logo" />
      <div class="md:flex hidden gap-[32px] list-none items-center">
        <RouterLink to="/">Home</RouterLink>
        <div class="flex gap-[12px]">
          <RouterLink to="/products/list">Products</RouterLink>
          <img src="~/assets/chevdown.svg" />
        </div>
        <div class="flex gap-[12px]">
          <li>Categories</li>
          <img src="~/assets/chevdown.svg" />
        </div>
      </div>
    </div>
    <div
      class="md:flex gap-[24px] items-center hidden"
      v-if="status.value != 'unauthenticated' && data != undefined"
    >
      <div class="relative" @click="$router.push('/cart')">
        <img
          src="~/assets/keranjang.svg"
          alt="cart"
          class="w-[33px] cursor-pointer"
        />
        <div class="absolute top-0 right-0" v-if="store.totalItemsCart > 0">
          <p
            class="text-[#fff] text-[10px] bg-[#DC6803] rounded-full w-[18px] h-[16px] flex justify-center items-center"
          >
            {{ store.totalItemsCart }}
          </p>
        </div>
      </div>
      <VAvatar :src="(userImage as string)" size="xl" />
    </div>
    <div class="md:flex gap-[24px] items-center hidden" v-else>
      <button class="text-[#475467]" @click="$router.push('/login')">
        Log in
      </button>
      <button
        class="text-[#fff] bg-[#0984DD] flex justify-center rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
      >
        Sign Up
      </button>
    </div>
    <div class="md:hidden">
      <img src="~/assets/burger.svg" alt="menu" />
    </div>
  </div>
</template>

<style scoped>
img {
  color: black;
}
</style>
