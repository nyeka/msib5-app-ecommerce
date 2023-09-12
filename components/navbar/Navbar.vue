<script setup lang="ts">
import { ISODateString } from "next-auth/core/types";
import { useScrollPosition } from "../../composables/useScrollPosition";
import { RouterLink } from "vue-router";
const { scrollPosition } = useScrollPosition();

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

const { status, data }: { status: IStatus; data: IData } = useAuth() as any;
</script>
<template>
  <div
    :class="
      scrollPosition > 0
        ? 'bg-[#fff] fixed w-full flex justify-between items-center py-[18px] px-[32px] z-[10]'
        : 'fixed w-full flex justify-between items-center px-[32px] py-[18px]'
    "
  >
    <div class="flex gap-[12px] text-center">
      <img src="~/assets/Logo.png" alt="logo" />
      <div class="md:flex hidden gap-[32px] list-none items-center">
        <RouterLink to="/">Home</RouterLink>
        <div class="flex gap-[12px]">
          <li>Products</li>
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
      <button class="text-[#475467]">Cart</button>
      <Avatar :src="data?.value?.user?.image as string || ''" size="xl" />
    </div>
    <div class="md:flex gap-[24px] items-center hidden" v-else>
      <button class="text-[#475467]">Log in</button>
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
