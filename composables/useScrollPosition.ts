import { ref, onMounted, onBeforeUnmount } from "vue";

export const useScrollPosition = () => {
  // Define a ref for the scroll position
  const scrollPosition = ref(0);

  // Function to update the scroll position
  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY;
  };

  // Use onMounted and onBeforeUnmount to add and remove the scroll event listener
  onMounted(() => {
    if (process.client) {
      // Check if running on the client side to access the window object
      window.addEventListener("scroll", updateScrollPosition);
      // Initialize the scroll position
      updateScrollPosition();
    }
  });

  onBeforeUnmount(() => {
    if (process.client) {
      // Check if running on the client side to access the window object
      window.removeEventListener("scroll", updateScrollPosition);
    }
  });

  return {
    scrollPosition,
  };
};
