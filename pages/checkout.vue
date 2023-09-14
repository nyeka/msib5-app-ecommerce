<template>
  <div class="content">
    <Navbar />
    <div class="p-8 text-white flex justify-center items-center h-[60vh]">
      <div class="mt-12 flex flex-col gap-[12px] items-center">
        <div class="text-center">
          <p class="text-[#101828] font-semibold">Thank you</p>
          <p class="text-[#98A2B3]">
            Your order will be processed immediately.
          </p>
        </div>
        <div
          class="flex button-home w-fit justify-between button-back gap-[12px] p-3 cursor-pointer justify-center items-center"
          @click="$router.push('/')"
        >
          <img src="~/assets/rumah.svg" alt="arrow left" />
          <span> Back To Home </span>
        </div>
      </div>
    </div>
    <FooterProductFooter />
  </div>
</template>

<style scoped>
.content {
  background: linear-gradient(180deg, #d8eefd 14.05%, #fff 100%);
}

.button-home {
  border-radius: 8px;
  border: #0984dd;
  background: #0984dd;

  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
</style>
