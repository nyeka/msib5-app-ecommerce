<template>
  <div>
    <Home />
    <CategoriesCategory />
    <SaleFlashsale />
    <LatestProduct />
    <Promo />
    <LatestProduct />
    <Foryou />
    <NewsletterNewsLetter />
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
  },
});
</script>
