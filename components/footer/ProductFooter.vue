<template>
  <footer class="bg-[#1D2939] p-8 flex justify-center">
    <div class="flex flex-col gap-[24px] w-fit">
      <div
        class="text-[#fff] font-semibold flex flex-col gap-[24px] justify-center items-center"
      >
        <div class="text-center flex flex-col gap-[12px]">
          <p class="text-[30px]">Let's get started on something great</p>
          <p class="font-normal">
            Join over 4,000+ startups already growing with Morpheme.
          </p>
        </div>
        <div class="flex gap-[12px]">
          <button class="bg-[#fff] text-black">Chat to us</button>
          <button class="bg-primary">Get started</button>
        </div>
      </div>
      <div
        class="flex gap-[32px] md:gap-[72px] mx-auto text-[#fff] md:p-[24px] flex-wrap justiy-center items-center"
      >
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Product
          </li>
          <li>Overview</li>
          <li>Features</li>
          <div class="flex gap-[12px]">
            <li>Solutions</li>
            <span
              class="px-[8px] self-center bg-tertiary border-solid border-2 border-quaternary rounded-[16px] text-[12px]"
              >New</span
            >
          </div>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </div>
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Company
          </li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Media Kit</li>
          <li>Contact</li>
        </div>
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Resources
          </li>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>events</li>
          <li>Help Centre</li>
          <li>Tutorials</li>
          <li>Supports</li>
        </div>
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Resources
          </li>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>events</li>
          <li>Help Centre</li>
          <li>Tutorials</li>
          <li>Supports</li>
        </div>
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Social
          </li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Github</li>
          <li>Angelist</li>
          <li>Dribble</li>
        </div>
        <div class="list-none text-[16px] flex flex-col gap-[16px] pr-[24px]">
          <li class="text-[14px] flex flex-col gap-[16px] text-[#D0D5DD]">
            Legal
          </li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Licenses</li>
          <li>Settings</li>
          <li>Contact</li>
        </div>
      </div>
      <span class="w-full h-[1px] bg-[#475467]"></span>
      <div class="flex justify-between flex-wrap text-[#fff] font-semibold">
        <img src="~/assets/logo.png" alt="logo" />
        <p>&copy; 2077 Morpheme UI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  padding: 12px 20px;
  border-radius: 8px;
  border: #d0d5dd;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

@media screen and (max-width: 450px) {
  button {
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
